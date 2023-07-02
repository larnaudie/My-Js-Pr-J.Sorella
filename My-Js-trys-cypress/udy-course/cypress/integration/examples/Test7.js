/// <reference types="Cypress" />

describe("My Third test suite", () => {
  it("My ThirdTest case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");
      //*Aca le indicamos que hay otro dominio
      cy.visit(url);
      //Aca le indicamos que el origen sera : la url y luego ahi, correra los casos dentro de la funcion.
      cy.origin(url, () => {
        cy.get("div.sub-menu-bar a[href*='about']").click();
      });
    });
  });
});
