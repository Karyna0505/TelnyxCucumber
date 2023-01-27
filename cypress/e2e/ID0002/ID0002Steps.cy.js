import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import NavMenuPage from '../PagesObject/NavMenuPage.cy';

Given('I open site.', () => {
    NavMenuPage.visitSite();
})

And('I click "Accept and close" button.', () => {
    NavMenuPage.clickAccept();
})

And('I hover the mouse over the "Company" link.', () => {
    NavMenuPage.hoverCompany();
})

When('I click the "About Telnyx" link.', () => {
    NavMenuPage.clickAboutTelnyx();
})

Then('I should see the "About Us" subtitle of the opened page.', () => {
    NavMenuPage.checkSubtitleAboutPage();
})

When('I click the "Careers" link.', () => {
    NavMenuPage.clickCareersLink();
})

Then('I should see the "Careers at Telnyx" subtitle of the opened page.', () => {
    NavMenuPage.checkSubtitleCareersPage();
})

When('I click the "Partners" link.', () => {
    NavMenuPage.clickPartnersLink();
})

Then('I should see the "PARTNERS" subtitle of the opened page.', () => {
    NavMenuPage.checkSubtitlePartnersPage();
})

When('I click the "Integrations" link.', () => {
    NavMenuPage.clickIntegrations();
})

Then('I should see the title of the opened page.', () => {
    NavMenuPage.checkTitleIntegrationsPage();
})
