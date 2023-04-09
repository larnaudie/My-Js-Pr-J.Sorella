/*a) Encapsulamiento
Es la capacidad de concentrar datos en una sola entidad y ocultar los detalles internos del codigo 
El objetivo es simplificar el uso de un objeto*/

const company1 = {
  name: "fast tech",
  employee: [],
  sortEmployees: function () {},
};

/*Si ahora yo llamo a la funcion sortEmployees y le designo un valor de string y luego le quiero
  dar un valor de funcion no me va a dejar, esto sucede por que javascript es un lenguaje
  dinamico, en otros lenguajes fuertemente tipados no hay problema,

  company.sortEmployee = "abcdefghijklmno"
  company.sortEmployee()

Para evitar esto podemos crear metodos que nos permiten interactuar con las propiedaddes sin que el 
usuario tenga que acceder a ellas, seran los metodos que la actualizaran.

Para ello vamos a crear un constructor:*/

/* function Company(name) {
  let employee = [];
  this.name = name;
} 

const companyCola = new Company("Coca Cola");
const companyPepsi = new Company("Pepsi"); 

console.log(companyCola, companyPepsi)*/

/*Aca debo crear un metodo que actualice a la variable employee, si yo pongo console.log(Company)
voy a observar salamente los nombres de las empresas pero no me muestra la variable,
lo que voy a tener que hacer es modificar el constructor y agregarle una funcion que agregue 
los empleados a la variable employee*/

function Company(name) {
  let employees = [];
  this.name = name;
  this.getEmployees = function () {
    return employees;
  };
  this.addEmployee = function (employee) {
    employees.push(employee);
  };
}

/*Si yo ahora quiero acceder a get employees dde companyCola y companyPepsi voy a ver que los tienen*/

const companyCola = new Company("Coca Cola");
const companyPepsi = new Company("Pepsi");

//Desde aca no puedo ver mis empleados
console.log(companyCola, companyPepsi);
//Desde aca si, se cumple el encapsulamiento.
console.log(companyCola.getEmployees(), companyPepsi.getEmployees());

/*Si presto atencion, no puedo acceder a los empleados, por lo que cumple con la encapsulacion*/
/*Tambien puedo agregarle el metodo push para agregarle un empleado con el metodo push*/

companyCola.addEmployee({ name: "adam" });
companyCola.addEmployee({ name: "ray" });
companyPepsi.addEmployee({ name: "joe" });
