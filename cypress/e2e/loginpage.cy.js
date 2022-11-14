import {BasePage as loginPage} from "../pageObjects/basePage";

describe( "Login test cases" , () => {


    before(() => {
        cy.log("Starting all the test cases and doing something before all of them - ONCE")
    })

    after(() => {
        cy.log("All test cases have ran , lets do something ONCE")
    })

    beforeEach(() => {
        //Ids should be unique in the web page, best bet for a good CSS selector in pages
        //Where you don't have access to the source code and can't add attributes yourself
        cy.visit("https://lv.sportsdirect.com/");
    });

    afterEach(() => {
        cy.log("Running after each of the test cases inside the describe block");
    });


    it("Registering a new user", () => {
        cy.get(".login").click()
        // cy.get("#onetrust-accept-btn-handler").click()
        loginPage.click("#onetrust-accept-btn-handler")
        cy.get(".newCustomer .dnnPrimaryAction").should('have.text', 'Continue Securely').click()
        cy.get('#Registration_Title').select("Miss")
        cy.get("#Registration_FirstName").type("Emilija")
        cy.get("#Registration_LastName").type("Jovcheska")
        cy.get("#Registration_EmailAddress").type("e.jovcheska@gmail.com")
        cy.get("#Registration_DateOfBirthDay").select("26")
        cy.get("#Registration_DateOfBirthMonth").select("February")
        cy.get("#Registration_DateOfBirthYear").select("1994")
        cy.get("#txtPassword").type("Sportstest1")
        cy.get("#Registration_ConfirmPassword").type("Sportstest1")
        cy.get("#Registration_IsSubscriber").click()
        cy.get("#RegistrationSubmit").click()
    })

    it("Logging in with an existing user", () => {
        cy.get(".login").click()
        cy.get("#onetrust-accept-btn-handler").click()
        cy.get("#Login_EmailAddress").type("e.jovcheska@gmail.com")
        cy.get("#Login_Password").type("Sportstest1")
        cy.get("#LoginButton").click()
        cy.get("#main-content").should( "be.visible")
    })

    it("Trying to log in with invalid login detail", () => {
        cy.get(".login").click()
        cy.get("#onetrust-accept-btn-handler").click()
        cy.get("#Login_EmailAddress").type("e.jovcheska@gmail.com")
        cy.get("#Login_Password").type("SportsTeeest1")
        cy.get("#LoginButton").click()
        cy.get(".field-validation-error").should("have.text", "This email address or password is incorrect")
    })

    it("Forgotten password", () => {
        cy.get(".login").click()
        cy.get("#onetrust-accept-btn-handler").click()
        cy.get(".ForgotPasswordLinkButton").click()
        cy.get("#EmailAddress").type("e.jovcheska@gmail.com")
        cy.get("#EmailRequestSubmit").click()
        cy.get(".dnnFormMessage.dnnFormSuccess").should("have.text", "Create a new password. If the email address entered was correct, you should receive a new email shortly with a link to reset your password.")
    })

})


