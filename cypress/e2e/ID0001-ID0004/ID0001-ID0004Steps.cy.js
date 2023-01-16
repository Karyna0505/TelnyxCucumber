import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import NavMenuPage from './ID0001-ID0004Page.cy';

Given('I open site', () => {
    NavMenuPage.visitSite();
})

When('I hover the mouse over the "Pricing" link', () => {
    NavMenuPage.hoverPricing();
    NavMenuPage.beVisiblePricing();
})

Then('Checking all "Pricing" items are clickable and I should see opened new pages', () => {
    NavMenuPage.checkElastic();
    NavMenuPage.checkVoiceApi();
    NavMenuPage.checkSmsApi();
    NavMenuPage.checkFax();
    NavMenuPage.checkWireless();
    NavMenuPage.checkVerifyApi();
    NavMenuPage.checkService();
})

When('I hover the mouse over the "Company" link', () => {
    NavMenuPage.hoverCompany();
    NavMenuPage.beVisibleCompany();
})

Then('Checking all "Company" items are clickable and I should see opened new pages', () => {
    NavMenuPage.checkAboutTelnyx();
    NavMenuPage.checkCareers();
    NavMenuPage.checkPartners();
    NavMenuPage.checkIntegrations();
})

When('I hover the mouse over the "Resources" link', () => {
    NavMenuPage.hoverResources();
    NavMenuPage.beVisibleResource();
})

Then('Checking all "Resources" items are clickable and I should see opened new pages', () => {
    NavMenuPage.checkDeveloperDocs();
    NavMenuPage.checkCustomerStories();
    NavMenuPage.checkBlog();
    NavMenuPage.checkCarrier();
    NavMenuPage.checkControl();
    NavMenuPage.checkCalculator();
})

When('I hover the mouse over the "Solutions" link', () => {
    NavMenuPage.hoverSolutions();
    NavMenuPage.beVisibleSolutions();
})

Then('Checking all "Solutions" items are clickable and I should see opened new pages', () => {
    NavMenuPage.checkPlatforms();
    NavMenuPage.checkBusiness();
    NavMenuPage.checkManaged();
    
})