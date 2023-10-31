/*Con la herencia podemos crear en base a un objeto
otros objetos mas especificos sin que pierdan la base
con la cual fueron creados, es decir si creo un usuario
que requiere solo nombre y apelliddo, pero creo luego 
otro usuario que tenga nombre y apellido y un lenguaje de
programacion solamente tendre que colocarle el lenguaje
por que nombre y apelliddo lo hereda*/

//Vamos a crear dos constructores, para personas y para programadores
function Person() {
  (this.name = ""), (this.lastname = "");
}

function Programmer() {
  this.languaje = "";
}

//Ahora para que programmer herede las propiedades debo usar prototype
Programmer.prototype = new Person();

//Ahora programmer es una nueva instancia de persona heredando sus propiedades
//Atencion, si vemos este objeto, deciende de Person!
const programmer = new Programmer();
programmer.name = "ryan";
programmer.lastname = "ray";
programmer.languaje = "javascript";
console.log(programmer);

const person = new Person();
programmer.name = "maria";
programmer.lastname = "perez";
console.log(person);

/*Vamos a hacer ahora el equivalente usando clases*/
class PersonClass {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

/*Para indicar que hereda las propiedades de PersonClass usamos
la palabra extends y el objeto que queremos que se refiera
con un detalle, para las clases debemos agregar las propiedades
utilizando la palabra clave super(), sino da error, en el constructor
le agregamos los parametros que recibirá y en super los parametros
que queremos que hereede.*/
class ProgrammerClass extends PersonClass {
  constructor(languaje, name, lastname) {
    super(name, lastname);
    this.languaje = languaje;
  }
}

const personClass = new PersonClass();
const programmerClass = new ProgrammerClass();

/*Ahora vemos que personClass hereda las propiedades de PersonClass
y no tiene la capacidad de almacenar lenguaje, mientras que
programmerClass si la tiene*/

console.log(personClass, programmerClass);

/*Puedo colocarle propiedades desde la creacion*/
const personClass2 = new PersonClass("tom", "cruz");
const programmerClass2 = new ProgrammerClass("Ruby", "jonny", "deep");
console.log(personClass2, programmerClass2);
