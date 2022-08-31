
let producto = prompt("Que producto busca? (reja, porton, escalera)")
let precio = ""

if (producto === "reja"){
    precio = 15000
    console.log("El precio es de: 15000")
}
else if(producto === "porton"){
    precio = 50000
    console.log("El precio es de: 50000")
}
else if(producto === "escalera"){
    precio = 35000
    console.log("El precio es de: 35000")
}
else{
    console.warn("No hay stock del producto ingresado.")
}
let IVA = 1.21
function precioConIva(){
    console.log("El precio final es de:", precio * IVA)
}



