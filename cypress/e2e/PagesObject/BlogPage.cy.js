const searchField = '#search';
const searchResult = '#articles > div.ijJVSH';
const searchNoResult = '#__next #articles div';
const subscribe = '//*[@id="__next"]//div[3]/p[1]';
const emailField = '#Email';
const messageError = '#Email_error';
const getEbookButton ='a[href*="resources/ebook"]';
const firstName = '#FirstName';
const lastName = '#LastName';
const companyName = '#Company';
const email = '#Email';
const acceptMessage = '#lpeCDiv_109732 div:nth-child(1)';
const buttonSend = '#mktoForm_1922 button';

class Blog{

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

    static searchNoResult() {
        cy.get(searchNoResult)
            .should('contain', 'No results found for');
    }

    static scrollDownToTheBanner() {
        cy.xpath(subscribe)
            .scrollIntoView()
            .should('be.visible');
    }

    static subscribe(email) {
        cy.get(emailField)
            .type(email);
        cy.contains('Subscribe')
            .click();

    }

    static checkAcceptMessage() {}

    static checkIncorrectSubscribe() {
        cy.get(messageError)
            .should('be.visible')
            .and('have.text', 'Please enter a valid email address.')
    }
    
    static clickGetButton() {
        cy.get(getEbookButton)
            .click();
    }

    static fillForm(data, data1, data3, emails) {
        cy.get(firstName)
            .type(data)
            .should('have.value', data);
        cy.get(lastName)
            .type(data1)
            .should('have.value', data1);
        cy.get(companyName)
            .type(data3)
            .should('have.value', data3);
        cy.get(email)
            .type(emails)
            .should('have.value', emails);
        cy.get(buttonSend)
            .click({force: true})
            .wait(500); 
    }

    static checkMessage() {
        cy.get(acceptMessage)
            .should('have.text', 'Thank you!')
    }

        
}


export default Blog;