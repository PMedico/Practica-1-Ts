/*
• Implemente un algoritmo que calcule y muestre
por pantalla el precio final de un producto
después de aplicarle un descuento
• El precio inicial del producto Se ingresa por pantalla
• El descuento a aplicar es del 10%. Recuerde que
puede obtener el 10% de un valor multiplicado por 0,1
• Precio final debe ser mostrado en pantalla
*/
import * as readlineSync from "readline-sync";
let precioProducto : number = 450.5;
let porcentajeDescuento : number = 0.2;
let descuento : number = precioProducto*porcentajeDescuento;
let precioFinal : number = precioProducto-descuento;
console.log(precioFinal);