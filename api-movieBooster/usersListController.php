<?php
$inclu = include 'connection-mysql.php';
$DB = new MySQLconnection();
$connection = $DB->connectionDB();

$idUser = $_POST;
	
$sql = "SELECT id, nombre, correo FROM usuarios";
$sqlDelete = "DELETE FROM usuarios WHERE id = $idUser";


$result = $connection->query($sql);
$response = [
	'status' => '',
	'data' => []
];

if ($result) {
	while ($row = $result->fetch_array()) {
		$response['data'][] = $row;
	}

	$response['status'] = 'ok';

	echo json_encode($response);
}else{
	$response = [
		'status' => 'ok',
		'data' => []
	];
	echo json_encode($response);

}

	
	
// if () {
// 	$list = $result->fetch_assoc();
// 	print json_encode($list);
// 	echo 'se realizo la conexion exitosa';
// }else{
// 	echo 'error al conectar' .$connection->error;
// 	throw new Exception("Error Processing Request");
// }

// $connection->close();

?>