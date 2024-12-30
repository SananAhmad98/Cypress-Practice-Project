const { defineConfig } = require("cypress");

module.exports = defineConfig({

  //Increasing deafult timeout from 4 ms to 6 ms
  defaultCommandTimeout: 4000,
  reporter: 'cypress-mochawesome-reporter',
  env: {

    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    //Tell cypress that we have testcases/specs present in this location
    specPattern: "cypress/integration/examples/*.js"
  },
});
