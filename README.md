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

    npx cypress run
or

    npm run config1

If you wnat to use other configuration file (different.config.js) which will be executed when you run. To run cypress from the command line, type in the terminal

    npm run config2

More details how to run on the link https://docs.cypress.io/guides/references/configuration#Specifying-an-Alternative-Config-File
