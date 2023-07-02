//npm -i init
//npm install cypress --save-dev
/* copy this at package.json file inside the scripts side
 * "cypress:open": "cypress open" */

/* write this at cypress.config.js file inside the e2e side:
 * specPattern: "cypress/integration/examples/*.js",
 */
//npm run cypress:open

//This is helpful to see the auto-sugested options by dot, to call methods
/// <reference types="Cypress" />

describe("My first test suite", () => {
  it("My FirstTest case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //busca en la pagina entera
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);
    //busca solo en el bloque padre del product
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get(".products")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      //lo que ocurrira aca es que como console.log no pertence a cypress el assertion lo hacemos manualmente, asi aparece secuencialmente  en la consola del browser
      .then(function () {
        console.log("sf");
      });

    //vamos a intentar hacer la linea de codigo 26 dinamica, es decir que busque en todos los indices y se quede con el que concuerde el nombre
    //si vemos que estamos llamando muchas veces al mismo codigo, podemos almacenar el selector en un aliasing asi:
    cy.get(".products").as("productLocator");
    //y luego en vez de llamar al selector llamamos al productorLocator, pero con @
    cy.get("@productLocator")
      //cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    //HAY UN METODO EN CHAI QUE ME PERMITE OBTENER EL TEXTO Y VERIFICAR SI CUMPLE CON LO QUE DEBERIA TENER
    cy.get(".brand").should("have.text", "GREENKART");

    //debemos manejar manualmente las promesas, no podemos hacerlo mediante variables!
    cy.get(".brand").then(function (logoElement) {
      cy.log(logoElement.text());
    });
  });
});
