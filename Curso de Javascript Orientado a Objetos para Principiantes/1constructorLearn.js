//introduccion al constructor

/*Esto que veremos aqui sera el referente para todo lo que vayamos a crear,
con la etiqueta new no significa que estamos copiando a Person(), sino que lo toma como referencia
entonces si modificamos algo dde Person se modificara en todos!, tambien a la hora de buscar algo,
si no lo encuentra en Person buscara en el siguiente ambito global, en el objeto window, 
(no aplica para etiqueta class por que tiene integrado la propiedad "use strict")*/

function Person() {
  (this.name = ""),
    (this.lastname = ""),
    (this.showFullName = function () {
      return `${this.name} ${this.lastname}`;
    });
}

const userPerson = new Person();
(userPerson.name = "pablo"),
  (userPerson.lastname = "larnaudie"),
  userPerson.showFullName();
console.log(userPerson.showFullName());

const user2Person = new Person();
(user2Person.name = "claudia"), (user2Person.lastname = "rodriguez");
console.log(user2Person.showFullName());

/*
this es la key, el valor es lo que esa adelante del = y todo en su conjunto es el parametro
*/

console.log(Object.keys(userPerson));
/*Devuelve un array con todos los nombres de las keys en el objeto userPerson*/
console.log(Object.values(userPerson));
/*Devuelve un array con todos los nombres de las valores en el objeto userPerson*/

/*Hay una etiqueta creada en ES6 llamada class, escribir el constructor con class o como lo hicimos antes es lo mismo, 
la diferencia es que class tiene el "use strict" incorporaddo para que no acceda al contexto global y pueble el objeto window.
para colocarle un metodo/funcion adentro de una clase debe ser fuera del corchete del constructor, de otro modo no funcionara,
Ahora veremos como escribir un constructor con class, es mas amigable para personas que vengan de otros lenguajes*/

class objectName {
  constructor(a, b) {
    (this.a = ""), (this.b = "");
  }
}

class Person1 {
  constructor(name, lastname) {
    (this.name = name), (this.lastname = lastname);
  }
  //Las funciones o metodos van afuera del construcotr
  greet() {
    return `hi! ${this.name} ${this.lastname}`;
  }
}

/*Ahora creamos una nueva instancia asi:*/
const user3Person1 = new Person1("tom", "cruz");
console.log(user3Person1);
console.log(user3Person1.greet());
const user4Person1 = new Person1("jerry", "cruz");
console.log(user4Person1);
console.log(user4Person1.greet());

/*SI QUEREMOS CREAR UN METODO QUE SEA ACCESIBLE A TODOS DEBEMOS AGREGARLO MEDIANTE EL PROTOTYPE,
mediante prototype podemos agregarle funciones/metodos o parametros a la plantilla y que se apliquen a todos.*/

Person1.prototype.greet2 = function (name) {
  return `Soy ${this.name}`;
};
Person1.prototype.age = 27;

console.log(user3Person1.greet2());
console.log(user3Person1.age);
/*Si probamos con userPerson que esta usando otra plantilla (Person) vemos que no lo encuentra.
console.log(userPerson.greet2());
console.log(userPerson.age);*/
