import * as rls from "readline-sync"

let mensaje: string = "hola global";
ambitoVariables();

function ambitoVariables(){
  let mensaje:string;
  mensaje = "Hola Mundo";
  console.log(mensaje);