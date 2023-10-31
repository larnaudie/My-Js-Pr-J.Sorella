"use strict";
/*1) Escribir un programa que pregunte el nombre del usuario 
en la consola y después de que el usuario lo introduzca muestre 
por pantalla la cadena ¡Hola <nombre>!, donde <nombre> es el nombre
 que el usuario haya introducido.*/
const prompt = require("prompt-sync")();
const yourName = prompt("what's your name?");

function yourName(value) {
  return `Hi! ${value}!`;
}

yourName(valor)
