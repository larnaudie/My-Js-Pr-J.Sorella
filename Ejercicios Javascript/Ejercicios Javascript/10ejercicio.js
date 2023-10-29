"use strict";
/*10) Definir una función max_de_tres(), 
que tome tres números como argumentos y devuelva el mayor de ellos.*/
const prompt = require("prompt-sync")();
const a = Number(prompt("insert value a: "));
const b = Number(prompt("insert value b: "));
const c = Number(prompt("insert value c: "));

const max_de_tres = function (a, b, c) {
  if (a > b && a > c) {
    console.log("a it's the bigest");
  } else if (b > a && b > c) {
    console.log("b it's the bigest");
  } else if (c > a && c > b) {
    console.log("c it's the bigest");
  } else if (c === a && c === b) {
    console.log("are the same");
  }
};