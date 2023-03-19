"strict";
/*2) Escribir un programa que pregunte
 al usuario por un número de horas trabajadas y un coste por hora. 
Después debe mostrar por pantalla los honorarios que le corresponde.
*/

const alertHoras = prompt("¿cuantas horas trabajadas tenes?");
const alertPago = prompt("¿cuanto cobras?");

const horas = alertHoras;
const pago = alertPago;

const miTrabajo = function (horas, costo) {
  return `si trabajaste ${horas}hs entonces te cobrare ${horas * pago}`;
};

console.log(miTrabajo(horas, pago));
