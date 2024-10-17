<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Updated database connection details
$host = "srv1668.hstgr.io";
$db_name = "u417995338_OHLC1m";
$username = "u417995338_OHLC1m";
$password = "Host@0904";

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Get query parameters
    $symbol = isset($_GET['symbol']) ? $_GET['symbol'] : '';
    $timeframe = isset($_GET['timeframe']) ? $_GET['timeframe'] : '';
    
    // Prepare SQL query
    $query = "SELECT datetime, open, high, low, close, volume 
              FROM ohlc_data 
              WHERE symbol = :symbol AND timeframe = :timeframe 
              ORDER BY datetime";
    
    $stmt = $conn->prepare($query);
    $stmt->bindParam(":symbol", $symbol);
    $stmt->bindParam(":timeframe", $timeframe);
    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($result);
}
catch(PDOException $e) {
    echo json_encode(array("error" => "Database connection failed: " . $e->getMessage()));
}

$conn = null;
?>