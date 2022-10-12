const parrafo = document.createElement("p")
//const tabla = document.getElementById("tabla")

function crearElemento() {
    parrafo.innerText = "Gracias por elegir nuestros productos!"
    parrafo.className = "parrafo-JS"
    document.body.append(parrafo)
}
crearElemento()



//Eventos
// debugger
function eventoEnBotones() {
    productos.forEach(prod => {
        const btn = document.querySelector(`#btn${prod.id}`)
        btn.addEventListener("click", () => agregarAlCarrito(`${prod.id}`))
        btn.addEventListener("click", () => alertaSwAl())
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
    localStorage.getItem("carrito") && (carrito = JSON.parse(localStorage.getItem("carrito")))
}
recuperarCarrito()


//SweetAlert

function alertaSwAl() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu producto ha sido agregado!',
        showConfirmButton: false,
        timer: 1500
      })
}
