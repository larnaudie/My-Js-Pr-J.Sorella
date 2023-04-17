/*11) Definir una función que calcule 
la longitud de una lista o una cadena 
dada SIN USAR la función length().*/

/*precise ayuda de internet, modifique:

function longuitud(lista_o_cadena){
    var contador = 0;
    far(var i = 0; i < lista_0_cadena; i++){
        contador++;
    }
    return contador;
    
} - preciso refuerzo con mas ejercicios.

*/
const prompt = require("prompt-sync")();

const objetoAProbar = [1, 2, 3];
const stringAProbar = "Hola pepe";

const calcLarge = function (value) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum++;
  }
  console.log(sum); //Javier: sería mejor retornar "sum" y loguear en main.
};

calcLarge(objetoAProbar);
calcLarge(stringAProbar);
