/// <reference types="cypress" />

import HomePage from '../../support/pageObjects/HomePage'

describe("End-to-end e-commerce test", function() {


//This the before hook which is used to run once before all the tests in this block. We are loading dynamic data in this hook.    
before(function(){

    cy.fixture('ExampleData1').then(function(data) //fixture helps us to load dynamic data into our cypress tests.
    { 

        this.data = data;
        
    }) 

    this.homePage = new HomePage();
})

it("Submit Order", function(){
  
const productName = this.data.productName;    

this.homePage.navigateToHomePage("https://rahulshettyacademy.com/loginpagePractise/");
const productPage = this.homePage.login(this.data.username,this.data.password);

productPage.productPageValidation();
productPage.verifyCardLimit();
productPage.selectProduct(productName);
productPage.selectFirstProduct();

const cartPage = productPage.goToCart();

cartPage.sumOfProducts().then((sum) => { //assertion comes under .then() because assertions are non-cypress commands as well and we need to make sure that assertion is
                                        //executed after the loop
expect(sum).to.be.lessThan(200000);

})

const confirmationPage = cartPage.navigateToCheckOutPage();
confirmationPage.selectCountry(this.data.country);
confirmationPage.confirmPurchase();

})// test case 1
})// test suite