Feature: End to end e-commerce validation

@Regression
Scenario: Ecommerce product delievery
Given I am on e-commerce page
When I go to the e-commerce application
And Select mulitple products and go to cart page
And Validate total price of selected products
And Navigate to checkout page
Then Select country, verify, submit, and then thank you!

@Smoke
Scenario Outline: Ecommerce product delievery
Given I am on e-commerce page
When I go to the e-commerce application portal
|username          | password|
|rahulshettyacademy| learning|
And Select mulitple products and go to cart page
And Validate total price of selected products
And Navigate to checkout page
Then Select country, verify, submit, and then thank you!