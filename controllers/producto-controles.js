import { productoServices } from "../services/producto-servicios.js";

const nuevoProducto = (imagenUrl, name, precio, id) =>{
  const card = document.createElement('div')

  const contenido = `
  <div class="productos__box">
      <h2 class="productos__subtitulo">${name}</h2>
      <img class="productos__imagen"
          src="${imagenUrl}" alt="diadema">
      <p class="productos__descripcion"><strong>Precio:</strong>${precio}</p>
      <a href="./07-verProducto.html?id=${id}" class="productos__link">Comprar</a>
  </div>
  `

  card.innerHTML = contenido;

  return card;
}

const productos = document.querySelector("[data-product-diadema]")

const render = async () => {
  try {
      const listaProductos = await productoServices.listaProductos()

      listaProductos.forEach(elemento => {
          productos.appendChild(
              nuevoProducto(
                  elemento.imagenUrl,
                  elemento.name,
                  elemento.precio,
                  elemento.id
              )
          )
      });
  } catch (error) {
      console.log(error);
  }
}

render();