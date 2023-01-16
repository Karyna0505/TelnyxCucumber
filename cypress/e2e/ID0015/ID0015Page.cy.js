const URL = 'https://telnyx.com/';
const solutionsList = '#__next > div > header > div > div > div > ul > li:nth-child(3) > div > div';
const title = 'header > h1 > span';
const iframe = 'iframe[name="intercom-banner-frame"]';
const learnMoreLink = '#intercom-container a';

class PopupMessage{
    static visitSite(){
        cy.visit(URL);
        cy.contains('Accept and close')
            .click();
    }
    
    static hoverSolutions(){
        cy.contains('Solutions')
        .trigger('mouseover');
    }

    static beVisibleSolutions(){
        cy.get(solutionsList)
        .invoke('show');
    }

    static checkManaged() {
        cy.contains('Managed Service Providers')
        .invoke('show')
        .click({force: true});
        cy.get(title)
        .should('be.visible')
        .and('have.text','Managed Service Providers');
    }

    static checkPopupMessage() {
        const getIframeDocument = () => {
        return cy.get(iframe).its('0.contentDocument').should('exist').its('body').should('not.be.undefined').then(cy.wrap)
        }
        getIframeDocument().find(learnMoreLink).should('have.text', '👉 Learn more').and('have.attr', 'href').and('include', 'via.intercom.io');
    }

}

export default PopupMessage;