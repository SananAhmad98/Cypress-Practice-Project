const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Tell cypress that we have testcases/specs present in this location
    specPattern: "cypress/integration/examples/*.js"
  },
});
