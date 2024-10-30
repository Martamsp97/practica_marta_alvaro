const section = document.querySelector('#plants_expo');

//Pintamos en la seccion html general el catalogo  de plantas
const printOnePlant = function (plant, domUbi) {
    const div = document.createElement('div');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const divDesc = document.createElement('div');
    const divPrecio = document.createElement('div');
    const desc = document.createElement('p');
    const precio = document.createElement('p');
    const boton = document.createElement('button');

    // Creacion de clases
    div.classList.add('planta_container');
    divDesc.classList.add('plant_desc');
    divPrecio.classList.add('precio_cart');
    boton.classList.add('btn');

    // Pintado de contenido
    img.src = `${plant.imagen}`;
    h3.textContent = `${plant.nombre}`;
    desc.textContent = `${plant.descripcion}`;
    precio.textContent = `${plant.precio} €`;
    boton.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';


    boton.addEventListener('click', () => agregarAlCarrito(plant));

    // Anexo de las partes
    figure.appendChild(img);
    divDesc.append(h3, desc);
    divPrecio.append(precio, boton);
    div.append(figure, divDesc, divPrecio);
    domUbi.append(div);
};


const printAllPlants = function (plantList, domUbi) {
    plantList.forEach(planta => printOnePlant(planta, domUbi))
}


const paginacion = function (plantList, domUbi, page, cantPlants) {
    domUbi.textContent = "";

    const inicio = (page - 1) * cantPlants
    const fin = page * cantPlants
    const paginado = plantList.slice(inicio, fin)
    printAllPlants(paginado, domUbi)

}

paginacion(plantas, section, 1, 16)

const botonprev = document.querySelector('.prev_page');
const bottonext = document.querySelector('.next_page');

botonprev.addEventListener('click', () => paginacion(plantas, section, 1, 16))

bottonext.addEventListener('click', () => paginacion(plantas, section, 2, 16))





