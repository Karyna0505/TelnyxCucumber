const URL = 'https://telnyx.com/';
const currentValue  = 240000;
const targetValue = 480000;
const increment = 2000;
const steps = (targetValue - currentValue) / increment;
const arrows = '{rightarrow}'.repeat(steps); 
const costTelnyx = 'div:nth-child(2) > div.sc-1a5981e5-14.bAmCql > span > span';
const costTwilio = 'div.sc-1a5981e5-7.fgvOeg > div:nth-child(2) > span';

class SwithSave{

    static visitSite() {
        cy.visit(URL);
        cy.contains('Accept and close')
            .click();
    }

    static scrollDown() {
        cy.contains('Switch + Save with Telnyx.')
            .scrollIntoView()
            .should('be.visible')
            .wait(1000);
    }

    static switchSlider() {
        cy.get('div:nth-child(4) > div> div > div.ant-slider-handle')
            .type(arrows);
        cy.get('div:nth-child(5) > div.telnyx-slider > div > div.ant-slider-handle')
            .type(arrows);       
    }

    static checkChangeCost() {
        cy.get(costTelnyx)
            .should(($div) => {
                const text = $div.text();
                expect(text).not.to.include('$2,578')})

        cy.get(costTwilio)
            .should(($div) => {
            const text = $div.text();
            expect(text).not.to.include('$4,502')})
    }
}
    


export default SwithSave;