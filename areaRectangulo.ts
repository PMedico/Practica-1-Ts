/* .El usuario debe ingresar la base y la altura por teclado
   .El area debe guardarse en una variable
   .El resultado debe mostrarse por pantalla 
*/
import * as rls from "readline-sync";

const base:number = rls.questionInt("Ingrese la base:");
    const altura:number = rls.questionInt("Ingrese la altura:"); 
    const area:number = base * altura;
console.log ("el area es:",area);