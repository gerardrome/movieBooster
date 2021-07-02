<?php
include 'config.php';

class MySQLconnection {
	private $connDB = null;

	public function __construct(){
		global $USER_DB, $PASSWORD_DB, $IP_DB, $NAME_DB;

		$this->user = $USER_DB;
		$this->password = $PASSWORD_DB;
		$this->ip = $IP_DB;
		$this->db = $NAME_DB;
	}

	public function connectionDB(){
		$this->connectionDB = new mysqli($this->ip, $this->user, $this->password, $this->db);
		if ($this->connectionDB->connect_error) {
			echo 'error al conectar con DB' . $this->connectionDB->connect_error;
			return false;
		}else{
			return $this->connectionDB;
		}
	}
}

// <!-- con codigo mysql... insertar, editar, eliminar y obtener "enoctrar por cada uno de los datos" -->
// <!-- hacer interfas para llenar datos de registro usuario -->

// <!--
// 	-------- INSTRUCION PARA AGREGAR A UNA TABLA -----------
// INSERT INTO `usuarios` (`nombre`, `correo` `password`) VALUES ('princes','princes@mail.com','princ2');
// INSERT INTO `usuarios` (`correo`, `nombre` `password`) VALUES ('nancy@mail.com','nancy','1234nan'); -->

// <!-- 
// 	------- INSTRUCCION PARA EDITAR UN USUARIO --------
// UPDATE `usuarios` SET `nombre` = 'gerardromee',`correo` = 'gerardrome@mail.comm' WHERE id = 2; == aqui se esta editando solo el nombre y mail del usuario buscado por su id,
// 																								los demas datos permancen igual a como estaban  -->


// <!--
// 	-------- INSTRUCCIONES PARA OBTENER USUARIOS --------
// SELECT * FROM `usuarios` WHERE id = 2; == devuelve solo el usuario del id 2
// SELECT * FROM `usuarios` WHERE nombre = 'nancy'; == devuelve los usuarios encontrados con 'nancy'
// SELECT * FROM `usuarios`; == devuelve todos los usuarios -->

// <!-- 
// 	-------- INSTRUCCION PARA ELIMINAR ---------
// DELETE FROM `usuarios` WHERE id = 7; == se eimina el usuario mediante su id  -->



?>

