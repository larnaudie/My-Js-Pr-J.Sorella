"use strict"
/*9) Definir una función max() 
que tome como argumento dos números y devuelva el mayor de ellos. 
(Es cierto que python tiene una función max() incorporada, 
pero hacerla nosotros mismos es un muy buen ejercicio.

Ayuda: estudiar cómo funcionan los bloques if/else.
*/
const prompt = require("prompt-sync")();
let num1 = Number(prompt("type 1 number: "));
let num2 = Number(prompt("type other number: "));

let max = function (num1, num2) {
  if (num1 > num2) {
    return console.log(`${num1} is higher than ${num2}`);
  } else if (num1 === num2) {
    return console.log(`${num1} it's exactly the same of ${num2}`);
  } else {
    return console.log(`${num2} is higher than ${num1}`);
  }
};

max(num1, num2)

//que tal si quiero que me vuelva a preguntar si quiero colocar otros valores? loop
