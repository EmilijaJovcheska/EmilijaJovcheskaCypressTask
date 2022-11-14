export class BasePage {

    static click(selector) {
        cy.get(selector).click()
    }

    static hasText(selector,text) {
        cy.get(selector).should("have.text",text)
    }

    static type(selector,text) {
        cy.get(selector).type(text)
    }

    static selectOption(selector, option) {
        cy.get(selector).select(option)
    }

    static isVisible(selector) {
        cy.get(selector).should("be.visible")
    }

    static openHomePage (){
        cy.visit("/")
    }
}