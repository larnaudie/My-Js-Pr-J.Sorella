"use strict"; 
//Importante leer esto sobre Strict: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode

/*2) Escribir un programa que pregunte
 al usuario por un número de horas trabajadas y un coste por hora. 
Después debe mostrar por pantalla los honorarios que le corresponde.
*/

const prompt = require("prompt-sync")();

const alertHoras = prompt("¿Cuántas horas trabajadas tienes? ");
const alertPago = prompt("¿Cuánto cobras por hora? ");

const horas = alertHoras;
const pago = alertPago;

const miTrabajo = function (horas, costo) {
  return `Si trabajaste ${horas}hs entonces te pagaré ${horas * pago}`;
};

console.log(miTrabajo(horas, pago));
