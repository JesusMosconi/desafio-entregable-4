
function generadorProductos(){
    productos.push(new Producto(1234,"reja", 15000, true))
    productos.push(new Producto(2345,"porton", 50000, true))
    productos.push(new Producto(3456,"escalera", 35000, false))
    productos.push(new Producto(4567,"parrila", 5000, true))
    productos.push(new Producto(5678,"pergola", 30000, false))

}
generadorProductos()


for (Producto of productos) {
    Producto.precioConIva()
}







   