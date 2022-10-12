const tabla = document.querySelector("tbody")
const URL = "../bbdd/productos.json"
let producto = []
let contenidoHTML = ""

const mostrarError = ()=> {
    return `<div class="error">
                <h2>¡Ups...!</h2>
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}

const agregarProducto = (array) =>{
    const{id, nombre, precio, stock} = array
    return     `<tr>
                    <td>${id}</td>
                    <td>${nombre}</td>
                    <td>$${precio}</td>
                    <td>${stock}</td>
                    <td><button id="btn${id}">+</button></td>
                </tr>`
    }
debugger
const agregarContenido  = async()=> {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        producto = data
        producto.forEach(elemento => contenidoHTML += agregarProducto(elemento));
    }
     catch (error) {
        contenidoHTML = mostrarError()
    }
     finally{
        tabla.innerHTML = contenidoHTML
    }
}

agregarContenido()





