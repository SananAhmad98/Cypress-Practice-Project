/// <reference types="cypress" />

describe("My second test suite", function(){

    it("My second test case", function(){
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type("ca");
    cy.wait(2000)
    
    //Aliasing concept
    cy.get(".products").as("productsLocator")
    
    cy.get("@productsLocator").find(".product").eq(2).contains("ADD TO CART").click();
    
    //Get text of an element to select it dynamically
    
    cy.get("@productsLocator").find(".product").each(($el, index, $list) => {
    
    const testVeg = $el.find("h4.product-name").text()
    if(testVeg.includes("Cashews")){
    
        cy.wrap($el).find("button").click();
    
    }
    
    })

    //select bag to checkout

    cy.get('.cart-icon > img').click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains('Place Order').click();
    
    })
    })