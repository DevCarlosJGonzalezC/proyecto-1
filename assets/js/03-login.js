document.getElementById('loginForm').addEventListener('submit', function(evento) {
    evento.preventDefault();


let userName = document.getElementById('usuario').value;
let password = document.getElementById('contraseña') .value;

if (userName === "admin" && password === "admin123"){
    console.log("Contraseña correcta");
    // alert("Contraseña correcta");
    window.location.href = '06-administrador.html';
}else {
    console.log("Usuario o Contraseña incorrecta");
    alert("Usuario o contraseña incorrecta")
}

})