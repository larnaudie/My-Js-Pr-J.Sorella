//https://rahulshettyacademy.com/AutomationPractice/

/// <reference types="Cypress" />

describe("My Third test suite", () => {
  it("My ThirdTest case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get("input[value=Confirm]").click();
    //capturamos la alerta, agarramos su string como una promesa
    cy.on("window:alert", (str) => {
      //en Mocha le decimos que el str obtenido esperamos que sea igual al siguiente:
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      //en Mocha le decimos que el str obtenido esperamos que sea igual al siguiente:
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
    cy.get("#opentab").invoke("removeAttr", "target").click();
    //da un error y esta igual en su codigo.
    cy.url().should("include", "qaclickacademy");

    cy.go("back");
  });
});
