<?php
include 'config.php';

if($_SERVER["REQUEST_METHOD"]=="POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];

    //Validar datos
    if(empty($nombre)|| empty($email)|| empty($contraseña)){
        die("Todos los campos son requeridos");
    }

    //validacion si el ussario ya est registrado

    $sql = "SELECT email FROM users WHERE email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execte();
    $stmt->store_result();
    if($stmt->num_rows > 0){
        die("El email ya esta registrado")
    }
    $stmt->close();

    //Hashear la contraseña

    $hashed_password = password_hash($contraseña, PASSWORD_DEFAULT);

    //Insertar nuvo usuario
    $sql = "INSERT INTO users (nombre, email, contraseña) VALUES (?,?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre, $email, $hashed_password);
    if($stmt->execute){
        echo "Usuario registrado exitosamente";
    } else {
        eho "Error al registrar el usuario: " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
?>