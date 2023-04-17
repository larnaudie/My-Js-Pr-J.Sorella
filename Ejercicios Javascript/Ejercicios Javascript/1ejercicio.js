"use strict";
//Importante leer esto sobre Strict: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode


/*1) Escribir un programa que pregunte el nombre del usuario 
en la consola y después de que el usuario lo introduzca muestre 
por pantalla la cadena ¡Hola <nombre>!, donde <nombre> es el nombre
 que el usuario haya introducido.*/


const prompt = require("prompt-sync")();

const valor = prompt("¿Cual es tu nombre? ");

function tuNombre(valor) {
  return `Hola! ${valor}!`;
}

console.log(tuNombre(valor));
