/// <reference types="cypress" />

describe("Eighth Test Suite", () => {

    it("Handle Child Windows and Tabs", () => { //Another way to handle without tweaking DOM using jQuery like in test5.js
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");    
    
    //Cypress can not handle the switching to child tabs/windows with "diffrent domain". 
    //Hence, we need to invoke it as parent tab using jquery by tweaking our DOM.    
    cy.get("#opentab").then((el) => {

        const childURL = el.prop("href"); //prop() is the jquery command which returns value of an attribute.s
        cy.visit(childURL);
        cy.origin(childURL, () => {

            cy.get("#navbarSupportedContent a[href*='about.html']").click();

        })

    })
    })
    })