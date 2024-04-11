//CODIGO DEL LOGIN DEL ADMINISTRADOR

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

//LOGICA DE LOS ENLACES AGREGAR, EDITAR Y ELIMINAR PRODUCTOS.
const enlace = () => {
    console.log("prueba boton 1");
    // let ancla =  document.getElementsByClassName('add');
    // for(let i =0; i < ancla.length; i++) {
    //     ancla[i].classList.toggle('ocultar');
    // }
}

// let agregarProducto = document.getElementById('add');
// let editarProducto = document.getElementById('edit');
// let eliminarProducto = document.getElementById('delte');


