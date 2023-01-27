const banner = 'main a[href*="telnyx"]>span';
const currentValue  = 240000;
const targetValue = 480000;
const increment = 2000;
const steps = (targetValue - currentValue) / increment;
const arrows = '{rightarrow}'.repeat(steps); 
const sliderOutbound = 'div:nth-child(4) .ant-slider-handle';
const sliderInbound = 'div:nth-child(5) .ant-slider-handle';
const costTelnyx = 'div>span>span';
const costTwilio = 'div:nth-child(2)>div:nth-child(2)>span[class]';

class SwithSave{

    static checkBanner() {
        cy.get(banner)
            .scrollIntoView()
            .should('be.visible').and('have.text','Switch + Save with Telnyx.')
    }

    static switchSlider() {
        cy.get(sliderOutbound)
            .type(arrows);
        cy.get(sliderInbound)
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