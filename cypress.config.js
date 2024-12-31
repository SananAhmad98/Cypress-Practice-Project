const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config){

  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({

  //Increasing deafult timeout from 4 ms to 8 ms
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',
  env: {

    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents,
    //{
    //   // implement node event listeners here
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // }
    
    //Tell cypress that we have testcases/specs present in this location
    specPattern: "cypress/integration/examples/*.js"

    //For Fetaure files
    //specPattern: "cypress/integration/examples/BDD/*.feature"
  },
});
