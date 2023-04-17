"use strict";
/*6) Escribir un programa que solicite al usuario el ingreso de dos palabras, las cuales se guardarán en dos variables distintas. A continuación, almacenar en otra variable la concatenación de la primera palabra, más un espacio, más la segunda palabra. Mostrar este resultado en pantalla.
 
Ejemplo de ejecución:

	Primera palabra: derribando
	Segunda palabra: muros
	derribando muros

*/
const prompt = require("prompt-sync")();

const word1 = "derribando";
const word2 = "muros";

console.log(word1 + " " + word2);
//console.log(alert("look at the console"));
//console.log(alert("Try your own"));

const myWord1 = prompt("insert one word: ");
const myWord2 = prompt("insert another word: ");

console.log(myWord1 + " " + myWord2);
