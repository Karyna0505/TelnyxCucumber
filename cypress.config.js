const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  viewportHeight: 720,
  viewportWidth: 1280,
  
  chromeWebSecurity: false,
  
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
      
    },
  },
});
