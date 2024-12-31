// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
    Cypress.Commands.add("SubmitFormDetails", (country) => {

        cy.get("#country").type(country);
        //For all the other tests including this test (till line 18) timeout will be 6 ms but for line 19, timeout will be 7 ms
        Cypress.config("defaultCommandTimeout",7000)
        cy.get(".suggestions ul li a").click();

    })

    Cypress.Commands.add("LoginAPI", () => {

        cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",
            {"userEmail": "sananahmad09@gmail.com", "userPassword": "webdir123R"}
        ).then(function(response)
        {

            expect(response.status).to.equal(200);
            Cypress.env("token",response.body.token);
        })
    })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })