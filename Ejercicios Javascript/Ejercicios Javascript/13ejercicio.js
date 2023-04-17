/*13) Escribir una función sum() y una función multip() que sumen y 
multipliquen respectivamente todos los números de un array. Por ejemplo: 
sum([1,2,3,4]) debería devolver 10 y multip([1,2,3,4]) debería devolver 24.*/
const prompt = require("prompt-sync")();

const array1 = [1, 2, 3, 4];
console.log(array1);

const sum = function (array1) {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
  }
  console.log(sum);
};

sum(array1);

// Ejercicio incompleto.