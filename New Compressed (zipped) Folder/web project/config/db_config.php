<?php
// Database configuration for InfinityFree
define('DB_HOST', 'sql103.byetcluster.com');
define('DB_USER', 'if0_39158855'); // Your MySQL username
define('DB_PASS', 'YOUR_PASSWORD_HERE'); // Replace with your MySQL password
define('DB_NAME', 'if0_39158855_mywebapp'); // Your DB name

// Create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
