<?php
include 'connection-mysql.php';
$DB = new MySQLconnection();
$connection = $DB->connectionDB();

$data = json_decode(file_get_contents('php://input'), true);
$sql = "DELETE FROM usuarios WHERE id = {$data['id']}";

$connection->query($sql);
echo json_encode('diste click en eliminar');
$connection->close();

?>