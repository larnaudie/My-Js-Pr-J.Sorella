"use strict"
/*8) Una juguetería tiene mucho éxito en dos de sus productos: 
payasos y muñecas. Suele hacer venta por correo y la empresa 
de logística les cobra por peso de cada paquete así que deben 
calcular el peso de los payasos y muñecas que saldrán en cada 
paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. 
Escribir un programa que lea el número de payasos y muñecas vendidos
 en el último pedido y calcule el peso total del paquete que será enviado
*/

const prompt = require("prompt-sync")();
const number = Number(prompt("this will be a number of value 1"));

if (number === 1) {
  console.log("this is a number");
} else {
  console.log("this is a string not a number");
}
number

const heighClowns = 112;
const heighBarbies = 75;

const countClowns = Number(prompt("how many clowns had been sold?: "));
const countBarbies = Number(prompt("how many barbies had been sold?: "));
countBarbies, countClowns

const finalClowns = function (heighClowns, countClowns) {
  const clownsFianlHeigh = countClowns * heighClowns;
  return clownsFianlHeigh;
};

finalClowns(heighClowns, countClowns)

const finalBarbies = function (heighClowns, countClowns) {
  const barbiesFinalHeigh = countBarbies * heighBarbies;
  return barbiesFinalHeigh;
};

finalBarbies(heighClowns, countClowns)

finalClowns(heighClowns, countClowns) + finalBarbies(heighClowns, countClowns);
