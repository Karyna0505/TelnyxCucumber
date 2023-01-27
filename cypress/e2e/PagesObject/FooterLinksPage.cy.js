const footer = '#__next > div > footer';

// Products
const elastic = 'footer a[href*="products/sip-trunks"]';
const callControl = 'footer a[href*="products/voice"]';
const programmable = 'footer a[href*="products/sms"]';
const faxing = 'footer a[href*="products/fax"]';
const wireless = 'footer a[href*="products/iot"]';
const number = 'footer a[href^="/number"]';
const global = 'footer a[href$="numbers"]';
const verifyApi = 'footer a[href*="verify"]';
const allProducts = 'footer a[href="/products"]';

// Resources
const developer = 'footer a[href*="developers"]';
const blog = 'footer a[href*="resources"]';
const resource = 'footer a[href*="learn"]';
const release = 'footer a[href*="release"]';

// Pricing
const elasticPricing = 'footer a[href*="elastic"]';
const sms = 'footer a[href*="messaging"]';
const voice = 'footer a[href*="call"]';
const wirelessPricing = 'footer a[href*="/pricing/iot"]';

// Company
const about = 'footer a[href*="about"]';
const careers = 'footer a[href*="careers"]';
const data = 'footer a[href*="company/data"]';
const support = 'footer a[href*="support"]';
const report = 'footer a[href*="report"]';
const privacy = 'footer a[href*="/privacy"]';
const cookie = 'footer a[href*="cookie"]';
const acceptable = 'footer a[href*="acceptable"]';
const website = 'footer a[href*="terms"]';
const lawRequest = 'footer a[href*="law"]';

// Mission Control
const signUp = 'footer a[href*="sign"]';
const loginIn = 'footer a[href*="portal"]';

const title = 'main h1>span'; 
const title2 = 'main h1';
const titleLoginIn = '[data-testid="login.signin.title"]';
const titleNumber = 'main h1>span>strong';

class Footer {

    static visitSite() {
        cy.visit(URL);
    }

    static clickAccept() {
        cy.get(accept)
            .click();
    }

    static scrollDownToTheFooter() {
        cy.scrollTo('bottom');
        cy.get(footer)
            .should('be.visible');
    }

    static clickElastic() {
        cy.get(elastic)
            .click();
    }

    static checkElasticPage(){
        cy.get(title)
            .should('be.visible')
            .and('have.text','Leading Global SIP Trunking Provider');
        cy.go('back');
    }

    static clickCallControl() {
        cy.get(callControl)
            .click();
    }

    static checkCallControlPage(){
        cy.get(title)
            .should('be.visible')
            .and('have.text','Voice API');
        cy.go('back');
    }

    static clickProgrammable() {
        cy.get(programmable)
            .click();
    }

    static checkProgrammablePage(){
        cy.get(title)
            .should('be.visible')
            .and('have.text','SMS API');
        cy.go('back');
    }

    static clickFaxing() {
        cy.get(faxing)
            .click();
    }

    static checkFaxingPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Reliably transmit documents with our Programmable Fax API over Private IP');
        cy.go('back');
    }

    static clickWireless() {
        cy.get(wireless)
            .click();
    }

    static checkWirelessPage(){
        cy.get(title)
            .should('be.visible')
            .and('have.text','IoT SIM Cards for Global Connectivity');
        cy.go('back');
    }

    static clickNumber() {
        cy.get(number)
            .click();
    }

    static checkNumberPage(){
        cy.get(titleNumber)
            .should('be.visible')
            .and('have.text','Know the details behind every number with Phone Number Lookup');
        cy.go('back');
    }

    static clickGlobal() {
        cy.get(global)
            .click();
    }
    
    static checkGlobalPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Buy business numbers on demand.');
        cy.go('back');
    }

    static clickVerifyApi() {
        cy.get(verifyApi)
            .click();
    }

    static checkVerifyApiPage () {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Verify API: User authentication made easy');
        cy.go('back');
    }

    static clickAllProducts() {
        cy.get(allProducts)
            .click();
    }

    static checkAllProductsPage() {
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Products');
        cy.go('back');
    }

    static clickDeveloper() {
        cy.get(developer)
            .invoke('removeAttr', 'target')
            .click({ multiple: true });
    }

    static clickBlog() {
        cy.get(blog)
            .click();
    }

    static clickResource() {
        cy.get(resource)
            .click();
    }

    static checkResourcePage() {
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Resource Hub');
        cy.go('back');
    }

    static clickRelease() {
        cy.get(release)
            .click();
    }

    static checkReleasePage() {
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Release Notes');
        cy.go('back');
    }

    static clickElasticPricing() {
        cy.get(elasticPricing)
            .click();
    }

    static clickSmsPricing() {
        cy.get(sms)
            .click();
    }

    static clickVoicePricing() {
        cy.get(voice)
            .click();
    }

    static clickWirelessPricing() {
        cy.get(wirelessPricing)
            .click();
    }


    static clickAbout() {
        cy.get(about)
            .click();
    }

    static clickCareers() {
        cy.get(careers)
            .click();
    }

    static clickData() {
        cy.get(data)
            .click();
    }

    static checkDataPage() {
        cy.get(title)
            .should('be.visible')
            .and('have.text','Data & Privacy');
        cy.go('back');
    }

    static clickSupport() {
        cy.get(support)
            .invoke('removeAttr', 'target')
            .click();
    }

    static checkSupportPage() {
        cy.url()
            .should('include','support');  
        cy.go('back');
    }

    static clickReport() {
        cy.get(report)
            .click();
    }

    static checkReportPage() {
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Report Abuse');
        cy.go('back');
    }
    
   static clickPrivacy() {
        cy.get(privacy)
            .invoke('removeAttr', 'target')
            .click();
    }

    static checkPrivacyPage() {
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Privacy Policy');
        cy.go('back');
    }

    static clickCookie() {
        cy.get(cookie)
            .click();
    }

    static checkCookiePage() {
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Telnyx Cookie Policy');
        cy.go('back');
    }

    static clickAcceptable() {
        cy.get(acceptable)
            .click();
    }

    static checkAcceptablePage() {
        cy.get(title2)
            .should('be.visible')
            .and('have.text','TELNYX ACCEPTABLE USE POLICY');
        cy.go('back');
    }

    static clickWebsiteConditions() {
        cy.get(website)
            .click();
    }
    
    static checkWebsitePage() {
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Terms and Conditions');
        cy.go('back');
    }

    static clickLawRequest() {
        cy.get(lawRequest)
            .invoke('removeAttr', 'target')
            .click();
    }

    static checkLawPage() {
        cy.url()
            .should('include','law-enforcement-request');  
        cy.go('back');
    }

    static clickSignUp() {
        cy.get(signUp)
            .click();
    }

    static checkRegistrationPage() {
        cy.get(title2)
            .should('be.visible')
            .and('have.text','Create a free account');
        cy.go('back');
    }

    static clickLoginIn() {
        cy.get(loginIn)
            .invoke('removeAttr', 'target')
            .click();
    }

    static checkAuthorizationPage() {
        cy.get(titleLoginIn)
            .should('be.visible')
            .and('have.text','Log in');
        cy.go('back');
    }
}

export default Footer;