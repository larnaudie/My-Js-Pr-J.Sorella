/*8) Una juguetería tiene mucho éxito en dos de sus productos: 
payasos y muñecas. Suele hacer venta por correo y la empresa 
de logística les cobra por peso de cada paquete así que deben 
calcular el peso de los payasos y muñecas que saldrán en cada 
paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. 
Escribir un programa que lea el número de payasos y muñecas vendidos
 en el último pedido y calcule el peso total del paquete que será enviado
*/

const prompt = require("prompt-sync")();

//probando si trnasforma a numero el number >>> Javier Nota: borrar este tipo de anotaciones.
/*
const numerito = Number(prompt("esto sera un numerito de valor 1"));

if (numerito === 1) {
  console.log("es un numerito");
} else {
  console.log("es un string, no un numero");
}
console.log(numerito);
*/

//ingresando peso
const heighClowns = 112;
const heighBarbies = 75;

//ingresando cantidad
const countClowns = Number(prompt("how many clowns had been sold?: "));
const countBarbies = Number(prompt("how many barbies had been sold?: "));
// console.log(countBarbies, countClowns);

//calculando peso por cantidad

//calulando peso y catidad en payasos
const finalClowns = function (heighClowns, countClowns) {
  const clownsFianlHeigh = countClowns * heighClowns;
  return clownsFianlHeigh;
};
//verificando
// console.log(finalClowns(heighClowns, countClowns));

//calulando peso y catidad en muñecas
const finalBarbies = function (heighClowns, countClowns) {
  const barbiesFinalHeigh = countBarbies * heighBarbies;
  return barbiesFinalHeigh;
};
//verificando
// console.log(finalBarbies(heighClowns, countClowns));

//sumando todo el envio en total
console.log(
  finalClowns(heighClowns, countClowns) + finalBarbies(heighClowns, countClowns)
);

//Javier notas:
// - Evitar loguear cosas que no sean las pedidas en el ejercicio.
// - Agregar explicaciones de la información que se le muestra al usuario (ej: "El peso total del paquete es... gramos.").
