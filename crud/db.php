<?php
$dsn = 'mysql:host=localhost;dbname=s147375';
$username = 's147375';
$password = '2swh0AR4cZ9j';
$options = [];
try {
$connection = new PDO($dsn, $username, $password, $options);
} catch(PDOException $e) {

}
