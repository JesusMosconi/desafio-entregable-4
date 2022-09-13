class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    precioConIva() {
      return  this.precio = (this.precio * IVA).toFixed(2)
    }

}