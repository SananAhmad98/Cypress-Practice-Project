class ConfirmationPage{

selectCountry(country){

    cy.get("#country").type(country);
//For all the other tests including this test (till line 53) timeout will be 6 ms but for line 56, timeout will be 7 ms
cypress.config("defaultCommandTimeout",7000)
cy.get(".suggestions ul li a").click();
}

confirmPurchase(){

    cy.get(".btn-success").click();
    cy.get(".alert-success").should("contain","Success");

}
}

export default ConfirmationPage;