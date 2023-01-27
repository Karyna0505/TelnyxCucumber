import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import SwithSave from '../PagesObject/CalculatorBannerPage.cy'
import NavMenuPage from '../PagesObject/NavMenuPage.cy';


Given('I open site.', () => {
    NavMenuPage.visitSite();
})

And('I click "Accept and close" button.', () => {
    NavMenuPage.clickAccept();
})

And('I should see the "Switch + Save with Telnyx." banner after scrolling down.', () => {
    SwithSave.checkBanner();
})

When('I switch sliders in the "How much will you save?" side.', () => {
    SwithSave.switchSlider();
})

Then('I check changed costs in the Compare Costs.', () => {
    SwithSave.checkChangeCost();
})