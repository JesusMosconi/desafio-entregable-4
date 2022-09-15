const parrafo = document.createElement("p")
const tabla = document.getElementById("tabla")

function crearElemento() {
    parrafo.innerText = "Gracias por elegir nuestros productos!"
    parrafo.className = "parrafo-JS"
    document.body.append(parrafo)
}
crearElemento()


function agregarProducto(){
    let agregar = ""

    productos.forEach(producto => {
        agregar = `<tr>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio}</td>
                    <td>$${producto.precioConIva()}</td>
                    <td>${producto.stock}</td>
                </tr>`
                tabla.innerHTML += agregar
    })
} 
agregarProducto()

const btnAgregar = document.querySelector("#btnAgregar")
btnAgregar.addEventListener("click", ()=> alert("Agregaste un producto al carrito"))

const btnBorrar = document.querySelector("#btnBorrar")
btnBorrar.addEventListener("dblclick", ()=> alert("Has borrado los productos"))
