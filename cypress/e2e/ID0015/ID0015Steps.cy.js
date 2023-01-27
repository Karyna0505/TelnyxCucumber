import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import PopupMessage from '../PagesObject/MessagePopupPage.cy';
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

When('I click the "Managed Service Providers" link.', () => {
    NavMenuPage.clickManaged();
})

Then('I check the message popup on the header of the new page.', () => {
    PopupMessage.checkPopupMessage();
})