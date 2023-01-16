import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import SwithSave from './ID0012Page.cy'

Given('I open site.', () => {
    SwithSave.visitSite();
})

When('Scroll down to the "Switch + Save with Telnyx." banner.', () => {
    SwithSave.scrollDown();
})

Then('Switch slider and check changing', () => {
    SwithSave.switchSlider();
    SwithSave.checkChangeCost();
})