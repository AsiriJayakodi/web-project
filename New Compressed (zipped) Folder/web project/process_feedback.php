<?php
require_once 'config/db_config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (isset($data['name']) && isset($data['email']) && isset($data['rating']) && isset($data['comment'])) {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        
        if ($conn->connect_error) {
            die(json_encode(['status' => 'error', 'message' => 'Database connection failed']));
        }

        $name = $conn->real_escape_string($data['name']);
        $email = $conn->real_escape_string($data['email']);
        $rating = intval($data['rating']);
        $comment = $conn->real_escape_string($data['comment']);

        $sql = "INSERT INTO feedback (customer_name, customer_email, rating, comment) 
                VALUES ('$name', '$email', $rating, '$comment')";

        if ($conn->query($sql) === TRUE) {
            $response = [
                'status' => 'success',
                'message' => 'Thank you for your feedback!'
            ];
        } else {
            $response = [
                'status' => 'error',
                'message' => 'Error submitting feedback: ' . $conn->error
            ];
        }

        $conn->close();
        echo json_encode($response);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Missing required fields']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
