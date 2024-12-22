import CartPage from './CartPage'

class ProductPage{

productPageValidation(){

    cy.contains("Shop Name").should("be.visible");
}

verifyCardLimit(){

    cy.get("app-card").should("have.length",4);
}

selectProduct(productName){

//filter command returns a promise and it will be resolved using then command
//cy.get("app-card").filter(':contains("Nokia Edge")').then($element => {
    cy.get("app-card").filter(`:contains("${productName}")`).then(($element) => {

        cy.wrap($element).should("have.length",1);
        cy.wrap($element).contains("button","Add").click();
    
    })

}

selectFirstProduct(){

    cy.get("app-card").eq(0).contains("button","Add").click();
}

goToCart(){

    cy.contains("a","Checkout").click();
    return new CartPage();

}

}

export default ProductPage;