import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import NavMenuPage from '../PagesObject/NavMenuPage.cy';

Given('I open site.', () => {
    NavMenuPage.visitSite();
})

And('I click "Accept and close" button.', () => {
    NavMenuPage.clickAccept();
})

And('I hover the mouse over the "Pricing" link.', () => {
    NavMenuPage.hoverPricing();
})

When('I click the "Elastic SIP Trunking" link.', () => {
    NavMenuPage.clickElasticLink();
})

Then('I should see the "SIP Trunk Pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleElasticPage();
})

When('I click the "Voice API" link.', () => {
    NavMenuPage.clickVoiceApi();
})

Then('I should see the "Voice API Pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleVoicePage();
})

When('I click the "SMS API" link.', () => {
    NavMenuPage.clickSmsApi();
})

Then('I should see the "Messaging pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleSmsPage();
})

When('I click the "Fax" link.', () => {
    NavMenuPage.clickFaxLink();
})

Then('I should see the "Programmable Fax API Pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleFaxPage();
})

When('I click the "Wireless" link.', () => {
    NavMenuPage.clickWirelessLink();
})

Then('I should see the "IoT SIM Card Data Plans & Pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleWirelessPage();
})

When('I click the "Verify API" link.', () => {
    NavMenuPage.clickVerifyApi();
})

Then('I should see the "Verify API Pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleVerifyApiPage();
})

When('I click the "Identity Services & Data" link.', () => {
    NavMenuPage.clickService();
})

Then('I should see the "ID Services & Data pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleServicePage();
})


