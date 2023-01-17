import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Resource from './ID0006-ID0011Page.cy'

let randomText =(Math.random() + 1).toString(36).substring(5);
let email = (Math.random() + 1).toString(36).substring(5) + '@example.com';

Given('I open site and hover "Resources" link', () => {
    Resource.visitSite();
    Resource.hoverResources();
})

When('Click the "Blog" link', () => {
    Resource.clickAndCheckBlog();
})

Then('Enter valid data in the search field. I should see search results.', () => {
    Resource.inputSearchValidData('wireless');
    Resource.checkResult();
})



Then('Enter invalid data in the search field. I should see the "No results found for.." message', () => {
    Resource.inputSearchInvalidData(randomText);
    Resource.searchNoResulta();
})

Then('Scroll down to the "Stay Connected" block. Subscribe to the newsletter with valid mail.', () => {
    Resource.scrollDownToTheBanner();
    Resource.subscribe(email);
})
// can't finished subscription, because the site was failed

Then('Scroll down to the "Stay Connected" block. Subscribe to the newsletter with invalid mail.', () => {
    Resource.scrollDownToTheBanner();
    Resource.subscribe(randomText);
    Resource.checkIncorrectSubscribe();
})

When('Click the "Blog" link. Scroll down to the "Get the eBook" banner.', () => {
    Resource.clickAndCheckBlog();
    Resource.clickGetButton();
})

Then('Filling the form and get the e-book.', () => {
    Resource.fillForm('User','User','UserCompany', email);
    Resource.clickSendButton();   
})

When('Click the "Developer Docs" link', () => {
    Resource.clickCheckDeveloperDocs();
})

Then('Checking "Live chat" on the footer.', () => {
    Resource.scrollDownToTheFooter();
    Resource.checkLiveChatLink();
})