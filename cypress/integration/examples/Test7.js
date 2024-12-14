/// <reference types="cypress" />

describe("7th Test Suite", () => {

it("Handle Mouse Hover", () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");  
    
   //cy.get("#mousehover").invoke("show"); //This will not work because top and reload elements are not immediate children of button in DOM.
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include","top");
    
//If you want to force fully click top button without mouse hovering then you can do that with cypress as well.    
// cy.contains("Top").click({force : true});
// cy.url().should("include","top");


})
})