/// <reference types="cypress" />

describe("Third test suite", () => {

it("Third test case", () => {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Automate checkboxes

cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1");
cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
//to select all three checkboxes
cy.get('input[type="checkbox"]').check(["option2","option3"]).should("be.checked").and("not.have.value","option1")

//Automate Static dropdowns - select is tagname

cy.get("select").select("option2").should("have.value","option2")

//Automate dynamic dropdowns

cy.get("#autocomplete").type("ind");

cy.get(".ui-menu-item").find(".ui-menu-item-wrapper").each(($el, index, $list) => {

if($el.text() === "India"){

    cy.wrap($el).click();

}
})

//check if India is selected or not

cy.get("#autocomplete").should("have.value","India");

//Verify visibility and invisibility of elements in Cypress

cy.get("#displayed-text").should("be.visible");
cy.get("#hide-textbox").click()
cy.get("#displayed-text").should("not.be.visible");
cy.get("#show-textbox").click()
cy.get("#displayed-text").should("be.visible");

//Automate Radio buttons

cy.get("input[value='radio2']").check().should("be.checked");


})
})