
let producto = prompt("Que producto busca? (reja, porton, escalera) (Para salir use ESC)")
let precio = ""
let IVA = 1.21
let seguir = true
 

 while(producto != "ESC"){


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

function precioConIva(){
    console.log("El precio final es de:", precio * IVA)
}

precioConIva()

producto = prompt("Que producto busca? (reja, porton, escalera) (Para salir use ESC)")
} 
