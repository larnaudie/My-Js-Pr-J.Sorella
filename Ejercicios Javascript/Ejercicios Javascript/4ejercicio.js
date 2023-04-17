"use strict";
/*4) Escribir un programa que solicite al usuario el ingreso
 de una temperatura en escala Fahrenheit (debe permitir decimales)
  y le muestre el equivalente en grados Celsius. La fórmula de conversión
   que se usa para este cálculo es: Celsius = (5/9) * (Fahrenheit-32)
   mostrar menos decimales, hasta 2
 
Ejemplo de ejecución:

	Ingresar una temperatura expresada en Farenheit: 75
	23.88888888888889
*/

const prompt = require("prompt-sync")();

//Ejemplo extraido de internet
/*
const numb = 21242143.4533423131231;
const rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
console.log(rounded);
*/
const temp = Number(prompt("put Farenheit temperature: "));

const convertoToCelsius = function () {
  let convert = (5 / 9) * (temp - 32);
  return Math.round((convert + Number.EPSILON) * 100) / 100;
};

// Javier: ¿Qué utilidad tiene esta función?
const celsiusTemp = function () {
  const celsius = convertoToCelsius();
  return celsius;
};

console.log(celsiusTemp(temp));
