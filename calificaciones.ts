/*
  Ejercicio Calificaciones
(Calcular las calificaciones de un grupo de alumnos), 
donde (la nota
final de cada alumno se calcula según el siguiente criterio):
•( la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%)

(Se debe ingresar el nombre del alumno y sus tres notas), (se
escribirá el resultado) ( y se volverá a pedir 
  los datos del siguiente
alumno) (hasta que el nombre sea una cadena vacía)

(Las notas deben estar entre 0 y 10) 
(si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)
*/

import * as rls from "readline-sync"
let nota1 = rls.questionInt ("ingrese nota 1:");
   let nota2 = rls.questionInt ("ingrese nota 2:");
    let nota3 = rls.questionInt ("ingrese nota 3:");
  let nombreAlumno = rls.question ("ingrese nombre alumno:");
let result = 0;

while (nombreAlumno !== "") {

  if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
    let result = nota1 * 0.1 + nota2 * 0.5 + nota3 * 0.4;

    console.log(`El resultado promedio del alumno ${nombreAlumno} es: ${result}`);
  } else {

   console.log("Error: Las notas deben estar entre 0 y 10.");
  }

  nombreAlumno = rls.question(" ingrese nombre del alumno");
 
}


