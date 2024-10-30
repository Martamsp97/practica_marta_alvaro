const botonCarro = document.querySelector('.button');
const section = document.querySelector('#plants_expo');
const carrito = document.querySelector('#carrito');

let plantasEnCarrito = [];

// Agregar planta carrito
function agregarAlCarrito(plant) {
    // Verificar si existe la planta en el carrito
    const existingPlant = plantasEnCarrito.find(p => p.id === plant.id);
    const planta = plantas.find(p => p.id === plant.id); // Buscar la planta en el array original para obtener el stock

    if (existingPlant) {
        // Si la cantidad en el carrito es menor que el stock, permite añadir
        if (existingPlant.cantidad < planta.stock) {
            existingPlant.cantidad += 1;
        } else {
            alert(`No podemos venderte mas ${planta.nombre}, no nos queda!! `);
        }
    } else {
        // Si la planta no está en el carrito, añádela solo si el stock es mayor a 0
        if (planta.stock > 0) {
            plantasEnCarrito.push({ ...plant, cantidad: 1 });
        } else {
            alert(`No hay stock disponible para ${planta.nombre}.`);
        }
    }

    // Mostrar el carrito y actualizar su contenido
    carrito.style.display = "block";
    printCarrito();
}

//Pintamos en la sección html general el catalogo  de plantas
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

    // Creación de clases
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

    // Asociar el botón con la función de añadir al carrito
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

function showCarrito() {
    printCarrito(plantasEnCarrito, carrito);
    if (carrito.style.display !== "block") {
        carrito.style.display = "block";
    } else {
        carrito.style.display = "none";
    }
}

botonCarro.addEventListener('click', showCarrito)


// Función para incrementar la cantidad de una planta en el carrito
function incrementarCantidad(plantaId) {
    const plantaCarrito = plantasEnCarrito.find(planta => planta.id === plantaId);
    const plantaStock = plantas.find(planta => planta.id === plantaId);

    if (plantaCarrito && plantaStock) {
        if (plantaCarrito.cantidad < plantaStock.stock) {
            plantaCarrito.cantidad += 1;
            printCarrito();
        } else {
            alert(`No queda más stock de ${plantaCarrito.nombre}.`);
        }
    }
}

// Función para decrementar la cantidad de una planta en el carrito
function decrementarCantidad(plantaId) {
    const planta = plantasEnCarrito.find(planta => planta.id === plantaId);
    if (planta) {
        planta.cantidad -= 1;
        if (planta.cantidad === 0) {

            plantasEnCarrito = plantasEnCarrito.filter(planta => planta.id !== plantaId);
        }
        printCarrito();
    }
}

// Función para pintar una planta en el carrito
function calcularTotalCarrito() {
    return plantasEnCarrito.reduce((total, planta) => total + (planta.precio * planta.cantidad), 0);
}

function printOneCarrito(planta, dom) {
    // Creación de elementos
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const divCantidad = document.createElement('div');
    const cantidad = document.createElement('p');
    const divButton = document.createElement('div');
    const incremento = document.createElement('button');
    const decremento = document.createElement('button');
    const precio = document.createElement('p');
    const hr = document.createElement('hr');


    // Creación de clases
    divCantidad.classList.add('cantidad');

    // Pintado de contenido
    h3.textContent = `${planta.nombre}`;
    cantidad.textContent = `Cantidad: ${planta.cantidad}`;
    incremento.textContent = "+";
    decremento.textContent = "-";
    precio.textContent = `Precio: ${planta.precio} €`;


    // Agregar eventos a los botones de incremento y decremento
    incremento.addEventListener('click', () => incrementarCantidad(planta.id));
    decremento.addEventListener('click', () => decrementarCantidad(planta.id));

    // Anexo de las partes
    divButton.append(incremento, decremento);
    divCantidad.append(cantidad, divButton);
    li.append(h3, divCantidad, precio);
    ul.appendChild(li);
    dom.append(ul, hr);
}

function calcularTotalCarrito() {
    return plantasEnCarrito.reduce((total, planta) => total + (planta.precio * planta.cantidad), 0);

}
function comprarPlanta() {

    plantasEnCarrito.forEach(plantaCarrito => {
        const plantaCatalogo = plantas.find(p => p.id === plantaCarrito.id);
        if (plantaCatalogo) {
            plantaCatalogo.stock -= plantaCarrito.cantidad;
        }
    });


    plantasEnCarrito = [];
    printCarrito();
    alert("Compra realizada con éxito. ¡Gracias por tu compra!");
}

function interiorCarrito() {
    const totalCarrito = document.createElement('p');
    const comprar = document.createElement('button');

    comprar.classList.add('comprar');
    totalCarrito.classList.add('total-carrito');

    comprar.textContent = 'Comprar';
    totalCarrito.textContent = `Total del carrito: ${calcularTotalCarrito().toFixed(2)} €`;

    comprar.addEventListener('click', comprarPlanta);

    carrito.append(totalCarrito, comprar);
}
function printCarrito() {
    carrito.textContent = '';
    plantasEnCarrito.forEach(planta => printOneCarrito(planta, carrito));

    if (plantasEnCarrito.length > 0) {
        interiorCarrito();
    } else {
        carrito.innerHTML += '<p> Estoy vacio! </p>'
    }

}