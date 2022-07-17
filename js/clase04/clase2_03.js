console.log("ejemplo de calificaciones");

let lower = 0
let upper = 10
let passed = 7

let grade1 = prompt ("calificacion 1")
// let grade2 = prompt ("calificacion 2")
// let grade3 = prompt ("calificacion 3")

if ( grade1 >= lower && grade1 <= upper ) {
    console.log("calificaciones validas");
    //if ( !(grade1 >= passed) ) {
        if (grade1 < passed){
        alert("Reprobado")
    }
    }
else {
    console.log("no validas");
}