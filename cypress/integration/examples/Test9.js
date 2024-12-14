/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

//look into this lecture again on your own
describe("Ninth Test Suite", () => {

    it("Handles Frames with Cypress", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");  
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href*='mentorship']").eq(1).click();



    })

})