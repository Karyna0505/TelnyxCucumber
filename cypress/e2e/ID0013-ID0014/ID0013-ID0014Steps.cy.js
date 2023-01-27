import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Pricing from '../PagesObject/PricingPage.cy';
import NavMenuPage from '../PagesObject/NavMenuPage.cy';

let randomText =(Math.random() + 1).toString(36).substring(5);
let email = 'example123@gmail.com';

Given('I open site.', () => {
    NavMenuPage.visitSite();
})

And('I click "Accept and close" button.', () => {
    NavMenuPage.clickAccept();
})

And('I hover the mouse over the "Pricing" link.', () => {
    NavMenuPage.hoverPricing();
})

And('I click the "Voice API" link.', () => {
    NavMenuPage.clickVoiceApi();
})

When('I select needed country.', () => {
    Pricing.selectCountry();
})

Then('I check changed pricing.', () => {
    Pricing.checkNewPricing();
})

And('I click the "Elastic SIP Trunking" link.', () => {
    NavMenuPage.clickElasticLink();
})

And('I check the "Download SIP Trunking pricing" banner on the page.', () => {
    Pricing.checkDownloadBanner();
})

When('I fill in form on the "Download SIP Trunking pricing" banner.', () => {
    Pricing.inputData(randomText, randomText, email);
})

Then('The message about the sent data should be displayed.', () => {
    Pricing.checkMessage();
})

