const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 100000,
  pageLoadTimeout: 100000,
  viewportHeight: 720,
  viewportWidth: 1280,
  reporter: 'mochawesome',
  reporterOptions: {
    html: false,
    json: true,
    reportDir: 'report',
    overwrite: false
  },
  chromeWebSecurity: false,
  e2e: {
   
    specPattern: "**/*.feature",
    
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
      
      return {
        browsers: config.browsers.filter(
          (b) => b.name === 'electron'
        ),
      }
    },
  },
});
