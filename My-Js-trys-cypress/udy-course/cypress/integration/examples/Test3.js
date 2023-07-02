//https://rahulshettyacademy.com/AutomationPractice/

/// <reference types="Cypress" />

describe("My Third test suite", () => {
  it("My ThirdTest case", () => {
    //ASi podemos interactuar con los checkboxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //verificar si iene la opcion 1 con 2 assertion
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    //esto deschequea un checkbox y asegura que no este chequeado
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    //esto recorre un array de checkboxes y chequea el que tenga el valor opcion2 solamente
    cy.get("input[type=checkbox]").check(["option2"]);

    //Dropdowns
    //statics dropdowns, asi voy al dropdown estatico y selecciono opcion 2 y luego verifico si se selecciono con should
    cy.get("select").select("option2").should("have.value", "option2");
    //dynamics dropdowns
    cy.get("#autocomplete").type("Uru");
    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
      if ($e1.text() === "Uruguay") {
        cy.wrap($e1).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "Uruguay");
  });
});
