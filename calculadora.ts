import* as rls from "readline-sync"
let linea: string;
let numero1:number= rls.questionInt("ingrse el umero 1:");
 let numer2: number = rls.questionInt("ingrse el umero 2:");
let opcionMenu:number = rls.questionInt("opcion 1 para sumar,opcion2para restar:");

function dibujarGiones(){
    linea = "="
}
for(let contador= 0; contador <=40;contador ++){
        linea = linea=String + "="
}
console.log(linea);
if (opcionMenu == 1){
   dibujarGuiones();
   console.log ("El resultado de la suma es:",numero1 + numer2);
   dibujarGiones();
}
if (opcionMenu == 2) {
  console.log(linea);
  console.log("El resultado de la resta es:", numero1 + numer2);
  console.log(linea);