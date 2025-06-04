<?php
session_start();
require_once 'config/db_config.php'; // Defines DB_HOST, DB_USER, DB_PASS, DB_NAME

header('Content-Type: application/json');

// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

$response = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // --- Basic Validation --- 
    $required_fields = ['name', 'phone', 'email', 'address', 'payment_method', 'items', 'total'];
    $missing_fields = [];
    foreach ($required_fields as $field) {
        if (empty($data[$field]) && $field !== 'items') { // items can be empty if cart is empty, though ideally cart shouldn't be empty
            $missing_fields[] = $field;
        }
    }
    if (empty($data['items'])) { // Specifically check items array
        $missing_fields[] = 'items';
    }

    if (!empty($missing_fields)) {
        $response = ['status' => 'error', 'message' => 'Missing required fields: ' . implode(', ', $missing_fields)];
        echo json_encode($response);
        exit;
    }

    // Further validation for payment_method 'card'
    if ($data['payment_method'] === 'card') {
        $card_required_fields = ['cardNumber', 'cardExpiry', 'cardCVV', 'cardName'];
        foreach ($card_required_fields as $field) {
            if (empty($data[$field])) {
                $missing_fields[] = $field;
            }
        }
        if (!empty($missing_fields) && in_array('cardNumber', $missing_fields)) { // Re-check missing_fields for card details
             $response = ['status' => 'error', 'message' => 'Missing card details for card payment: ' . implode(', ', array_diff($card_required_fields, array_keys($data)))];
             echo json_encode($response);
             exit;
        }
    }

    // --- Sanitize Input (Basic) --- 
    // Use mysqli_real_escape_string once connection is established
    $customer_name_form = $data['name'];
    $customer_email_form = $data['email'];
    $customer_phone_form = $data['phone'];
    $delivery_address_form = $data['address'];
    $payment_method_form = $data['payment_method'];
    $order_items_form = $data['items']; // Array of items
    $total_amount_form = floatval($data['total']);
    $special_instructions_form = isset($data['special_instructions']) ? $data['special_instructions'] : '';

    // Card details (do not store these directly in DB long-term in a real app without PCI compliance)
    $card_number_form = ($payment_method_form === 'card' && isset($data['cardNumber'])) ? $data['cardNumber'] : null;
    // $card_expiry_form = ($payment_method_form === 'card' && isset($data['cardExpiry'])) ? $data['cardExpiry'] : null;
    // $card_cvv_form = ($payment_method_form === 'card' && isset($data['cardCVV'])) ? $data['cardCVV'] : null;
    // $card_name_form = ($payment_method_form === 'card' && isset($data['cardName'])) ? $data['cardName'] : null;

    $conn = null; // Initialize $conn
    try {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if ($conn->connect_error) {
            throw new Exception('Database connection failed: ' . $conn->connect_error);
        }
        $conn->set_charset('utf8mb4');
        $conn->begin_transaction();

        // --- Sanitize with connection --- 
        $customer_name_form_safe = $conn->real_escape_string($customer_name_form);
        $customer_email_form_safe = $conn->real_escape_string($customer_email_form);
        $customer_phone_form_safe = $conn->real_escape_string($customer_phone_form);
        $delivery_address_form_safe = $conn->real_escape_string($delivery_address_form);
        $payment_method_form_safe = $conn->real_escape_string($payment_method_form);
        $special_instructions_form_safe = $conn->real_escape_string($special_instructions_form);

        // --- 1. Customer Handling (Lookup or Create) --- 
        $customer_id = null;
        $stmt_customer_lookup = $conn->prepare("SELECT id FROM customers WHERE email = ?");
        $stmt_customer_lookup->bind_param("s", $customer_email_form_safe);
        $stmt_customer_lookup->execute();
        $result_customer = $stmt_customer_lookup->get_result();
        if ($result_customer->num_rows > 0) {
            $customer_row = $result_customer->fetch_assoc();
            $customer_id = $customer_row['id'];
            // Optionally, update customer details if they've changed
            $stmt_update_customer = $conn->prepare("UPDATE customers SET name = ?, phone = ?, address = ? WHERE id = ?");
            $stmt_update_customer->bind_param("sssi", $customer_name_form_safe, $customer_phone_form_safe, $delivery_address_form_safe, $customer_id);
            $stmt_update_customer->execute();
            $stmt_update_customer->close();
        } else {
            $stmt_insert_customer = $conn->prepare("INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)");
            // Use delivery_address_form_safe for the customer's primary address if creating new
            $stmt_insert_customer->bind_param("ssss", $customer_name_form_safe, $customer_email_form_safe, $customer_phone_form_safe, $delivery_address_form_safe);
            $stmt_insert_customer->execute();
            $customer_id = $conn->insert_id;
            $stmt_insert_customer->close();
        }
        $stmt_customer_lookup->close();

        if (!$customer_id) {
            throw new Exception('Failed to create or find customer.');
        }

        // --- 2. Insert Order --- 
        $order_status = 'Pending';
        $stmt_order = $conn->prepare("INSERT INTO orders (customer_id, total_amount, delivery_address, customer_phone_order, customer_name_order, order_status, special_instructions) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt_order->bind_param("idsssss", $customer_id, $total_amount_form, $delivery_address_form_safe, $customer_phone_form_safe, $customer_name_form_safe, $order_status, $special_instructions_form_safe);
        $stmt_order->execute();
        $order_id = $conn->insert_id;
        $stmt_order->close();

        if (!$order_id) {
            throw new Exception('Failed to create order.');
        }

        // --- 3. Insert Order Items --- 
        $stmt_order_item = $conn->prepare("INSERT INTO order_items (order_id, menu_item_id, quantity, price_at_order, subtotal) VALUES (?, ?, ?, ?, ?)");
        foreach ($order_items_form as $item) {
            if (!isset($item['id']) || !isset($item['quantity']) || !isset($item['price'])) {
                throw new Exception('Invalid item data in order.');
            }
            $menu_item_id = intval($item['id']);
            $quantity = intval($item['quantity']);
            $price_at_order = floatval($item['price']);
            $subtotal = $quantity * $price_at_order;
            $stmt_order_item->bind_param("iiidd", $order_id, $menu_item_id, $quantity, $price_at_order, $subtotal);
            $stmt_order_item->execute();
        }
        $stmt_order_item->close();

        // --- 4. Insert Payment --- 
        $payment_status = 'Pending'; // For cash, it's pending until delivery. For card, pending until gateway confirmation.
        $transaction_id = null;
        if ($payment_method_form_safe === 'card') {
            // In a real scenario, you would integrate with a payment gateway here.
            // The gateway would process $card_number_form etc., and return a transaction ID.
            // For now, we simulate a successful card pre-authorization.
            $transaction_id = 'SIMULATED_CARD_TXN_' . uniqid(); 
            // $payment_status might become 'Completed' if gateway confirms immediately, or stay 'Pending'.
        }

        $stmt_payment = $conn->prepare("INSERT INTO payments (order_id, amount, payment_method, payment_status, transaction_id) VALUES (?, ?, ?, ?, ?)");
        $stmt_payment->bind_param("idsss", $order_id, $total_amount_form, $payment_method_form_safe, $payment_status, $transaction_id);
        $stmt_payment->execute();
        $stmt_payment->close();

        $conn->commit();
        $response = [
            'status' => 'success',
            'message' => 'Order placed successfully!',
            'order_id' => $order_id
        ];

        // --- Optional: Send Confirmation Email --- 
        // (Ensure your server is configured to send emails)
        /*
        $to = $customer_email_form_safe;
        $subject = "Your Green Garden Bistro Order #{$order_id} Confirmed";
        $email_body = "Dear {$customer_name_form_safe},<br><br>Thank you for your order! Your order ID is: <strong>{$order_id}</strong>.<br>";
        $email_body .= "Total Amount: Rs. {$total_amount_form}<br>";
        $email_body .= "Payment Method: {$payment_method_form_safe}<br>";
        $email_body .= "Delivery Address: {$delivery_address_form_safe}<br><br>We will notify you once it's out for delivery.<br><br>Thanks,<br>Green Garden Bistro";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: Green Garden Bistro <no-reply@yourdomain.com>' . "\r\n";
        // mail($to, $subject, $email_body, $headers);
        */

    } catch (Exception $e) {
        if ($conn) {
            $conn->rollback();
        }
        $response = ['status' => 'error', 'message' => 'Order processing failed: ' . $e->getMessage()];
        error_log('Order Processing Error: ' . $e->getMessage() . ' Data: ' . json_encode($data)); // Log more details
    } finally {
        if ($conn) {
            $conn->close();
        }
    }
} else {
    $response = ['status' => 'error', 'message' => 'Invalid request method.'];
}

echo json_encode($response);
?>
