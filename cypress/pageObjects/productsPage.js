import { BasePage } from "./basePage";

const PRODUCT_BRAND = ".Nike"
const BRAND_OPTION = ".slideName viewAll boldText"
const SORT_BY_FIELD = "#MobSortOptions_brand_asc"
const VALIDATE_BRAND = ".brandLogo NikeLogo"
const SEARCH_FIELD =  "txtSearch"
const CATEGORY_CONTAINER = ".categorycopyd4"


export class ProductsPage extends BasePage {

    static sortProductsBy() {
    cy.get(PRODUCT_BRAND).click()
    cy.get(BRAND_OPTION).click()
        cy.get(SORT_BY_FIELD).click()
        })
})
    static verifySortingOption() {
        let actualArray = [];
        cy.get(PRODUCT_DESCRIPTION_BRAND).each((el) => {
            actualArray.push(el.text().replace("AIR", ""))
        });
        cy.wrap(actualArray).then((actual) => {
            let expectedArray = [...actual].sort((a, b) => a - b)
            expect(actual).to.deep.eq(expectedArray)
        })
    })

    static ValidateBrand()
        cy.get(PRODUCT_BRAND).click()
        cy.get(VALIDATE_BRAND).should("be.visible")

})
    static ValidateDiscountProducts()
        cy.get(SEARCH_FIELD).type("Sale").select()
        this.hasText(CATEGORY_CONTAINER)
