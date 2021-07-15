<?php
include 'connection-mysql.php';
$DB = new MySQLconnection();
$connection = $DB->connectionDB();


$data = json_decode(file_get_contents('php://input'), true);
$sql = "SELECT * FROM usuarios WHERE id = {$data['id']}";

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

// echo json_encode('seleccionaste uno para editar');
$connection->close();

?>