/*
Polimorfimo es la capacidad que tienen algunos objetos para manipular distintos datos uniformemente
lo que genera esto es reducir la acumulacion de otros objetos heredados, es decir, evitar
que un objeto llame a muchos otros objetos para realizar una respuesta, por eso esta el polimorfirsmo,
nos permite tener un codigo mas compacto que esta procesando distintas cosas, codigo reutilizado.

las caracteristica del polimorfismo son:

a) la sobrecarga, que lo que refiere es que puede recibir
muchos metodos con distintos tipos de datos y procesarlos.
Ejemplo de sobrecarga:*/
function countItems(x) {
  return x.length;
}
console.log(countItems("aca cuenta los caracteres, si fuese numeros no sirve"));

function countItemsGenerico(x) {
  return x.toString().length;
}

console.log(
  `aca esta contando numeros: 123; ${countItemsGenerico(123)}, 
  aca esta contando caracteres: Hola; ${countItemsGenerico("hola")}`
);

/*Que sucede si tengo menos parametros a pasar del que pide la funcion?
lo que haremos en caso de tener una funcion de suma sera equivaler los parametros a 0*/

function sum(x = 0, y = 0, z = 0) {
  return x + y + z;
}

console.log(sum(2 + 3));

/*
b) Polimorfismo parametrico, nos permite manejar distitnos tipos de datos genericos sin ningun 
tipo de datos especificos, le puedo pasar cualquiero objeto con cualquier estructura, sin conocerla
en ddetalle y aun asi el metodo puede procesarlo, 
a continuacion vemos un ejemplo, como no hay restrincciones de tipos de datos entonces 
los puede interpretar y procesar sin problema*/

function Stack() {
  this.item = [];
  this.push = function (item) {
    this.item.push(item);
  };
}

/*Ambos vienen del mismo constructor y tienen diferente tipo de datos 
pero han sido procesados bien*/

const stack = new Stack();
stack.push(123);
const stack2 = new Stack();
stack2.push("holaa");

console.log(stack, stack2);

/* c) Subtipo de polimorfismo o polimorfismo inclusivo
nos permite tomar una clase que viene dderivada de otra y aun asi poder procesarla.
Permite a los objetos con diferentes tipos de datos ser procesados pero no solo con distintos
tipos de datos sino tambien que venga con una relacion de herencia */

class PersonPolym {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class ProgrammerPolym extends PersonPolym {
  constructor(languaje, name, lastname) {
    super(name, lastname);
    this.languaje = languaje;
  }
}

const john = new PersonPolym("john", "perez");
const ray = new ProgrammerPolym("javascrip2", "ray", "MClaight");

//hasta aca es lo que vimos anteriormente, tengo dos objetos cada uno con sus datos

console.log(john, ray);

//vamos a aplicar el subtipo de polimorfismo para procesarlos.

function writeFullName(p) {
  console.log(p.name + " " + p.lastname);
}

console.log(writeFullName(john), writeFullName(ray));
