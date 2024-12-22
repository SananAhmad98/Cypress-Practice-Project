import ConfirmationPage from "./ConfirmationPage";

class CartPage{

sumOfProducts(){

    //Now, we need to validate that the price of both products is less than 2,00,000
let totalSum = 0
return cy.get("tr td:nth-child(4) strong").each(($element) => {

    const amount =  Number($element.text().split(" ")[1].trim());
    totalSum = totalSum + amount

}).then(() => {

    return totalSum;
})
}

navigateToCheckOutPage(){

    cy.contains("button","Checkout").click();
    return new ConfirmationPage();

}
}

export default CartPage;