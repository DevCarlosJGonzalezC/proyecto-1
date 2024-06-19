document.querySelector('.add').addEventListener('click', function(event) {
    event.preventDefault();
    toggleDiv('agregarProducto');
});
document.querySelector('.edit').addEventListener('click', function(event) {
    event.preventDefault();
    toggleDiv('editarProducto');
});
document.querySelector('.delete').addEventListener('click', function(event) {
    event.preventDefault();
    toggleDiv('eliminarProducto');
});

function toggleDiv(divClass) {
    // Oculta todos los div
    document.querySelector('.agregarProducto').classList.add('ocultar');
    document.querySelector('.editarProducto').classList.add('ocultar');
    document.querySelector('.eliminarProducto').classList.add('ocultar');
    
    // Muestra el div seleccionado
    document.querySelector('.' + divClass).classList.remove('ocultar');
}
