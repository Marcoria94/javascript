console.log("funciones");

let nombre1 = "Juan"
let nombre2 = "lucas"
let nombre3 = "daniel"

function saludar(nombre,edad){
    console.log("hola" + nombre);
    console.log("Haciendo login...");
    console.log("Bienvenidos a la papp");
}

/*
saludar (nombre1)
saludar (nombre2)
saludar (nombre3)
*/

for (let i = 0; i < 3; i++) {
    const nombre = prompt("Dame un nombre")
    const edad = prompt ("Dime tu edad")
    saludar (nombre,edad)
    
}