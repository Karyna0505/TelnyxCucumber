const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
    video: true,
    videosFolder: 'cypress/videos',
    chromeWebSecurity: false,
    pageLoadTimeout: 60000,
    taskTimeout: 60000,
    scrollBehavior: 'center',
    viewportHeight: 1050,
    viewportWidth: 1680,
    
 
    e2e: {
        specPattern: "**/*.feature",
        setupNodeEvents(on, config) {
          on("file:preprocessor", cucumber())
        },
    },
});