...............................................###.............................................

Cypress-Cucumber Test runner "TELNYX" project

...............................................###.............................................

## Setup
### Install software and check out the project
 - Download and install Node.JS (at least v18.12.1)
 - Clone and checkout the github project

        git clone https://github.com/Karyna0505/TelnyxCucumber

 - Go to the terminal and execute inside the checked out folder

         npm install 

### How to run the tests
I defined a default configuration (cypress.config.js) which will be executed when you run. To run cypress from the command line, type in the terminal
    
    npm run test

or 

    npm run cy.tests

To run cypress headless mode

More details how to run on the link https://docs.cypress.io/guides/references/configuration#Specifying-an-Alternative-Config-File


### Mochawesome Report

To generate a report for all specs in the integration folder of the Cypress project, run the command given below −

    npm run config1

### Html-report:

    npm run html-report

More information about how to use the report , please, follow to link https://docs.cypress.io/guides/tooling/reporters

### GitHub Actions and Pages 
When a push is made to the master/main repository, the workflow is triggered. The output of each build is available on the Actions pane of the repository and we can drill down into each flow to see why it failed.

    https://karyna0505.github.io/TelnyxCucumber/