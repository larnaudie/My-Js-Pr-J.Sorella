"use strict";

/*3) Escribí un programa que solicite al usuario dos números
 y los almacene en dos variables. En otra variable, almacenar 
 el resultado de la suma de esos dos números y luego mostrar 
 ese resultado en pantalla.
A continuación, el programa debe solicitar al usuario que ingrese 
un tercer número, el cual se debe almacenar en una nueva variable.
 Por último, mostrar en pantalla el resultado de la multiplicación 
 de este nuevo número por el resultado de la suma anterior.
 
Ejemplo de ejecución:

	Ingresá un número: 1
	Ingresá otro número: 2
	Suman: 3
	Ingresá un nuevo número: 3
	Multiplicación de la suma por el último número: 9
    */
const prompt = require("prompt-sync")();   
const firstValue = prompt("type the first value: ");
const num1 = Number(prompt(firstValue));
const num2 = Number(prompt("type the second value: "));
const num3 = Number(prompt("type the third value: "));

const multiplying = function (num1, num2, num3) {
  return `the final rasult will be: ${(num1 + num2) * num3}`;
};

multiplying(num1, num2, num3);
