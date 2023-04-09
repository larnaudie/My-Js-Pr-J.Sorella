"strict";
/*5) Escribir un programa que solicite al usuario ingresar tres números para luego mostrarle el promedio de los tres.
 
Ejemplo de ejecución:

	Primer número: 8.5
	Segundo número: 10
	Tercer número: 5.5
	El promedio de los tres es 8.0

Ayuda: el promedio se puede calcular fácilmente usando arrays.
*/

const num1 = Number(prompt("please, put one number into the field"));
const num2 = Number(prompt("please, put one more number"));
const num3 = Number(prompt("please, put one more number to finish"));

const average = function () {
  const avg = Number((num1 + num2 + num3) / 3);
  return avg;
};

console.log(average(num1, num2, num3));
