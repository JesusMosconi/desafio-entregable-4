let seguir = true
let numero = parseInt(prompt("Ingrese un número:"))
let factor = 1
debugger
while(seguir) {
    console.log("El resultado es:", numero * factor)
    seguir = confirm ("Confirme si quiere multiplicar otra vez")

if(seguir) {
    factor++
}
}
