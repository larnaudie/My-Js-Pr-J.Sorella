/*
Vamos a ver como funciona el before y beforeEach
*/

/// <reference types="Cypress" />
//importamos aca el archivo donde estan los selectores.
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe("My Third test suite", function () {
    before(function () {
      cy.fixture("example").then(function (data) {
        this.data = data;
      });
    });
  
    it("My ThirdTest case", function () {
    //lo inicializamos en el bloque it
    const homePage = new HomePage()
    const productPage = new ProductPage();

      cy.visit("https://rahulshettyacademy.com/angularpractice/");
      homePage.getEditBox().type(this.data.name);
      homePage.getGender().select(this.data.gender);
     homePage.getTwoWayDataBinding().should(
        "have.value",
        this.data.name
      );
     homePage.getEditBox().should(
        "have.attr",
        "minlength",
        2
      );
      homePage.getEntrepreneaur().should("be.disabled");
      homePage.getShopTab().click(); 
      
      this.data.productName.forEach(function(element) {
      cy.selectProduct(element);
      })
      productPage.checkOutBtn().click();
      cy.contains('Checkout').click()
      cy.get('#country').type('India')
    //configurar el tiempo de espera en un caso particular:
    Cypress.config('defaultCommandTimeout', 8000)
      cy.get('.suggestions > ul > li > a').click()
    });
  });