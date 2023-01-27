const liveChatLink = 'footer #intercom_launcher';

class Developer{

static CheckLiveChatLink() {
    cy.scrollTo('bottom');
    cy.get('footer')
        .should('be.visible');
    cy.get(liveChatLink)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', 'mailto:smv2mtj6@intercom-mail.com');
}

}

export default Developer;