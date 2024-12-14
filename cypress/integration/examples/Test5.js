/// <reference types="cypress" />

describe("Fifth Test Suite", () => {

it("Handle Child Tabs", () => {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/");    
//Cypress can not handle the switching to child tabs with "diffrent domain". 
//Hence, we need to invoke it as parent tab using jquery by tweaking our DOM.    
cy.get("#opentab").invoke("removeAttr","target").click();

//Before, clicking on child tab element, we need to utilize origin function to manipulate child tab functions:
cy.origin("https://www.qaclickacademy.com/", () => {

    //We need to perform all actions on child window under this function
    cy.get("#navbarSupportedContent a[href*='about.html']").click(); //parent child chaining of css using space
    cy.get(".mt-50 h2").should("contain","QAClick Academy");

})
})
})