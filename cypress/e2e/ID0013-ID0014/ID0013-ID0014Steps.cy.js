import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Pricing from './ID0013-ID0014Page.cy'

let randomText =(Math.random() + 1).toString(36).substring(5);
let email = 'example123@gmail.com';

Given('I open site and hover "Pricing" link.', () => {
    Pricing.visitSite();
    Pricing.hoverPricing();
    Pricing.beVisiblePricing();
})

When('Click the "Voice API" link.', () => {
    Pricing.checkVoiceApi();
})

Then('Check changes price by choosing country.', () => {
    Pricing.selectCountry();
    Pricing.checkNewPricing();
})

When('Click the "Elastic SIP Trunking" link.', () => {
    Pricing.checkElastic();
})

Then('Checking to download prices.', () => {
    Pricing.scrollToTheDownloadBanner();
    Pricing.inputData(randomText, randomText, email);
    Pricing.clickButton();
    Pricing.checkMessage();
})

