Feature: Check "Pricing" menu 

 Scenario:ID_0013 Check Voice API Pricing after choosing country.  
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Pricing" link.
        And I click the "Voice API" link.
        When I select needed country.
        Then I check changed pricing.

 Scenario:ID_0014 Check "Download SIP Trunking pricing" form.  
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Pricing" link.
        And I click the "Elastic SIP Trunking" link.
        And I check the "Download SIP Trunking pricing" banner on the page.
        When I fill in form on the "Download SIP Trunking pricing" banner.
        Then The message about the sent data should be displayed.