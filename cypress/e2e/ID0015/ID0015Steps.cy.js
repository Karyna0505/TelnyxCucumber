import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import PopupMessage from './ID0015Page.cy'

Given('I open site and hover "Solutions" link.', () => {
    PopupMessage.visitSite();
    PopupMessage.hoverSolutions();
    PopupMessage.beVisibleSolutions();
})

When('Click the "Managed Service Providers" link.', () => {
    PopupMessage.checkManaged();
})

Then('Check the message popup on the header.', () => {
    PopupMessage.checkPopupMessage();
})