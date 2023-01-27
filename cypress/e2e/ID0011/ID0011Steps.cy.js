import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import NavMenuPage from '../PagesObject/NavMenuPage.cy';
import Developer from '../PagesObject/DeveloperPage.cy';

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

Then('I check "Live chat" on the footer on the new page.', () => {
    Developer.CheckLiveChatLink();
})