<?php

$servername = "mysql-php8-2:3311";
$username = "homestead";
$password = "secret";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";