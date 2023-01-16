const URL = 'https://telnyx.com/';
const pricingList = '#__next > div > header > div > div > div > ul > li:nth-child(10) > div > div > div > div.sc-7b3980dc-9.ctVOEX';
const elastic = '#__next > div > header > div > div > div > ul > li:nth-child(10) > div > div > div > div > div:nth-child(1) > a > div > div > span';
const voiceApi = '#__next > div> header > div> div > div> ul > li:nth-child(10) > div > div > div > div > div:nth-child(2) > a > div > div > span';
const sms = '#__next > div > header > div > div > div > ul > li:nth-child(10) > div > div > div > div > div:nth-child(3) > a > div > div > span';
const fax = '#__next > div > header > div > div > div > ul > li:nth-child(10) > div > div > div > div > div:nth-child(4) > a > div > div > span';
const wireless = '#__next > div > header > div > div > div > ul > li:nth-child(10) > div > div > div > div > div:nth-child(5) > a > div > div > span';
const verifyApi = '#__next > div > header > div > div > div > ul > li:nth-child(10) > div > div > div > div > div:nth-child(6) > a > div > div > span';
const service = '#__next > div > header > div > div > div > ul > li:nth-child(10) > div > div > div > div > div:nth-child(7) > a > div > div > span';
const companyList = '#__next > div > header > div > div > div > ul > li:nth-child(8) > div > div > div.sc-7b3980dc-8.iWLbyI';
const resourceList = '#__next > div > header > div > div > div > ul > li:nth-child(6) > div > div > div > div';
const solutionsList = '#__next > div > header > div > div > div > ul > li:nth-child(3) > div > div';

const title = 'main > div > div > h1 > span'; 
const title2 = 'main > div > section > header > h1';
const title3 = 'main > div > div > div > h1 > span';
const title4 = 'header > h1 > span';
const blogTitle = 'main > div > div > div > h1';
const docsTitle = 'main > h1';
const customersTitle = 'main > div > div > div.sc-93eced66-0.fMtsmY > div > header > p';
const calculatorTitle = 'main > div > div > div > div > span';


class NavMenuPage{

    static visitSite(){
        cy.visit(URL);
        cy.contains('Accept and close')
        .click();
    }

    static hoverPricing(){
        cy.contains('Pricing')
        .trigger('mouseover');
    }

    static beVisiblePricing(){
        cy.get(pricingList)
        .invoke('show');
    }

    static checkElastic(){
        cy.get(elastic)
        .invoke('show')
        .click({force: true});
        cy.get(title)
        .should('be.visible')
        .and('have.text','SIP Trunk Pricing');
    }


    static checkVoiceApi(){
        cy.get(voiceApi)
        .invoke('show')
        .click({force: true});
        cy.get(title)
        .should('be.visible')
        .and('have.text','Voice API Pricing');
    }

    static checkSmsApi(){
        cy.get(sms)
        .invoke('show')
        .click({force: true});
        cy.get(title)
        .should('be.visible')
        .and('have.text','Messaging pricing');
    }

    static checkFax(){
        cy.get(fax)
        .invoke('show')
        .click({force: true});
        cy.get(title)
        .should('be.visible')
        .and('have.text','Programmable Fax API Pricing');
    }

    static checkWireless(){
        cy.get(wireless)
        .invoke('show')
        .click({force: true});
        cy.get(title)
        .should('be.visible')
        .and('have.text','IoT SIM Card Data Plans & Pricing');
    }

    static checkVerifyApi(){
        cy.get(verifyApi)
        .invoke('show')
        .click({force: true});
        cy.get(title)
        .should('be.visible')
        .and('have.text','Verify API Pricing');
    }

    static checkService(){
        cy.get(service)
        .invoke('show')
        .click({force: true});
        cy.get(title)
        .should('be.visible')
        .and('have.text','ID Services & Data pricing');
    }

    static hoverCompany(){
        cy.contains('Company')
        .trigger('mouseover');
    }

    static beVisibleCompany(){
        cy.get(companyList)
        .invoke('show');
    }

    static checkAboutTelnyx(){
        cy.contains('About Telnyx')
        .invoke('show')
        .click({force: true});
        cy.get(title2)
        .should('be.visible')
        .and('have.text','Unlocking the power of intelligent connectivity');
    }

    static checkCareers(){
        cy.contains('Careers')
        .invoke('show')
        .click({force: true});
        cy.get('header > h1')
        .should('be.visible')
        .and('have.text','We\'re building the future of communications.');
    }

    static checkPartners(){
        cy.contains('Partners')
        .invoke('show')
        .click({force: true});
        cy.get(title2)
        .should('be.visible')
        .and('have.text','Build. Scale. Connect.  with Telnyx Partner Program');
    }

    static checkIntegrations(){
        cy.contains('Integrations')
        .invoke('show')
        .click({force: true});
        cy.get(title3)
        .should('be.visible')
        .and('have.text','Connect Telnyx to the tools you\'re already using');
    }

    static hoverResources(){
        cy.contains('Resources')
        .trigger('mouseover');
    }

    static beVisibleResource(){
        cy.get(resourceList)
        .invoke('show');
    }

    static checkDeveloperDocs(){
        cy.contains('Developer Docs')
        .invoke('show')
        .click({force: true});
        cy.get(docsTitle)
        .should('be.visible')
        .and('have.text','Telnyx API Documentation');
        cy.go('back');
    }

    static checkCustomerStories(){
        cy.contains('Customer Stories')
        .invoke('show')
        .click({force: true});
        cy.get(customersTitle)
        .should('be.visible')
        .and('have.text','You’re in good company');
    }

    static checkBlog(){
        cy.contains('Blog')
        .invoke('show')
        .click({force: true});
        cy.get(blogTitle)
        .should('be.visible')
        .and('have.text','Blog');
    }

    static checkCarrier(){
        cy.contains('Bring Your Own Carrier')
        .invoke('show')
        .click({force: true});
        cy.get(title3)
        .should('be.visible')
        .and('have.text','Bring Your Own Carrier (BYOC)');
    }

    static checkControl(){
        cy.contains('Mission Control')
        .invoke('show')
        .click({force: true});
        cy.get(title4)
        .should('be.visible')
        .and('have.text','Mission Control Portal');
    }

    static checkCalculator(){
        cy.contains('Savings Calculator')
        .invoke('show')
        .click({force: true});
        cy.get(calculatorTitle)
        .should('be.visible')
        .and('have.text','Savings CalculatorHow much will you save switching from Twilio?');
    }

    static hoverSolutions(){
        cy.contains('Solutions')
        .trigger('mouseover');
    }

    static beVisibleSolutions(){
        cy.get(solutionsList)
        .invoke('show');
    }

    static checkPlatforms() {
        cy.contains('Customer Engagement Platforms')
        .invoke('show')
        .click({force: true});
        cy.get(title4)
        .should('be.visible')
        .and('have.text','Customer Engagement Platforms');
    }
    
    static checkBusiness() {
        cy.contains('Business to Consumer Brands')
        .invoke('show')
        .click({force: true});
        cy.get(title4)
        .should('be.visible')
        .and('have.text','Business to Consumer Brands');
    }

    static checkManaged() {
        cy.contains('Managed Service Providers')
        .invoke('show')
        .click({force: true});
        cy.get(title4)
        .should('be.visible')
        .and('have.text','Managed Service Providers');
    }
    

}

export default NavMenuPage;