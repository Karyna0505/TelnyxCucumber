Feature: Check links on the footer.
        
        As a user
        I want to use all link on the footer.

Scenario:ID_0005 All links on the footer should be clickable.
        Given I open site.
        And I click "Accept and close" button.
        And I scroll down to the footer.
        When I click the "Elastic SIP Trunking" link.
        Then I should see the "Leading Global SIP Trunking Provider" title of the opened page.

        When I click the "Call Control" link.
        Then I should see the "Voice API" title of the opened page.

        When I click the "Programmable SMS" link.
        Then I should see the "SMS API" title of the opened page.

        When I click the "Faxing" link.
        Then I should see the "Programmable Fax API" title of the opened page.

        When I click the "Wireless" link.
        Then I should see the "IoT SIM Card Data Plans & Pricing" title of the opened page.

        When I click the "Number Lookup" link.
        Then I should see the "Number Lookup" title of the opened page.

        When I click the "Global Numbers" link.
        Then I should see the "Buy business numbers on demand." title of the opened page.

        When I click the "Verify API" link.
        Then I should see the "Verify API" title of the opened page.

        When I click the all products link.
        Then I should see the "Products" title of the opened page.

        When I click the "Developer Docs" link.
        Then I should see the "Telnyx API Documentation" new page.

        When I click the "Blog" link.
        Then I should see the "Blog" title of the opened page.

        When I click the "Resource" link.
        Then I should see the "Resource Hub" title of the opened page.

        When I click the "Release Notes" link.
        Then I should see the "Release Notes" title of the opened page.

        When I click the "Elastic SIP Trunking Pricing" link.
        Then I should see the "SIP Trunk Pricing" title of the opened page.

        When I click the "SMS API" link.
        Then I should see the "Messaging pricing" title of the opened page.

        When I click the "Voice API" link. 
        Then I should see the "Voice API Pricing" title of the opened page.

        When I click the "Wireless" link. 
        Then I should see the "IoT SIM Card Data Plans & Pricing" title of the opened page.

        When I click the "About Telnyx" link.
        Then I should see the "About Us" subtitle of the opened page.

        When I click the "Careers" link.
        Then I should see the "Careers at Telnyx" subtitle of the opened page.

        When I click the "Data" link.
        Then I should see the "Data" title of the opened page.

        When I click the "Support Center" link.
        Then I should see the title of the opened page.

        When I click the "Report Abuse" link.
        Then I should see the "Report Abuse" title of the opened page.

        When I click the "Privacy Policy" link.
        Then I should see the "Privacy Policy" title of the opened page.

        When I click the "Cookie Policy" link.
        Then I should see the "Cookie Policy" title of the opened page.

        When I click the "Acceptable Use Policy" link.
        Then I should see the "Acceptable Use Policy" title of the opened page.

        When I click the "Website Terms" link.
        Then I should see the "Terms and Conditions" title of the opened page.

        When I click the "Law" link.
        Then I should see the "Law" title of the opened page.

        When I click the "Sign up" link.
        Then I should see the registration page.

        When I click the "Log In" link.
        Then I should see the authorization page.




