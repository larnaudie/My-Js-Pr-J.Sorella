"use strict";
/*2) Escribir un programa que pregunte
 al usuario por un número de horas trabajadas y un coste por hora. 
Después debe mostrar por pantalla los honorarios que le corresponde.
*/

const workedHours = prompt("¿how many hours worked do you have?");
const yourSalary = prompt("¿what is your salary?");

const hours = workedHours;
const salary = yourSalary;

const myFinalPayment = function (hours) {
  return `if you worked ${hours}hs then I will give you ${hours * salary}`;
};

myFinalPayment(hours, salary)
