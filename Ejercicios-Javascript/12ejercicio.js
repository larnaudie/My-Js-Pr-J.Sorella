"use strict"
/*12) Escribir una función que tome un carácter y devuelva True si es una vocal,
 de lo contrario devuelve False.*/
const prompt = require("prompt-sync")();
const value = prompt("type any value");

const whomIAm = function (value) {
  if (
    value === "a" ||
    value === "e" ||
    value === "i" ||
    value === "o" ||
    value === "u"
  ) {
    return true;
  } else {
    return false;
  }
};

whomIAm(value)
