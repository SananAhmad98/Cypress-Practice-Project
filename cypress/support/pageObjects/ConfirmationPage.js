class ConfirmationPage{

selectCountry(country){

    cy.SubmitFormDetails(country) //This is custom command created by me

}

confirmPurchase(){

    cy.get(".btn-success").click();

}

getAlertMessage(){

    return cy.get(".alert-success");

}

}

export default ConfirmationPage;