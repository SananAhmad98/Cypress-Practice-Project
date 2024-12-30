import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";
const homePage = new HomePage()

Given("I am on e-commerce page", () => {


    homePage.navigateToHomePage(Cypress.env('url') + "/loginpagePractise/");

})

When("I go to the e-commerce application", function () {


    this.productPage = homePage.login(this.data.username, this.data.password);
})

When("Select mulitple products and go to cart page", function () {


    this.productPage.productPageValidation();
    this.productPage.getCardCount().should("have.length", 4);
    this.productPage.selectProduct(this.data.productName);
    this.productPage.selectFirstProduct();
    this.cartPage = this.productPage.goToCart();
})

When("Validate total price of selected products", function () {


    this.cartPage.sumOfProducts().then((sum) => {

        expect(sum).to.be.lessThan(200000);

    })

})

When("Navigate to checkout page", function () {


    this.confirmationPage = this.cartPage.navigateToCheckOutPage();

})

Then("Select country, verify, submit, and then thank you!", function(){

        this.confirmationPage.selectCountry(this.data.country);
        this.confirmationPage.confirmPurchase();
        this.confirmationPage.getAlertMessage().should("contain","Success");
})