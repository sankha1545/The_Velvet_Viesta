<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "the_velvet_viesta";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $startDate = $_POST['startDate'];
    $endDate = $_POST['endDate'];
    $daysStayed = (strtotime($endDate) - strtotime($startDate)) / (60 * 60 * 24);
    $costPerDay = 100;
    $totalCost = $daysStayed * $costPerDay;

    $sql = "INSERT INTO bookings (first_name, last_name, email, phone_number, start_date, end_date, total_cost)
            VALUES ('$firstName', '$lastName', '$email', '$phone', '$startDate', '$endDate', '$totalCost')";

    if ($conn->query($sql) === TRUE) {
        echo "Booking successfully saved.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
