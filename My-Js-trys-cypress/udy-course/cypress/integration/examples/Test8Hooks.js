/*
Vamos a ver como funciona el before y beforeEach
*/

/// <reference types="Cypress" />

describe("My Third test suite", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      //necesario para poder transformar el scoupe global.
      this.data = data;
    });
  });

  it("My ThirdTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    //Otra forma de llama al selector:
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    /*cy.get(
      "body > app-root > form-comp > div > form > div:nth-child(1) > input"
      //Ahora estamos accediendo al objeto con this, luego a la propieda data y a su valor name.
    ).type(this.data.name);*/
    cy.get("select").select(this.data.gender);
    cy.get("body > app-root > form-comp > div > h4 > input").should(
      "have.value",
      this.data.name
    );
    cy.get('input[name="name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      2
    );
    cy.get("#inlineRadio3").should("be.disabled");
    cy.get(
      "body > app-root > app-navbar > div > nav > ul > li:nth-child(2) > a"
    ).click();
/*
    //Vamos a hacer una iteracion, esta es la estructrua.
    cy.get("h4.card-title").each(($e1, index, $list) => {
      if ($e1.text().includes("Blackberry")) {
        cy.get('.btn.btn-info').eq(index).click();
      }
      else {
        cy.log("Not found");
      }
    });
    */
   //Podemos hacer lo mismo de antes creando un comando en commands.js, es decir, el codigo del 38-46 lo copiamos a commands.js, modificamos la sintaxis y lo llamamos aca, asi:
   
   //cy.selectProduct("Blackberry");
   //cy.selectProduct("Nokia Edge");
   
   //Si quisieramos seleccionar multiples veces, podemos crear un item en el examples.json llamarlo y con un foreach decirle que ejecute la funcion support.
   this.data.productName.forEach(function(element) {
    cy.selectProduct(element);
    })
  });
});