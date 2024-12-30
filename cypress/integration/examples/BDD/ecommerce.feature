Feature: End to end e-commerce validation

Scenario: Ecommerce product delievery
Given I am on e-commerce page
When I go to the e-commerce application
And Select mulitple products and go to cart page
And Validate total price of selected products
And Navigate to checkout page
Then Select country, verify, submit, and then thank you!