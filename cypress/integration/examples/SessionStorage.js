/// <reference types="cypress" />

const neatCSV = require('neat-csv')

let productName = ""

describe("JWT Session Storage", function () {

    it("Login through API call", function () {

        cy.LoginAPI().then(function () {

            cy.visit("https://rahulshettyacademy.com/client",
                {

                    onBeforeLoad: function (window) {

                        window.localStorage.setItem('token', Cypress.env('token'))

                    }

                })
        })

        cy.get(".card-body b").eq(1).then((element) => { //saving the name of actual product name

            productName = element.text()

        })
        cy.get(".row button:last-of-type").eq(1).click()
        cy.get(".btn-custom").eq(2).click()
        cy.contains("Checkout").click()
        cy.get(".text-validated").eq(2).type("ind");
        cy.get(".ta-results button").each(($el, index, $list) => {

            if ($el.text() === " India") {

                cy.wrap($el).click()
            }

        })

        cy.get(".action__submit").click();
        cy.contains("button", "Click To Download Order Details in CSV");

        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_sananahmad09.csv")
        .then(async (text) => {

            //File object is the javaScript object
            const fileObject = await neatCSV(text)
            console.log(fileObject)
            const actualProductCSV = fileObject[0] ["Product Name"] //you can see it in console tab of google
            expect(productName).to.equal(actualProductCSV)

        });


    })
})