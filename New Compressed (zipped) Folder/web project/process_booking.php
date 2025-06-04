<?php
header('Content-Type: application/json');
require_once 'config/db_config.php';

// Get JSON data from request
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'phone', 'date', 'time', 'guests'];
foreach ($required_fields as $field) {
    if (!isset($data[$field]) || empty($data[$field])) {
        echo json_encode(['status' => 'error', 'message' => "Missing required field: $field"]);
        exit;
    }
}

// Prepare data for database
$booking_data = [
    'name' => $data['name'],
    'email' => $data['email'],
    'phone' => $data['phone'],
    'date' => $data['date'],
    'time' => $data['time'],
    'guests' => $data['guests'],
    'occasion' => $data['occasion'] ?? '',
    'special_requests' => $data['specialRequests'] ?? '',
    'status' => 'pending',
    'created_at' => date('Y-m-d H:i:s')
];

try {
    // Insert booking into database
    $stmt = $conn->prepare("INSERT INTO bookings (name, email, phone, date, time, guests, occasion, special_requests, status, created_at) 
                          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    
    $stmt->execute([
        $booking_data['name'],
        $booking_data['email'],
        $booking_data['phone'],
        $booking_data['date'],
        $booking_data['time'],
        $booking_data['guests'],
        $booking_data['occasion'],
        $booking_data['special_requests'],
        $booking_data['status'],
        $booking_data['created_at']
    ]);

    // Get the booking ID
    $booking_id = $conn->lastInsertId();

    // Return success response
    echo json_encode([
        'status' => 'success',
        'message' => 'Booking created successfully',
        'booking_id' => $booking_id
    ]);

} catch (PDOException $e) {
    error_log("Booking error: " . $e->getMessage());
    echo json_encode([
        'status' => 'error',
        'message' => 'Database error occurred. Please try again later.'
    ]);
}
?>
