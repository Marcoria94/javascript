console.log("ejemplo extra");

const totalIteraciones = 3
let total = 0

for (let i = 0; i < totalIteraciones; i++) {
    total = total + parseInt( prompt ("dame una calificaciones") )
   
    
}
let promedio = total / totalIteraciones
alert ("el promedio es: " + promedio) 

/*
let comando = prompt ("Que quieres hacer , promedio , suma , multiplicacion")

switch (comando) {
    case "promedio": 
    let total = 0

for (let i = 0; i < totalIteraciones; i++) {
    total = total + parseInt( prompt ("dame una calificaciones") )
   
    
}
let promedio = total / totalIteraciones
alert ("el promedio es: " + promedio)
        
        break;
    case "suma":
        alert("ejecutando la suma")
        break

    default:
        alert("opcion no valida")
        break;
}
*/