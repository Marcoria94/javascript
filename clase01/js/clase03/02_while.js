console.log("ejemplos while");

//let contador = 0

/* while ( contador <= 10){
    console.log(contador);
    contador ++
}*/

/* do{
    console.log(contador);
    contador ++

} while ( contador <= 10) */

let entrada = ""

do {
    entrada = prompt ("dame un comando")
    if ( entrada == "exit")
    //continue
    break

    switch ( entrada ) {
        case "ls":
            alert ("lista de archivos")
            break;
        case "pwd":
            alert ("nos dice la ruta actual")
            break;
        case "mkdir":
            alert ("crear un directorio")
            break;
        case "hello":
            alert ("crear archivo vacio")
            break;
    
        default:
            alert ("comando no valido")
            break;
    }
} while ( entrada != "exit" );

