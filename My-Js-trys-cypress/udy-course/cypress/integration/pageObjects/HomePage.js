class HomePage {
    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
        }
    getTwoWayDataBinding(){
        return cy.get("body > app-root > form-comp > div > h4 > input")
     }
    getGender(){
        return cy.get('select')
    }
     getEntrepreneaur() {
        return cy.get("#inlineRadio3")
    }
    getShopTab(){
        return cy.get("body > app-root > app-navbar > div > nav > ul > li:nth-child(2) > a")
    }
    }
    export default HomePage
