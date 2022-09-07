
let IVA = 1.21
class Producto {
    constructor(nombre, precio, stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    precioConIva(){
        this.precio = this.precio * IVA
    }

}

const productos =  []

let producto1 = new Producto("reja", "15000", true)
let producto2 = new Producto("porton", "50000", true)
let producto3 = new Producto("escalera", "35000", false)

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)

for (Producto of productos){
    Producto.precioConIva()
    console.log(Producto)
}


let producto = prompt("Que producto busca? (reja, porton, escalera) (Para salir use ESC)")
while (producto != "ESC") {

    if (producto === producto1.nombre) {
        precio = producto1.precio
        stock = producto1.stock
        console.log("El precio es de:", precio)
        console.log("Stock:", stock)
    }

    else if (producto === producto2.nombre) {
        precio = producto2.precio
        stock = producto2.stock
        console.log("El precio es de:", precio)
        console.log("Stock:", stock)
    }

    else if (producto === producto3.nombre) {
        precio = producto3.precio
        stock = producto3.stock
        console.log("El precio es de:", precio)
        console.log("Stock:", stock)
    }

    else {
        console.warn("No hay stock del producto ingresado.")
    }

    producto = prompt("Desea comprar otro producto? (reja, porton, escalera) (Para salir use ESC)")
}
