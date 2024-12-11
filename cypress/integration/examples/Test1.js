/// <reference types="cypress" />

describe("My first test suite", function(){

it("My first test case", function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type("ca");
cy.wait(2000)

//Visible elements with .product css will be considered only
//cy.get(".product:visible").should("have.length",4)

//Aliasing concept
cy.get(".products").as("productsLocator")

//Parent child chaining using find command
cy.get("@productsLocator").find(".product").should("have.length",4) //doing same thing but this time invisible issue does not happen

cy.get("@productsLocator").find(".product").eq(2).contains("ADD TO CART").click();

//Get text of an element to select it dynamically

cy.get("@productsLocator").find(".product").each(($el, index, $list) => {

const testVeg = $el.find("h4.product-name").text()
if(testVeg.includes("Cashews")){

    cy.wrap($el).find("button").click();

}

})

//this will give an error because cypress will not be able to resolve the promise. .then() will be used to resolve promise
//const webName = cy.get('.brand')
//cy.log(webName.text())

// cy.get('.brand').then((logoelement) => { //This is the right way to resolve promise

// cy.log(logoelement.text())

// })


})
})