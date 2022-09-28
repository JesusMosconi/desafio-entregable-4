const parrafo = document.createElement("p")
const tabla = document.getElementById("tabla")

function crearElemento() {
    parrafo.innerText = "Gracias por elegir nuestros productos!"
    parrafo.className = "parrafo-JS"
    document.body.append(parrafo)
}
crearElemento()


function agregarProducto(array){
    let agregar = ""
    tabla.innerHTML = ""
    array.forEach(producto => {
        agregar = `<tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio}</td>
                    <td>$${producto.precioConIva()}</td>
                    <td>${producto.stock}</td>
                    <td><button id="btn${producto.id}">+</button></td>
                </tr>`
                tabla.innerHTML += agregar
    })
} 
agregarProducto(productos)




//APARTE PRUEBAS
 debugger
function eventoEnBotones() {
    productos.forEach(prod =>{
        const btn = document.querySelector(`#btn${prod.id}`)
        btn.addEventListener("click", ()=> agregarAlCarrito(`${prod.id}`))
    }) 
}
eventoEnBotones()

function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id == id)
    carrito.push(producto)
    console.table(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
function recuperarCarrito() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}
recuperarCarrito()

