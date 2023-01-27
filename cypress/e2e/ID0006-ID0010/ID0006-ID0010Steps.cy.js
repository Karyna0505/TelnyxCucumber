import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import NavMenuPage from '../PagesObject/NavMenuPage.cy';
import Blog from '../PagesObject/BlogPage.cy';

let randomText =(Math.random() + 1).toString(36).substring(5);
let email = (Math.random() + 1).toString(36).substring(5) + '@example.com';

Given('I open site.', () => {
    NavMenuPage.visitSite();
})

And('I click "Accept and close" button.', () => {
    NavMenuPage.clickAccept();
})

And('I hover the mouse over the "Resources" link.', () => {
    NavMenuPage.hoverResources();
})

And('I click the "Blog" link.', () => {
    NavMenuPage.clickBlogLink();
})

When('I am doing a search with valid data.', () => {
    Blog.inputSearchValidData('wireless');
})

Then('I should see search results.', () => {
    Blog.checkResult();
})

When('I am doing a search with invalid data.', () => {
    Blog.inputSearchInvalidData(randomText);
})

Then('I should see the "No results found for.." message.', () => {
    Blog.searchNoResult();
})

And('I scroll down to the "Stay Connected" block.', () => {
    Blog.scrollDownToTheBanner();
})

When('I subscribe to the newsletter with valid mail.', () => {
    Blog.subscribe(email);
})

Then('The successful subscription message should be displayed.', () => {
    Blog.checkAcceptMessage();
})
// can't finished subscription, because the site has bug

When('I subscribe to the newsletter with invalid mail.', () => {
    Blog.subscribe(randomText);
})

Then('The "Please enter a valid email address." subscription message should be displayed.', () => {
    Blog.checkIncorrectSubscribe();
})

When('I click the "Get the eBook" link.', () => {
    Blog.clickGetButton();
})

Then('I should see new page with getting form.', () => {
    Blog.checkNewPage();
})