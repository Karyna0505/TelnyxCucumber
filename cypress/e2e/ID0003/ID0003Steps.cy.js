import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import NavMenuPage from '../PagesObject/NavMenuPage.cy';

Given('I open site.', () => {
    NavMenuPage.visitSite();
})

And('I click "Accept and close" button.', () => {
    NavMenuPage.clickAccept();
})

And('I hover the mouse over the "Resources" link.', () => {
    NavMenuPage.hoverResources();
})

When('I click the "Developer Docs" link.', () => {
    NavMenuPage.clickDeveloperLink();
})

Then('I should see the "Telnyx API Documentation" new page.', () => {
    NavMenuPage.checkTitleDeveloperPage();
})

When('I click the "Customer Stories" link.', () => {
    NavMenuPage.clickCustomerLink();
})

Then('I should see the title of the opened page.', () => {
    NavMenuPage.checkTitleCustomerPage();
})

When('I click the "Blog" link.', () => {
    NavMenuPage.clickBlogLink();
})

Then('I should see the "Blog" title of the opened page.', () => {
    NavMenuPage.checkTitleBlogPage();
})

When('I click the "Bring Your Own Carrier" link.', () => {
    NavMenuPage.clickBringLink();
})

Then('I should see the "Bring Your Own Carrier" title of the opened page.', () => {
    NavMenuPage.checkTitleBringPage();
})

When('I click the "Mission Control" link.', () => {
    NavMenuPage.clickMissionControlLink();
})

Then('I should see the "Mission Control Portal" title of the opened page.', () => {
    NavMenuPage.checkTitleMissionControlPage();
})

When('I click the "Savings Calculator" link.', () => {
    NavMenuPage.clickCalculatorLink();
})

Then('I should see the "Savings Calculator" subtitle of the opened page.', () => {
    NavMenuPage.checkSubitleCalculatorPage();
})