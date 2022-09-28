function carrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
    carrito.forEach(prod => {
        let fila = `<tr>
                        <td>${prod.nombre}</td>
                        <td>$ ${prod.precio}</td>
                        <td><button id="btnQuitar${prod.id}">-</button></td>
                    </tr>`
        tabla.innerHTML += fila
    })
}
carrito()



