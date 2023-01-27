// Main Page
const URL = 'https://telnyx.com/';
const accept = '[aria-label="close and deny"]~div>div>button';
// Pricing
const pricing ='header ul > li:nth-child(10)';  
const pricingList = 'header a.mchNoDecorate[href^="/pricing/"]';
const elastic = 'header a.mchNoDecorate[href*="elastic"]';
const voiceApi = 'header a.mchNoDecorate[href*="pricing/call"]';
const sms = 'header a.mchNoDecorate[href*="messaging"]';
const fax = 'header a.mchNoDecorate[href*="fax"]';
const wireless = 'header a.mchNoDecorate[href*="pricing/iot"]';
const verifyApi = 'header a.mchNoDecorate[href*="verify"]';
const service = 'header a.mchNoDecorate[href*="id-services"]';

// Company
const company = 'header ul > li:nth-child(8)';
const companyList = 'header li:nth-child(8)>div>div';
const about = 'header a.mchNoDecorate[href*="about"]';
const careers = 'header a.mchNoDecorate[href*="careers"]';
const partners = 'header a.mchNoDecorate[href*="partner"]';
const integrations = 'header a.mchNoDecorate[href*="integrations"]';

// Resources
const resources = 'header ul > li:nth-child(6)';
const resourceList = 'header li:nth-child(6)>div>div';
const developer = 'header a[href*="developers"]';
const customer = 'header a[href*="stories"]';
const blog = 'header a[href*="resource"]';
const bringLink = 'header a[href*="bring"]';
const mission = 'header a[href*="mission"]';
const calculator = 'header a[href*="calculator"]';

// Solutions
const solutions = 'header ul > li:nth-child(3)';
const solutionsList = 'header li:nth-child(3)>div>div';
const customerSolutions = 'header a[href*="solutions/customer"]';
const business = 'header a[href*="solutions/business"]';
const managed = 'header a[href*="managed"]';
const contact = 'header a[href*="use-cases/contact"]';
const call = 'header a[href*="use-cases/call"]';
const smsSupport = 'header a[href*="use-cases/sms"]';
const voIP = 'header a[href*="voip"]';

// Titles and subtitles
const title = 'main h1>span'; 
const subtitle = '//section/header/div';
const developerTitle = 'main>h1';
const blogTitle = 'main h1';
const customersTitle = '//*[@id="__next"]/div[1]//div[1]/div/header/p';
const calculatorTitle = '//*[@id="__next"]//main/div[1]//div[1]/div[1]/span';


class NavMenuPage {

    static visitSite() {
        cy.visit(URL);
    }

    static clickAccept() {
        cy.get(accept)
            .click();
    }

    static hoverPricing() {
        cy.get(pricing)
            .trigger('mouseover');
        cy.get(pricingList)
            .invoke('show');
    }

  
    static clickElasticLink() {
        cy.get(elastic)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleElasticPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','SIP Trunk Pricing');
    }
    
    static clickVoiceApi() {
        cy.get(voiceApi)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleVoicePage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Voice API Pricing');
    }

    static clickSmsApi() {
        cy.get(sms)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleSmsPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Messaging pricing');
    }
    
    static clickFaxLink() {
        cy.get(fax)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleFaxPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Programmable Fax API Pricing');
    }
    
    static clickWirelessLink() {
        cy.get(wireless)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleWirelessPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','IoT SIM Card Data Plans & Pricing');
    }
   
    static clickVerifyApi() {
        cy.get(verifyApi)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleVerifyApiPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Verify API Pricing');
    }

    static clickService() {
        cy.get(service)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleServicePage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','ID Services & Data pricing');
    }

    static hoverCompany() {
        cy.get(company)
            .trigger('mouseover');
        cy.get(companyList)
            .invoke('show');
    }

    static clickAboutTelnyx() {
        cy.get(about)
            .invoke('show')
            .click({force: true});
    }

    static checkSubtitleAboutPage () {
        cy.xpath(subtitle)
            .should('be.visible')
            .and('have.text','About Us');
    }
    
    static clickCareersLink() {
        cy.get(careers)
            .invoke('show')
            .click({force: true});
    }

    static checkSubtitleCareersPage() {
        cy.xpath(subtitle)
            .should('be.visible')
            .and('have.text','careers at telnyx');
    }

    static clickPartnersLink() {
        cy.get(partners)
            .invoke('show')
            .click({force: true});
    }

    static checkSubtitlePartnersPage () {
        cy.xpath(subtitle)
            .should('be.visible')
            .and('have.text','PARTNERS');
    }

    static clickIntegrations() {
        cy.get(integrations)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleIntegrationsPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Connect Telnyx to the tools you\'re already using');
    }
    static hoverResources() {
        cy.get(resources)
            .trigger('mouseover');
        cy.get(resourceList)
            .invoke('show');
    }

    static clickDeveloperLink () {
        cy.get(developer)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleDeveloperPage() {
        cy.get(developerTitle)
            .should('be.visible')
            .and('have.text','Telnyx API Documentation');
        cy.go('back');
    }

    static clickCustomerLink() {
        cy.get(customer)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleCustomerPage() {
        cy.xpath(customersTitle)
            .should('be.visible')
            .and('have.text','You’re in good company');
    }

    static clickBlogLink() {
        cy.get(blog)
            .invoke('show')
            .click({force: true});
    }
    
    static checkTitleBlogPage() {
        cy.get(blogTitle)
            .should('be.visible')
            .and('have.text','Blog');
    }

    static clickBringLink() {
        cy.get(bringLink)
            .invoke('show')
            .click({force: true});
    }
    
    static checkTitleBringPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Bring Your Own Carrier (BYOC)');
    }

    static clickMissionControlLink() {
        cy.get(mission)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleMissionControlPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Mission Control Portal');
    }

    static clickCalculatorLink(){
        cy.get(calculator)
            .invoke('show')
            .click({force: true});
    }

    static checkSubitleCalculatorPage() {
        cy.xpath(calculatorTitle)
            .should('be.visible')
            .and('have.text','Savings Calculator');
    }

    static hoverSolutions() {
        cy.get(solutions)
            .trigger('mouseover');
        cy.get(solutionsList)
            .invoke('show');
    }

    static clickCustomerSolutionsLink() {
        cy.get(customerSolutions)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleCustomerSolutionsPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Customer Engagement Platforms');
    }
    
    static clickBusiness () {
        cy.get(business)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleBusinessPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Business to Consumer Brands');
    }

    static clickManaged() {
        cy.get(managed)
            .invoke('show')
            .click({force: true});
    }
    
    static checkTitleManagedPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Managed Service Providers');
    }

    static clickContact() {
        cy.get(contact)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleContactPage(){
        cy.get(title)
            .should('be.visible')
            .and('have.text','Contact Center Solutions');

    }
    
    static clickCallLink(){
        cy.get(call)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleCallPage(){
        cy.get(title)
            .should('be.visible')
            .and('have.text','Call Tracking');
    }

    static clickSmsCustomer() {
        cy.get(smsSupport)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleSmsCustomerPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Call Tracking');
    }

    static clickVoIp() {
        cy.get(voIP)
            .invoke('show')
            .click({force: true});
    }

    static checkTitleVoIpPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Call Tracking');
    }
}  

export default NavMenuPage;
