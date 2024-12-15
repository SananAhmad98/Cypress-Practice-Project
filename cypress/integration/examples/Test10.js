/// <reference types="cypress" />

describe("My Tenth Test Suite", () => {

it("Automate Calenders and select date dynamically", () => {

//Select date june 15, 2027 dynamically

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//cy.contains("Top Deals").click();

//select calender button
cy.get(".react-date-picker__calendar-button").click();

cy.get(".react-calendar__navigation__label").click();

cy.get(".react-calendar__navigation__label__labelText").then((calendarYear) => {

if(!calendarYear.text().includes("2027")){

    cy.get(".react-calendar__navigation__label").click();

    cy.get(".react-calendar__decade-view__years").find(".react-calendar__tile").each(($el,index,$list) => {

        if($el.text() === "2027"){

            cy.wrap($el).click(); 

        }

    })

} //outer if ends

else
{ //if 2027 is already selected

    cy.get("abbr[aria-label='June 2027']").click();

}
}) // then ends here

//This is for month selecttion, which is June in this scenario
//cy.get("abbr[aria-label='June 2027']").click();
cy.contains("abbr","June").click();

//This is for day selection, which is 15 june in this scenario

//cy.get("abbr[aria-label='June 15, 2027']").click();
cy.contains("abbr","15").click();

//Final Assertion to check whether current date is june 15, 2027

cy.get(".react-date-picker__inputGroup input:nth-child(1)").should("have.value","2027-06-15");

})
})