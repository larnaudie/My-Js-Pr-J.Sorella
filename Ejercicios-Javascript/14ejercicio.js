"use strict";
/*14) Imagina que acabas de abrir una nueva cuenta de ahorros que te ofrece el 4%
 de interés al año. Estos ahorros debido a intereses, que no se cobran hasta finales de año, 
 se te añaden al balance final de tu cuenta de ahorros. Escribir un programa que comience leyendo 
 la cantidad de dinero depositada en la cuenta de ahorros, introducida por el usuario. Después el 
 programa debe calcular y mostrar por pantalla la cantidad de ahorros tras el primer, segundo y tercer años.
  Redondear cada cantidad a dos decimales.
*/
const prompt = require("prompt-sync")();
const userCount = Number(prompt("Write your savings: "));
let bankInterest = Number(prompt("Write the bank interest: ")) / 100;

const interestBank = function (userCount, bankInterest) {
  const firstYear = userCount * (12 * bankInterest) + userCount;
  const secondYear = userCount * (24 * bankInterest) + userCount;
  const thirdYear = userCount * (36 * bankInterest) + userCount;
  return `
  Your first year was:
  ${Math.round(((firstYear + Number.EPSILON) * 100) / 100)}, 
  the second year was:
  ${Math.round(((secondYear + Number.EPSILON) * 100) / 100)}, 
  and the last one: 
  ${Math.round(((thirdYear + Number.EPSILON) * 100) / 100)}`;
};

userCount
interestBank(userCount, bankInterest)

//probar con 33333 y con 33 de interes
//probar con 3333 y con 37

/*`
  Your first year was:
  ${Math.round(((firstYear + Number.EPSILON) * 100) / 100)}, 
  the second year was:
  ${Math.round(((secondYear + Number.EPSILON) * 100) / 100)}, 
  and the last one: 
  ${Math.round(((thirdYear + Number.EPSILON) * 100) / 100)}`;
};

 `
Your first year was:
  ${firstYear}, 
  the second year was:
  ${secondYear}, 
  and the last one: 
  ${thirdYear}`;
*/
10;
