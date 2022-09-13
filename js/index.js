
function generadorProductos(){
    productos.push(new Producto("reja", "15000", true))
    productos.push(new Producto("porton", "50000", true))
    productos.push(new Producto("escalera", "35000", false))
    productos.push(new Producto("parrila", "5000", true))
    productos.push(new Producto("pergola", "30000", false))

}
generadorProductos()


for (Producto of productos) {
    Producto.precioConIva()
    console.log(Producto)
}


//metodo filter para filtrar productos
function filtrarProducto() {
    let nombreProd = prompt("Ingrese el nombre del producto que desea filtrar:").toLowerCase()
    let resultado = productos.filter((producto) => producto.nombre.includes(nombreProd))
    console.table(resultado)
}
filtrarProducto()


//Metodo find para buscar producto
function buscarProducto() {
    let nombreProducto = prompt("¿Que esta buscando?")
    let resultado = productos.find((producto) => producto.nombre.includes(nombreProducto))

    if (resultado === undefined) {
        console.warn("No se encuentra el producto ingresado")

    } else {
        console.log(resultado)
}
}
buscarProducto()


let elegirProducto = prompt("¿Que producto quiere comprar? (Para salir use ESC)")
while (elegirProducto != "ESC") {

    if (elegirProducto === producto1.nombre) {
        precio = producto1.precio
        stock = producto1.stock
        console.log("El precio es de:", precio)
        console.log("Stock:", stock)
    }

    else if (elegirProducto === producto2.nombre) {
        precio = producto2.precio
        stock = producto2.stock
        console.log("El precio es de:", precio)
        console.log("Stock:", stock)
    }

    else if (elegirProducto === producto3.nombre) {
        precio = producto3.precio
        stock = producto3.stock
        console.log("El precio es de:", precio)
        console.log("Stock:", stock)
    }

    else {
        console.warn("No hay stock del producto ingresado.")
    }
    
    filtrarProducto()
    buscarProducto()
    elegirProducto = prompt("Desea comprar otro producto? (Para salir use ESC)")
}



   