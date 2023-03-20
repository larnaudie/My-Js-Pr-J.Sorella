/*Crear codigos que sean modulares y reutilizables, por ejemplo la modularidad es poder agarrar una aplicacion grande y 
dividirla en varias partes, agarrar un problema y poder subdividirlo para solucionarlo a travez de subsoluciones.
Cada una de estas moddularizaciones tiene un proposito y por lo tanto se puede reutilizar el codigo.

Un Lenguaje es considerado orientado a Objetos cuando tiene la cacidad de modelar problemas en objetos, usar principios
que garanticen la modularizacion y reusabilidad de codigo.

Para cumplir con el primer Requerimiento, 
se necesita entender los siguientes conceptos:

Abstraccion.
La programacion orientada a objetos es modelar a travez de objetos, para simplificar la realidad
es un concepto manejado en la Abtraccion, es que no necesariamente tenemos que concoer todos los detalles internos del objeto
 para concoerlo.

a) Asociacion 
Objetos que refieren a otros objetos, poder unir y enlazar objetos entre si*/

console.log("-----------------START ejemplo de Asociacion.--------------");

//Vamos a relaciona a dos objetos, a maria y a perez

class Person {
  constructo(name, lastname) {
    (this.name = name), (this.lastname = lastname);
  }
}

const john = new Person("john", "ray");
const maria = new Person("maria", "perez");

//vinculamos a john como padre de maria, si esta relacion no existe ambos tienen un objetivo individual.
maria.parent = john;
console.log(john);
console.log(maria);

console.log("-----------------FIN ejemplo de Asociacion.---------------");
/*b) Agregacion
Es la capacidad que tiene un objeto de referir a otros objetos independientes
ej; un objeto grande conformado por objetos mas pequeños, pero si extraigo un objeto pequeño del objeto grande va a funcionar.*/
console.log("-----------------START ejemplo de Agregacion.-------------");

//Si tengo una compania y quiero agregar a dos empleados podemos hacerlo de la siguiente forma:
const company = {
  name: "fast tech",
  employee: [],
};

company.employee.push(john, maria);
console.log(company.employee);

console.log("-----------------FIN ejemplo de Agregacion.---------------");
/*c) Composicion
Es la capacidad que tiene un objeto de referir a otros objetos dependientes, PERO NINGUNO VA A TENER UNA VIDA INDEPENDIENTE.
ej; un objeto grande conformado por objetos mas pequeños, pero si extraigo un objeto pequeño del objeto grande NO va a funcionar.*/
console.log("-----------------START ejemplo de COMPOSICION.-------------");

const person1 = {
  name: "ryan",
  lastname: "ray",
  adress: {
    street: "123 baker street",
    country: "United Kindom",
    cityy: "London",
  },
};
//si al objeto adress lo quitamos de su entorno, no tiene ningun sentido afuera y basicamente no funcionaria y daria error,
//ya que su existencia no tiene sentido.

console.log("-----------------FIN ejemplo de COMPOSICION.---------------");
/*Segundo Requerimiento, 
refiere a garantizar la modularidad y la reusahabilidad del codigo,
tiene los siguientes principios que son considerados en si los prinipios de la Programacion orientada a objetos, son:

a) Encapsulamiento
Es la capacidad de concentrar datos en una sola entidad y ocultar los detalles internos del codigo 
El objetivo es simplificar el uso de un objeto

b) Herencia
Es un mecanismo en el cual un objeto hereda propiedades de otro objeto.

c) Polymorfismo
Es la capacidad de manejar objetos que reciban diferentes tipos de datos y estructuras pero que al finaldevuelvan una respuesta.
*/
