const botonCarro = document.querySelector('.button');
const carrito = document.querySelector('#carrito');
const botonCerrarCarrito = document.querySelector('#cerrarCarrito');
const contenidoCarrito = document.querySelector('#contenidoCarrito');

let plantasEnCarrito = [];

// Mostrar u ocultar carrito
function showCarrito() {
    if (carrito.style.display !== "block") {
        printCarrito();
        carrito.style.display = "block";
    } else {
        carrito.style.display = "none";
    }
}

botonCarro.addEventListener('click', showCarrito);
botonCerrarCarrito.addEventListener('click', () => {
    carrito.style.display = 'none';
});

function agregarAlCarrito(plant) {
    const existingPlant = plantasEnCarrito.find(planta => planta.id === plant.id);
    const planta = plantas.find(planta => planta.id === plant.id);

    if (existingPlant) {
        if (existingPlant.cantidad < planta.stock) {
            existingPlant.cantidad += 1;
        } else {
            alert(`No podemos venderte más ${planta.nombre}, no nos queda!! `);
        }
    } else {
        if (planta.stock > 0) {
            plantasEnCarrito.push({ ...plant, cantidad: 1 });
        } else {
            alert(`No hay stock disponible para ${planta.nombre}.`);
        }
    }

    carrito.style.display = "block";
    printCarrito();
}

function printCarrito() {
    contenidoCarrito.innerHTML = '';

    if (plantasEnCarrito.length > 0) {
        plantasEnCarrito.forEach(planta => printOneCarrito(planta, contenidoCarrito));
        interiorCarrito();
    } else {
        contenidoCarrito.innerHTML = '<p>Estoy vacío!</p>';
    }
}
// Función para sumar al carrito
function incrementarCantidad(plantaId) {
    const plantaCarrito = plantasEnCarrito.find(planta => planta.id === plantaId);
    const plantaStock = plantas.find(planta => planta.id === plantaId);

    if (plantaCarrito && plantaStock) {
        if (plantaCarrito.cantidad < plantaStock.stock) {
            plantaCarrito.cantidad += 1;
            printCarrito();
        } else {
            alert(`No queda más stock de ${plantaCarrito.nombre}`);
        }
    }
}

// Función para restar la cantidad del carrito
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
function printOneCarrito(planta, dom) {
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

    divCantidad.classList.add('cantidad');
    h3.textContent = `${planta.nombre}`;
    cantidad.textContent = `Cantidad: ${planta.cantidad}`;
    incremento.textContent = "+";
    decremento.textContent = "-";
    precio.textContent = `Precio: ${planta.precio} €`;

    incremento.addEventListener('click', () => incrementarCantidad(planta.id));
    decremento.addEventListener('click', () => decrementarCantidad(planta.id));

    divButton.append(incremento, decremento);
    divCantidad.append(cantidad, divButton);
    li.append(h3, divCantidad, precio);
    ul.appendChild(li);
    dom.append(ul, hr);
}

function interiorCarrito() {
    const total = document.createElement('p');
    const comprar = document.createElement('button');
    const div = document.createElement('div');

    comprar.classList.add('comprar');
    div.classList.add('total_carrito');

    comprar.textContent = 'Comprar';
    total.textContent = `Total del carrito: ${calcularTotalCarrito().toFixed(2)} €`;

    comprar.addEventListener('click', comprarPlanta);
    div.append(total, comprar);
    contenidoCarrito.appendChild(div);
}

function calcularTotalCarrito() {
    return plantasEnCarrito.reduce((total, planta) => total + (planta.precio * planta.cantidad), 0);
}

function comprarPlanta() {
    plantasEnCarrito.forEach(plantaCarrito => {
        const plantaCatalogo = plantas.find(planta => planta.id === plantaCarrito.id);
        if (plantaCatalogo) {
            plantaCatalogo.stock -= plantaCarrito.cantidad;
        }

    });

    plantasEnCarrito = [];
    printCarrito();
    alert("Compra realizada con éxito. ¡Gracias por tu compra!");
    carrito.style.display = 'none';
}
