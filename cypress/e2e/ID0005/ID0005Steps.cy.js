import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import Footer from '../PagesObject/FooterLinksPage.cy';
import NavMenuPage from '../PagesObject/NavMenuPage.cy';

Given('I open site.', () => {
    NavMenuPage.visitSite();
})

And('I click "Accept and close" button.', () => {
    NavMenuPage.clickAccept();
})

And('I scroll down to the footer.', () => {
    Footer.scrollDownToTheFooter();
})

When('I click the "Elastic SIP Trunking" link.', () => {
    Footer.clickElastic();
})

Then('I should see the "Leading Global SIP Trunking Provider" title of the opened page.', () => {
    Footer.checkElasticPage();
})

When('I click the "Call Control" link.', () => {
    Footer.clickCallControl();
})

Then('I should see the "Voice API" title of the opened page.', () => {
    Footer.checkCallControlPage();
})

When('I click the "Programmable SMS" link.', () => {
    Footer.clickProgrammable();
})

Then('I should see the "SMS API" title of the opened page.', () => {
    Footer.checkProgrammablePage();
})

When('I click the "Faxing" link.', () => {
    Footer.clickFaxing();
})

Then('I should see the "Programmable Fax API" title of the opened page.', () => {
    Footer.checkFaxingPage();
})

When('I click the "Wireless" link.', () => {
    Footer.clickWireless();
})

Then('I should see the "IoT SIM Card Data Plans & Pricing" title of the opened page.', () => {
    Footer.checkWirelessPage();
})

When('I click the "Number Lookup" link.', () => {
    Footer.clickNumber();
})

Then('I should see the "Number Lookup" title of the opened page.', () => {
    Footer.checkNumberPage();
})

When('I click the "Global Numbers" link.', () => {
    Footer.clickGlobal();
})

Then('I should see the "Buy business numbers on demand." title of the opened page.', () => {
    Footer.checkGlobalPage();
})

When('I click the "Verify API" link.', () => {
    Footer.clickVerifyApi();
})

Then('I should see the "Verify API" title of the opened page.', () => {
    Footer.checkVerifyApiPage();
})

When('I click the all products link.', () => {
    Footer.clickAllProducts();
})

Then('I should see the "Products" title of the opened page.', () => {
    Footer.checkAllProductsPage();
})

When('I click the "Developer Docs" link.', () => {
    Footer.clickDeveloper();
})

Then('I should see the "Telnyx API Documentation" new page.', () => {
    NavMenuPage.checkTitleDeveloperPage();
})

When('I click the "Blog" link.', () => {
    Footer.clickBlog();
})

Then('I should see the "Blog" title of the opened page.', () => {
    NavMenuPage.checkTitleBlogPage();
})

When('I click the "Resource" link.', () => {
    Footer.clickResource();
})

Then('I should see the "Resource Hub" title of the opened page.', () => {
    Footer.checkResourcePage();
})

When('I click the "Release Notes" link.', () => {
    Footer.clickRelease();
})

Then('I should see the "Release Notes" title of the opened page.', () => {
    Footer.checkReleasePage();
})

When('I click the "Elastic SIP Trunking Pricing" link.', () => {
    Footer.clickElasticPricing();
})

Then('I should see the "SIP Trunk Pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleElasticPage();
})

When('I click the "SMS API" link.', () => {
    Footer.clickSmsPricing();
})

Then('I should see the "Messaging pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleSmsPage();
})

When('I click the "Voice API" link.', () => {
    Footer.clickVoicePricing();
})

Then('I should see the "Voice API Pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleVoicePage();
})

When('I click the "Wireless" link.', () => {
    Footer.clickWirelessPricing();
})

Then('I should see the "IoT SIM Card Data Plans & Pricing" title of the opened page.', () => {
    NavMenuPage.checkTitleWirelessPage();
})

When('I click the "About Telnyx" link.', () => {
    Footer.clickAbout();
})

Then('I should see the "About Us" subtitle of the opened page.', () => {
    NavMenuPage.checkSubtitleAboutPage();
})

When('I click the "Careers" link.', () => {
    Footer.clickCareers();
})

Then('I should see the "Careers at Telnyx" subtitle of the opened page.', () => {
    NavMenuPage.checkSubtitleCareersPage();
})

When('I click the "Data" link.', () => {
    Footer.clickData();
})

Then('I should see the "Data" title of the opened page.', () => {
    Footer.checkDataPage();
})

When('I click the "Support Center" link.', () => {
    Footer.clickSupport();
})

Then('I should see the title of the opened page.', () => {
    Footer.checkSupportPage();
})

When('I click the "Report Abuse" link.', () => {
    Footer.clickReport();
})

Then('I should see the "Report Abuse" title of the opened page.', () => {
    Footer.checkReportPage();
})

When('I click the "Privacy Policy" link.', () => {
    Footer.clickPrivacy();
})

Then('I should see the "Privacy Policy" title of the opened page.', () => {
    Footer.checkPrivacyPage();
})

When('I click the "Cookie Policy" link.', () => {
    Footer.clickCookie();
})

Then('I should see the "Cookie Policy" title of the opened page.', () => {
    Footer.checkCookiePage();
})

When('I click the "Acceptable Use Policy" link.', () => {
    Footer.clickAcceptable();
})

Then('I should see the "Acceptable Use Policy" title of the opened page.', () => {
    Footer.checkAcceptablePage();
})

When('I click the "Website Terms" link.', () => {
    Footer.clickWebsiteConditions();
})

Then('I should see the "Terms and Conditions" title of the opened page.', () => {
    Footer.checkWebsitePage();
})

When('I click the "Law" link.', () => {
    Footer.clickLawRequest();
})

Then('I should see the "Law" title of the opened page.', () => {
    Footer.checkLawPage();
})

When('I click the "Sign up" link.', () => {
    Footer.clickSignUp();
})

Then('I should see the registration page.', () => {
    Footer.checkRegistrationPage();
})

When('I click the "Log In" link.', () => {
    Footer.clickLoginIn();
})

Then('I should see the authorization page.', () => {
    Footer.checkAuthorizationPage();
})