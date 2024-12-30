beforeEach(function () { //This will apply on all step definition files on under this Example1 folder 

    cy.fixture('ExampleData1').then(function (data) //fixture helps us to load dynamic data into our cypress tests.
    {

        this.data = data;

    })
})