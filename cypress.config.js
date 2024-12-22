const { defineConfig } = require("cypress");

module.exports = defineConfig({

  //Increasing deafult timeout from 4 ms to 6 ms
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Tell cypress that we have testcases/specs present in this location
    specPattern: "cypress/integration/examples/*.js"
  },
});
