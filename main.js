// Equivalencias
// true                false
//  -infinito 1          0
//  " "                 ""
//  [] - {}     null - undefined
//
// num = Number(prompt("Ingrese su edad"))
// switch (true) {
//     case num>=18 && num<=20:
//         console.log("Es mayor de edad");
//         break;
//     case num>=100 && num<=150:
//         console.log("xxxxx");
//         break;
//     default:
//         console.log("No cumple la condicion");
//         break;
// 
// let i = 0;
// let bandera = true;
// for(i; bandera;){
//     console.log(bandera);
//     bandera = (i<5) ? ++i: false;
// }



// let num= Number(prompt("ingrese un numero"));

// for (let j = 1; j <= num; j++) {
//     for (let i = 1; i<=10; i++) {
//         console.log(`${j} X ${i} =${j*i}`);  
//     }
// }

// let costo = Number(prompt("Ingrese el costo del producto"));

// console.log("El valor a pagar es " + (costo - (costo*0.1)));

let parciales = Number(prompt("Ingrese la calificacion de parciales"));
let examenFinal = Number(prompt("Ingrese calificacion del examen final"));
let trabajoFinal = Number(prompt("Ingrese calificion de trabajo final"));

let notaFinal = parciales-(parciales*0.55) + examenFinal-(examenFinal*0.30) + trabajoFinal -(trabajoFinal*0.15);

console.log("Su calificacion en la materia de algoritmos fue " + Math.floor(notaFinal));


