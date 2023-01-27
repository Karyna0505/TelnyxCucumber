import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import NavMenuPage from '../PagesObject/NavMenuPage.cy';

Given('I open site.', () => {
    NavMenuPage.visitSite();
})

And('I click "Accept and close" button.', () => {
    NavMenuPage.clickAccept();
})

And('I hover the mouse over the "Solutions" link.', () => {
    NavMenuPage.hoverSolutions();
})

When('I click the "Customer Engagement Platforms" link.', () => {
    NavMenuPage.clickCustomerSolutionsLink();
})

Then('I should see the "Customer Engagement Platforms" title of the opened page.', () => {
    NavMenuPage.checkTitleCustomerSolutionsPage();
})

When('I click the "Business to Consumer Brands" link.', () => {
    NavMenuPage.clickBusiness();
})

Then('I should see the "Business to Consumer Brands" title of the opened page.', () => {
    NavMenuPage.checkTitleBusinessPage();
})

When('I click the "Managed Service Providers" link.', () => {
    NavMenuPage.clickManaged();
})

Then('I should see the "Managed Service Providers" title of the opened page.', () => {
    NavMenuPage.checkTitleManagedPage();
})

When('I click the "Contact Center" link.', () => {
    NavMenuPage.clickContact();
})

Then('I should see the "Contact Center" title of the opened page.', () => {
    NavMenuPage.checkTitleContactPage();
})

When('I click the "Call Tracking" link.', () => {
    NavMenuPage.clickCallLink();
})

Then('I should see the "Call Tracking" title of the opened page.', () => {
    NavMenuPage.checkTitleCallPage();
})

When('I click the "SMS Customer Support" link.', () => {
    NavMenuPage.clickSmsCustomer();
})

Then('I should see the title about support of the opened page.', () => {
    NavMenuPage.checkTitleSmsCustomerPage();
})

When('I click the "VoIP for Small Business" link.', () => {
    NavMenuPage.clickVoIp();
})

Then('I should see the title about support of the opened page.', () => {
    NavMenuPage.checkTitleVoIpPage();
})

