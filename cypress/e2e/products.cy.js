import {LoginPage} from "../../pageObjects/loginPage";
import {ProductsPage} from "../../pageObjects/productsPage";


describe("Sorting items in products screen", () => {

    before(() => {
        cy.visit("https://lv.sportsdirect.com/usc/mens/shoes-and-boots%22)
    })
    after(() => {
        cy.request("POST")
    })
})

    it("Sorting items visible in the products screen - A-Z"), () => {
        LoginPage.LoggingInWithAnExistinguser("/")
        ProductsPage.sortProductsBy("A-Z")
        ProductsPage.verifySortingOption()
    })
})

    it("Filtering products by brand and validating the filtered brand"), () => {
        LoginPage.LoggingInWithAnExistinguser("/")
        ProductsPage.ValidateBrand()
    })
})

    it("Validating discounted products from Sales page"), () => {
        LoginPage.LoggingInWithAnExistinguser("/")
        ProductsPage.ValidateDiscountProducts()
    })
})

