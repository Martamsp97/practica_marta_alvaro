/* <div class="planta_container">
    <figure>
        <img src="" alt="" >
    </figure>
        <div class="plant_desc">
            <h3>Nombre Planta</h3>
            <p>Descripcion Planta</p>
        </div>
        <div class="precio_cart">
            <p> Precio </p>   <a class="btn"><i></a>
        </div>
</div> */

const botonCarro = document.querySelector('.button');
const section = document.querySelector('#plants_expo');
const carrito = document.querySelector('#carrito');
let plantasEnCarrito = [];

// Función para agregar plantas al carrito
/* function addToCart(plant) {
    // Verifica si la planta ya está en el carrito
    const existingPlant = plantasEnCarrito.find(item => item.id === plant.id);
    if (existingPlant) {
        existingPlant.cantidad += 1; // Incrementa la cantidad
    } else {
        plantasEnCarrito.push({ ...plant, cantidad: 1 }); // Agrega la planta con cantidad inicial de 1
    }
    // Muestra el carrito después de agregar una planta
    showCarrito();
} */
//Pintamos en la sección html general el catalogo  de plantas

const printOnePlant = function (plant, domUbi) {
    const div = document.createElement('div')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const divDesc = document.createElement('div')
    const divPrecio = document.createElement('div')
    const desc = document.createElement('p')
    const precio = document.createElement('p')
    const a = document.createElement('a')

    //Creacion de clases
    div.classList.add('planta_container')
    divDesc.classList.add('plant_desc')
    divPrecio.classList.add('precio_cart')
    a.classList.add('btn')

    //Pintado de contenido
    img.src = `${plant.imagen}`
    h3.textContent = `${plant.nombre}`
    desc.textContent = `${plant.descripcion}`
    precio.textContent = `${plant.precio} €`
    a.href = '#'
    a.innerHTML = '<i class="fa-solid fa-cart-plus"></i>'


    //Evento de añadir productos al carrito con el botón
    /*  a.addEventListener('click', (event) => {
         event.preventDefault();
         addToCart(plant);
     }); */

    //Anexo de las partes
    figure.appendChild(img)
    divDesc.append(h3, desc)
    divPrecio.append(precio, a)
    div.append(figure, divDesc, divPrecio)
    domUbi.append(div)

}

const printAllPlants = function (plantList, domUbi) {
    plantList.forEach(planta => printOnePlant(planta, domUbi))
}


const paginacion = function (plantList, domUbi, page, cantPlants) {
    domUbi.textContent = "";

    const start = (page - 1) * cantPlants
    const end = page * cantPlants
    const paginado = plantList.slice(start, end)
    printAllPlants(paginado, domUbi)

}
paginacion(plantas, section, 1, 16)

const botonprev = document.querySelector('.prev_page');
const bottonext = document.querySelector('.next_page');

botonprev.addEventListener('click', () =>
    paginacion(plantas, section, 1, 16)
)


bottonext.addEventListener('click', () => paginacion(plantas, section, 2, 16));


/* botonCarro.addEventListener('click', showCarrito); */

/* function showCarrito() {
    if (carrito.style.display === "block") {
        carrito.style.display = "none"; // Oculta el carrito si ya está visible
    } else {
        carrito.style.display = "block"; // Muestra el carrito
        printCarrito(plantasEnCarrito, carrito); // Actualiza el contenido del carrito
    }
}
 */



/*
<section id="carrito">
<!--   <div class="topcarro">
      <h2>Artículos del carrito</h2>
      <button class="cerrar">X</button>

  </div>
  <ul>
      <li>
          <h3>Título del producto</h3>
          <div class="cantidad">
              <p>Cantidad: </p>
              <div>
                  <button>+</button>
                  <button>-</button>
              </div>
          </div>

          <p>Precio: </p>


      </li>

  </ul>
  <hr>
  <p>Total: </p> -->

</section> */

//Funciones para pintar las plantas en el carrito
/* function printOneCarrito(planta, dom) {
    //Creación de todos los elementos
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const divCantidad = document.createElement('div');
    const cantidad = document.createElement('p');
    const divButton = document.createElement('div');
    const incremento = document.createElement('button');
    const decrimento = document.createElement('button');
    const precio = document.createElement('p');
    const hr = document.createElement('hr');
    const total = document.createElement('p');

    //creación de las clases
    divCantidad.classList.add('cantidad');

    //Pintado de contenido
    h3.textContent = `${planta.nombre}`
    cantidad.textContent = `Cantidad ${planta.cantidad}`
    incremento.textContent = "+";
    decrimento.textContent = "-";
    precio.textContent = `Precio: ${planta.precio}`;
    total.textContent = `Total: ${planta.total}`;

    //Anexo de las partes
    divButton.append(incremento, decrimento)
    divCantidad.append(cantidad, divButton)
    li.append(h3, divCantidad, precio)
    ul.appendChild(li)
    dom.append(ul, hr, total)

}



const printCarrito = function (plantList, dom) {
    dom.innerHTML = "";
    plantList.forEach(planta => printOneCarrito(planta, dom))
}
printCarrito(plantas, carrito)




 */