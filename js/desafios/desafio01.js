console.log ("Desafio")

function descuento (numero, porcentaje) {
    let totalDesc = numero * porcentaje / 100
    let precioFinal = numero - totalDesc
    return precioFinal
}


function impuesto (numero, porcentaje) {
    let impuesto = numero * porcentaje / 100
    let totalImp = impuesto + numero
    return totalImp
} 

let opcionUsuario = parseInt(prompt("Seleccione 1 para descuento , seleccione 2 para impuesto"));

if (opcionUsuario === 1 ) {
    let numero = parseInt (prompt ("Ingresa un numero"));
    let porcentaje = parseInt (prompt ("Ingresa el % de descuento"));
    console.log("opcion1")
    alert("El precio final es: $" + descuento(numero,porcentaje));
    
}else if (opcionUsuario === 2) {
    let numero = parseInt (prompt ("Ingresa un numero"));
    let porcentaje = parseInt (prompt ("Ingresa el % de impuesto o descuento"));
    console.log("opcion2")
    alert("Total con impuesto es: $" + impuesto (numero,porcentaje));
}else{
    alert("Ingrese una de las opciones")
}










    

