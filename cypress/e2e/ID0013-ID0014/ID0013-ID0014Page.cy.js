const URL = 'https://telnyx.com/';
const pricingList = 'li:nth-child(10) > div > div > div > div.sc-7b3980dc-9.ctVOEX';
const voiceApi = '#__next > div> header > div> div > div> ul > li:nth-child(10) > div > div > div > div > div:nth-child(2) > a > div > div > span';
const title = 'main > div > div > h1 > span'; 
const selectCountry = 'div.sc-b9992a3b-0.bryerZ > div > div > button';
const ukraine = '[href="/pricing/call-control/ua"]';
const elastic = '#__next > div > header > div > div > div > ul > li:nth-child(10) > div > div > div > div > div:nth-child(1) > a > div > div > span';
const firstName = 'input[name="FirstName"]';
const lastName = 'input[name="LastName"]';
const email = 'input[name="Email"]';
const message = '.sc-74873084-7.iEYkvv';
const downloadForm = '#pricing_download_form > div > div > div > div.Text-sc-5o8owa-0.sc-74873084-4.gkWopw.dtWqFL';

class Pricing{

    static visitSite() {
        cy.visit(URL);
        cy.contains('Accept and close')
            .click();
    }
    
    static hoverPricing() {
        cy.contains('Pricing')
            .trigger('mouseover');
    }

    static beVisiblePricing() {
        cy.get(pricingList)
            .invoke('show');
    }

    static checkVoiceApi() {
        cy.get(voiceApi)
            .invoke('show')
            .click({force: true});
        cy.get(title)
            .should('be.visible')
            .and('have.text','Voice API Pricing');
    }

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

    static checkElastic() {
        cy.get(elastic)
            .invoke('show')
            .click({force: true});
        cy.get(title)
            .should('be.visible')
            .and('have.text','SIP Trunk Pricing');
    }

    static scrollToTheDownloadBanner() {
        cy.contains('Things you should know')
            .click();
        cy.contains('download our global price sheet')
            .click();
        cy.get(downloadForm)
            .should('be.visible')
            .and('have.text', 'Download SIP Trunking pricingInbound and outbound call pricing, per country and per destination for over 220 countries.I want to receive emails from TelnyxDownload CSV')         
    }

    static inputData(name, lastname, emails) { 
        cy.get(firstName)
            .type(name);
        cy.get(lastName)
            .type(lastname);
        cy.get(email)
            .type(emails);
    }

    static clickButton() {
        cy.contains('Download CSV')
            .click();
    }

    static checkMessage() {
        cy.get(message)
            .should('be.visible')
            .and('have.text', 'Thank you. We\'ll email you pricing right away!');
    }
}
export default Pricing;