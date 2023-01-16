import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Footer from './ID0005Page.cy';

Given('I open site', () => {
    Footer.visitSite();
})

When('Scroll down to the footer', () => {
    Footer.scrollDownToTheFooter();
})

Then('Checking all links should be clickable and I should see opened new pages', () => {
    Footer.checkElastic();
    Footer.checkCallControl();
    Footer.checkProgrammable();
    Footer.checkFaxing();
    Footer.checkWireless();
    Footer.checkNumber();
    Footer.checkGlobal();
    Footer.checkVerifyApi();
    Footer.checkAllProducts();
    Footer.checkDeveloper();
    Footer.checkBlog();
    Footer.checkResource();
    Footer.checkRelease();
    Footer.checkElasticPricing();
    Footer.checkSms();
    Footer.checkVoice();
    Footer.checkWirelessPricing();
    Footer.checkAbout();
    Footer.checkCareers();
    Footer.checkData();
    Footer.checkSupport();
    Footer.checkReport();
    Footer.checkPrivacy();
    Footer.checkCookie();
    Footer.checkAcceptable();
    Footer.checkWebsiteConditions();
    Footer.checkLawRequest();
    Footer.checkSignUp();
    Footer.checkLoginIn();
})