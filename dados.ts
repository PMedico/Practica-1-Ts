import * as rls from "readline-sync";
  let dados = rls.questionInt ("ingrese cantidad de dados: ");
    let result = 0;
     let casosPosibles = Math.pow(6,dados);
     let casosFavorables = 1;
   result=casosFavorables/casosPosibles;
console.log (result)