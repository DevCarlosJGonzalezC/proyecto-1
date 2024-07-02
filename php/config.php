<?php
$servername = "localhost";
$username = "root";
$password = "Abc12345";
$dbname = "db_aquistore";

//Creando conexión
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn -> connect_error) {
    die("Conexion fallida:" . $conn-> connect_error);
}
?>