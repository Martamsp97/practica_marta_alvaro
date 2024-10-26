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
const section = document.querySelector('#plants_expo')
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

printAllPlants(plantas, section)
