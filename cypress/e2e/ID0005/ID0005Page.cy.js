const URL = 'https://telnyx.com/';
const footer = '#__next > div > footer';
// Products
const elastic = 'div:nth-child(1) > div > ul > li:nth-child(1) > a > span > span';
const callControl = 'div:nth-child(1) > div > ul > li:nth-child(2) > a > span > span';
const programmable = 'div:nth-child(1) > div > ul > li:nth-child(3) > a > span > span';
const faxing = 'div:nth-child(1) > div > ul > li:nth-child(4) > a > span > span';
const wireless = 'div:nth-child(1) > div > ul > li:nth-child(5) > a > span > span';
const number = 'div:nth-child(1) > div > ul > li:nth-child(6) > a > span > span';
const global = 'div:nth-child(1) > div > ul > li:nth-child(7) > a > span > span';
const verifyApi = 'div:nth-child(1) > div > ul > li:nth-child(8) > a > span > span';
const allProducts = 'div:nth-child(1) > div > ul > li:nth-child(9) > a > span > span';
// Resources
const developer = 'footer div:nth-child(2) > div > ul > li:nth-child(1) > a';
const blog = 'div:nth-child(2) > div > ul > li:nth-child(2) > a > span > span';
const resource = 'div:nth-child(2) > div > ul > li:nth-child(3) > a > span > span';
const release = 'div:nth-child(2) > div > ul > li:nth-child(4) > a > span > span';
// Pricing
const elasticPricing = 'div:nth-child(3) > div > ul > li:nth-child(1) > a > span > span';
const sms = 'div:nth-child(3) > div > ul > li:nth-child(2) > a > span > span';
const voice = 'div:nth-child(3) > div > ul > li:nth-child(3) > a > span > span';
const wirelessPricing = 'div:nth-child(3) > div > ul > li:nth-child(4) > a > span > span';
// Company
const about = 'div:nth-child(4) > div > ul > li:nth-child(1) > a > span > span';
const careers = 'div:nth-child(4) > div > ul > li:nth-child(2) > a > span > span';
const data = 'div:nth-child(4) > div > ul > li:nth-child(3) > a > span > span';
const support = 'div:nth-child(4) > div > ul > li:nth-child(4) > a';
const report = 'div:nth-child(4) > div > ul > li:nth-child(5) > a > span > span';
const privacy = 'div:nth-child(4) > div > ul > li:nth-child(6) > a';
const cookie = 'div:nth-child(4) > div > ul > li:nth-child(7) > a > span > span';
const acceptable = 'div:nth-child(4) > div > ul > li:nth-child(8) > a > span > span';
const website = 'div:nth-child(4) > div > ul > li:nth-child(9) > a > span > span';
const lawRequest = 'div:nth-child(4) > div > ul > li:nth-child(10) > a';
// Mission Control
const signUp = 'div:nth-child(5) > div > ul > li:nth-child(1) > a > span > span';
const loginIn = 'div:nth-child(5) > div > ul > li:nth-child(2) > a';

const title = 'h1 > span';
const title2 = 'h1 > span > strong';
const title3 = 'main div > h1';
const title4 = 'header > h1';
const developerTitle = '#telnyx-api-v2-documentation';
const lawRequestTitle = '#header > h2';



class Footer {

    static visitSite() {
        cy.visit(URL);
        cy.contains('Accept and close')
            .click();
    }

    static scrollDownToTheFooter() {
        cy.scrollTo('bottom');
        cy.get(footer)
            .should('be.visible');
    }

    static checkElastic() {
        cy.get(elastic)
            .click();
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Leading Global SIP Trunking Provider');
        cy.go('back');
    }

    static checkCallControl() {
        cy.get(callControl)
            .click();
        cy.get(title)
            .should('be.visible')
            .and('have.text','Voice API');
        cy.go('back');
    }

    static checkProgrammable() {
        cy.get(programmable)
            .click();
        cy.get(title)
            .should('be.visible')
            .and('have.text','SMS API');
        cy.go('back');
    }

    static checkFaxing() {
        cy.get(faxing)
            .click();
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Reliably transmit documents with our Programmable Fax API over Private IP');
        cy.go('back');
    }

    static checkWireless() {
        cy.get(wireless)
            .click();
        cy.get(title)
            .should('be.visible')
            .and('have.text','IoT SIM Cards for Global Connectivity');
        cy.go('back');
    }

    static checkNumber() {
        cy.get(number)
            .click();
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Know the details behind every number with Phone Number Lookup');
        cy.go('back');
    }

    static checkGlobal() {
        cy.get(global)
            .click();
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Buy business numbers on demand.');
        cy.go('back');
    }
    
    static checkVerifyApi() {
        cy.get(verifyApi)
            .click();
        cy.get(title)
            .should('be.visible')
            .and('have.text','Verify API: User authentication made easy');
        cy.go('back');
    }

    static checkAllProducts() {
        cy.get(allProducts)
            .click();
        cy.get(title3)
            .should('be.visible')
            .and('have.text','Products');
        cy.go('back');
    }

    static checkDeveloper() {
        cy.get(developer)
            .invoke('removeAttr', 'target')
            .click({ multiple: true });
        cy.get(developerTitle)
            .and('have.text','Telnyx API Documentation');
        cy.go('back');
    }

    static checkBlog() {
        cy.get(blog)
            .click();
        cy.get(title3)
            .should('be.visible')
            .and('have.text','Blog');
        cy.go('back');
    }

    static checkResource() {
        cy.get(resource)
            .click();
        cy.get(title3)
            .should('be.visible')
            .and('have.text','Resource Hub');
        cy.go('back');
    }

    static checkRelease() {
        cy.get(release)
            .click();
        cy.get(title4)
            .should('be.visible')
            .and('have.text','Release Notes');
        cy.go('back');
    }

    static checkElasticPricing() {
        cy.get(elasticPricing)
            .click();
        cy.get(title)
            .should('be.visible')
            .and('have.text','SIP Trunk Pricing');
        cy.go('back');
    }

    static checkSms() {
        cy.get(sms)
            .click();
        cy.get(title)
            .should('be.visible')
            .and('have.text','Messaging pricing');
        cy.go('back');
    }

    static checkVoice() {
        cy.get(voice)
            .click();
        cy.get(title)
            .should('be.visible')
            .and('have.text','Voice API Pricing');
        cy.go('back');
    }

    static checkWirelessPricing() {
        cy.get(wirelessPricing)
            .click();
        cy.get(title)
            .should('be.visible')
            .and('have.text','IoT SIM Card Data Plans & Pricing');
        cy.go('back');
    }

    static checkAbout() {
        cy.get(about)
            .click();
        cy.get(title4)
            .should('be.visible')
            .and('have.text','Unlocking the power of intelligent connectivity');
        cy.go('back');
    }

    static checkCareers() {
        cy.get(careers)
            .click();
        cy.get(title4)
            .should('be.visible')
            .and('have.text','Shape Your Future at Telnyx');
        cy.go('back');
    }

    static checkData() {
        cy.get(data)
            .click();
        cy.get(title)
            .should('be.visible')
            .and('have.text','Data & Privacy');
        cy.go('back');
    }

    static checkSupport() {
        cy.get(support)
            .invoke('removeAttr', 'target')
            .click();
        cy.url()
            .should('include','support');  
        cy.go('back');
    }

    static checkReport() {
        cy.get(report)
            .click();
        cy.get(title3)
            .should('be.visible')
            .and('have.text','Report Abuse');
        cy.go('back');
   }

   static checkPrivacy() {
        cy.get(privacy)
            .invoke('removeAttr', 'target')
            .click();
        cy.get(title3)
            .should('be.visible')
            .and('have.text','Privacy Policy');
        cy.go('back');
    }

    static checkCookie() {
        cy.get(cookie)
            .click();
        cy.get(title3)
            .should('be.visible')
            .and('have.text','Telnyx Cookie Policy');
        cy.go('back');
    }

    static checkAcceptable() {
        cy.get(acceptable)
            .click();
        cy.get(title3)
            .should('be.visible')
            .and('have.text','TELNYX ACCEPTABLE USE POLICY');
        cy.go('back');
    }

    static checkWebsiteConditions() {
        cy.get(website)
            .click();
        cy.get(title3)
            .should('be.visible')
            .and('have.text','Terms and Conditions');
        cy.go('back');
    }

    static checkLawRequest() {
        cy.get(lawRequest)
            .invoke('removeAttr', 'target')
            .click();
        cy.get('iframe')
            .should(iframe => expect(iframe.contents().find(lawRequestTitle)).to.have.text('Telnyx Subpoena / Law Enforcement Request'));
        cy.go('back');
    }

    static checkSignUp() {
        cy.get(signUp)
            .click();
        cy.get(title3)
            .should('be.visible')
            .and('have.text','Create a free account');
        cy.go('back');
    }

    static checkLoginIn() {
        cy.get(loginIn)
            .invoke('removeAttr', 'target')
            .click();
        cy.get('div.hLpuFd')
            .should('be.visible')
            .and('have.text','Log in');
        cy.go('back');
    }
}

export default Footer;