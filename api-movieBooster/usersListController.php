<?php
	$inclu = include 'connection-mysql.php';
	// $DB = new MySQLconnection();
	// $connection = $DB->connectionDB();
	// if ($inclu) {
	// 	$consulta = "SELECT * FROM usuarios";
	// 	$resultado = mysqli_query($connection,$consulta);
	// 	if ($result) {
	// 		while ($row = $resultado->fetch_array()) {
	// 			$id = $row['id'];
	// 			$nombre = $row['nombre'];
	// 			$correo = $row['correo'];
	// 			echo json_encode($nombre);
	// 		}
	// 	}
	// }
$DB = new MySQLconnection();
$connection = $DB->connectionDB();

$sql = "SELECT id, nombre, correo FROM usuarios";
	
	
	
if ($result = $connection->query($sql)) {
	$list = $result->fetch_assoc();
	print json_encode($list);
	echo 'se realizo la conexion exitosa';
}else{
	echo 'error al conectar' .$connection->error;
	throw new Exception("Error Processing Request");
}

$connection->close();




?>