<?php
	include 'connection-mysql.php';
		$DB = new MySQLconnection();
		$connection = $DB->connectionDB();

	$name = $_POST['name'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	$sql = "INSERT INTO usuarios (nombre, correo, password) VALUES ('$name', '$email', '$password')";
	// $sqlId = "DELETE FROM usuarios WHERE id = 2";


	if (empty($name)) {
		echo json_encode(['status' => 'error', 'msj' => 'favor de ingresar su nombre']);
		exit;
	}else if(empty($email)){
		echo json_encode(['status' => 'error', 'msj' => 'favor de ingresar su correo']);
		exit;
	}else if(empty($password)){
		echo json_encode(['status' => 'error', 'msj' => 'favor de ingresar una contraseña']);
		exit;
	}

	
	if ($connection->query($sql) && !empty($name)) {
		echo json_encode(['status' => 'ok', 'msj' => 'usuario agregado correctamente']);
		// echo 'se agrego correctamente';
	}else{
		echo 'error al guardar' .$connection->error;
	}
	$connection->close();
?>