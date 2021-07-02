<?php
  include 'connection-mysql.php';
    $connect = new MySQLconnection();
    
    echo json_encode($connect->connectionDB());
// json_encode() pinta en consola la informacion en parametro ($_POST) "formMovie"
  // $_POST devuelve la informacion mandada al post "formMovie"
  echo json_encode($_POST['name']);

?>

