




function calcularAreaTriángulo(base, altura) {
  retorno(base * altura) / 2;
}
let paresBaseAltura = [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10], [6, 12], [7, 14]];
paresBaseAltura.paraCada(función(_a)  {
  let base = _a[0], altura  =  _a[1] ;
  let area = calcularAreaTriangulo(base, altura) ;
  consola _ log( "El \u00E1rea del tri\u00E1ngulo con base " .concat(base, " y altura ").concat(altura, " es: ").concat(area) );
} );