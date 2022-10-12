
function carrito1() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
    carrito.forEach(prod => {
        let fila = `<tr>
                        <td>${prod.id}</td>
                        <td>${prod.nombre}</td>
                        <td>$ ${prod.precio}</td>
                        <td><button id="btnQuitar${prod.id}">-</button></td>
                    </tr>`
        tabla.innerHTML += fila
    })
}
carrito1()

//Vaciar carrito
const btnVaciar = document.querySelector("#btnVaciar")
btnVaciar.addEventListener("click", ()=>{
    localStorage.clear("carrito")
    carrito.lenght = 0
})




