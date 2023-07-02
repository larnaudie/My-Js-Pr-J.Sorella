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

describe("My Second test suite", () => {
  it("My SecondTest case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products").as("productLocator");
    cy.get("@productLocator")
      //cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.get(":nth-child(14)").click(); // o cy.contains('Place Order').click()
  });
});
