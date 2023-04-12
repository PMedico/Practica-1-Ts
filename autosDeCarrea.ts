/*
•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta
*/
import * as readlineSync from "readline-sync";

    let vuelta1: number = readlineSync.questionInt( "Ingrese la vuelta 1: ");
let vuelta2: number = readlineSync.questionInt( "Ingrese la vuelta 2: ");
let vuelta3: number = readlineSync.questionInt( "Ingrese la vuelta 3: ");
       let vuelta4: number = readlineSync.questionInt( "Ingrese la vuelta 4: ");

let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("Tiempo total: ", tiempoTotal);
console.log("Promedio de vuelta: ", tiempoTotal/4);