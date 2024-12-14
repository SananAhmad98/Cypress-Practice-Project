/// <reference types="cypress" />


describe("Test suite 4", () => {

it("Handle Alerts and Pop-Ups", () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Automate and validate alerts/pop-ups - Cypress handles pop-up and alerts automatically
    
    cy.get("#alertbtn").click();
    
    //Cypress events - window:alert is the event which we can use when we want to validate text of the alert or pop-up
    cy.on("window:alert",(str) => {

        //Mocha test framework - chai assertion
        expect(str).to.equal("Hello , share this practice page and share your knowledge");
    })

    //For confirmation pop-up:
    cy.get("input[value='Confirm']").click();
    cy.on("window:confirm",(str) => {

        //Mocha test framework - chai assertion
        expect(str).to.equal("Hello , Are you sure you want to confirm?");
    })


})

})
