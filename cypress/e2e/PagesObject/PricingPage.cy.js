const selectCountry = 'main>div:nth-child(1) button[type="button"]';
const ukraine = '[href="/pricing/call-control/ua"]';
const title = 'main h1>span';
const downloadForm = 'div #pricing_download_form';
const firstName = 'form input[name="FirstName"]';
const lastName = 'form input[name="LastName"]';
const email = 'form input[name="Email"]';
const downloadButton = 'form button[type="submit"]';
const message = '#pricing_download_form div>div>div:nth-child(4)';


class Pricing{

    static selectCountry() {
        cy.get(selectCountry)
            .click();
        cy.get(ukraine)
            .click();
    }

    static checkNewPricing() {
        cy.get(title)
            .should('have.text', 'Voice API Pricing for Ukraine');
    }

    static checkDownloadBanner() {
        cy.get('dt>button>span')
            .click();
        cy.get('a[href="#pricing_download_form"]')
            .click();       
    }

    static inputData(name, lastname, emails) { 
        cy.get(firstName)
            .type(name);
        cy.get(lastName)
            .type(lastname);
        cy.get(email)
            .type(emails);
        cy.get(downloadButton)
            .click();
    }

    static checkMessage() {
        cy.get(message)
            .should('be.visible')
            .and('have.text', 'Thank you. We\'ll email you pricing right away!');
    }
}
export default Pricing;