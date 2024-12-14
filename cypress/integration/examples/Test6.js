/// <reference types="cypress" />

describe("Sixth Test Suite", () => {

it("Handle Web Tables", () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");  
    
    cy.get("tr td:nth-child(2)").each(($el,index,$list) => { //css to select random child - in this case second column of each row of the table

    
        const courseText = $el.text()
        if(courseText.includes("Python")){

            //next() can not be applied to anything directly except get(). Using eq, we got the "7th" row/index out of the array.
            //After that, next() is used to get the subsequent sibling.
            //Then() method is used to resolve the promise as cypress can not do it for non-cypress commands like next() which is jquery command.

            cy.get("tr td:nth-child(2)").eq(index).next().then((price) => {

               const priceText = price.text();
               expect(priceText).to.equal("25");

            })
        }

    })

})
})