const iframe = 'iframe[name="intercom-banner-frame"]';
const learnMoreLink = '#intercom-container a';

class PopupMessage{

    static checkPopupMessage() {
        const getIframeDocument = () => {
            return cy.get(iframe)
                    .its('0.contentDocument')
                    .should('exist')
                    .its('body')
                    .should('not.be.undefined')
                    .then(cy.wrap)
        }
        getIframeDocument()
            .find(learnMoreLink)
            .should('have.text', '👉 Learn more')
            .and('have.attr', 'href')
            .and('include', 'via.intercom.io')
    }

}

export default PopupMessage;