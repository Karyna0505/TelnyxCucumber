const URL = 'https://telnyx.com/';
const resourceList = '#__next > div > header > div > div > div > ul > li:nth-child(6) > div > div > div > div';
const blogTitle = 'main > div > div > div > h1';
const searchField = '#search';
const searchResult = '#articles > div.ijJVSH';
const searchNoResult = '#__next #articles div';
const emailField = '#Email';
const messageError = '#Email_error';
const title = 'main div > div > h1';
const firstName = '#FirstName';
const lastName = '#LastName';
const companyName = '#Company';
const email = '#Email';
const acceptMessage = '#lpeCDiv_109732 span';
const docsTitle = 'main > h1';
const liveChatLink = 'footer #intercom_launcher';


class Resource{

    static visitSite() {
        cy.visit(URL);
        cy.contains('Accept and close')
            .click();
    }

    static hoverResources() {
        cy.contains('Resources')
            .trigger('mouseover');
        cy.get(resourceList)
            .invoke('show');
    }

    static clickAndCheckBlog() {
        cy.contains('Blog')
            .invoke('show')
            .click({force: true});
        cy.get(blogTitle)
            .should('be.visible')
            .and('have.text','Blog');
    }

    static inputSearchValidData(text) {
        cy.get(searchField)
            .type(text)
            .type('{enter}');
    }

    static checkResult() {
        cy.get(searchResult)
            .and('have.text', 'Search results for "wireless"');
    }

    static inputSearchInvalidData(randomText) {
        cy.get(searchField)
            .type(randomText)
            .type('{enter}');
    }

    static searchNoResulta() {
        cy.get(searchNoResult)
            .should('contain', 'No results found for');
    }

    static scrollDownToTheBanner() {
        cy.contains('Stay Connected')
            .scrollIntoView()
            .should('be.visible');
    }

    static subscribe(email) {
        cy.get(emailField)
            .type(email);
        cy.contains('Subscribe')
            .click();

    }

    static checkIncorrectSubscribe() {
        cy.get(messageError)
            .should('be.visible')
            .and('have.text', 'Please enter a valid email address.')
    }

    static scrollToTheDownloadBanner() {
        cy.contains('Download our Twilio alternative eBook')
            .scrollIntoView()
            .should('be.visible');
    }

    static clickGetButton() {
        cy.contains('Get the eBook')
            .click();
        cy.get(title)
            .should('be.visible')
            .wait(1000);
    }

    static fillForm(data, emails) {
        cy.get(firstName)
            .type(data);
        cy.get(lastName)
            .type(data);
        cy.get(companyName)
            .type(data);
        cy.get(email)
            .type(emails);
        cy.contains('Send my Content')
            .click();
    }

    static checkGettingBook() {
        cy.get(acceptMessage)
            .should('be.visible')
            .and('have.text', 'Thank you!\n\nCheck your inbox for an email from Mark (mark.morse@telnyx.com). If it is not there check your spam folder and make sure to add Telnyx to your contact list in Gmail, Apple Mail or Outlook.If you don\'t receive your content in the next hour, please don\'t hesitate to reach out to Mark at mark.morse@telnyx.com.GmailApple MailOutlook');
    }

    static clickCheckDeveloperDocs() {
        cy.contains('Developer Docs')
            .invoke('show')
            .click({force: true});
        cy.get(docsTitle)
            .should('be.visible')
            .and('have.text','Telnyx API Documentation');
    }

    static scrollDownToTheFooter() {
        cy.scrollTo('bottom');
        cy.get('footer')
            .should('be.visible');
    }

    static checkLiveChatLink() {
        cy.get(liveChatLink)
            .should('be.visible')
            .and('have.attr', 'href')
            .and('include', 'mailto:smv2mtj6@intercom-mail.com');
    }
        

}


export default Resource;