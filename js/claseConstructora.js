class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
  }
  precioConIva() {
    return this.precio = (this.precio * IVA).toFixed(2)
  }

}
