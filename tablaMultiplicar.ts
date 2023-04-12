/*Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de 
multiplicación, el usuario también deberá ingresar dicho valor
33
Ingrese el número:  9
Ingrese hasta qué número: 4*/

import * as rls from 'readline-sync';
let n1: number = parseFloat(rls.question('Ingrese un numero a multiplicar : '));
let n2: number = parseFloat(rls.question(`Ingrese hasta que numero quiere multiplicar ${n1}: `));
console.log(`Tabla de multiplicación de ${n1}:`);
for (let i = 1; i <= n2; i++) {
  console.log(`${n1} x ${i} = ${n1 * i}`);
}


















