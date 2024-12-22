import ProductPage from './ProductPage'

class HomePage{

navigateToHomePage(url){

cy.visit(url);

} 

login(username,password){

    cy.get("#username").type(username); //we need to utilize dynamic data here
    cy.get("#password").type(password);
    cy.contains("Sign In").click();
    return new ProductPage();

}

}

export default HomePage;