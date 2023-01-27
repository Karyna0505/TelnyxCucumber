Feature: Check navigation menu. 

    As a user
    I want to use navigation menu.

    Scenario:ID_0001 Check "Pricing" menu items on the navmenu.
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Pricing" link.
        When I click the "Elastic SIP Trunking" link.
        Then I should see the "SIP Trunk Pricing" title of the opened page.

        When I click the "Voice API" link. 
        Then I should see the "Voice API Pricing" title of the opened page.

        When I click the "SMS API" link.
        Then I should see the "Messaging pricing" title of the opened page.

        When I click the "Fax" link.
        Then I should see the "Programmable Fax API Pricing" title of the opened page.

        When I click the "Wireless" link. 
        Then I should see the "IoT SIM Card Data Plans & Pricing" title of the opened page.

        When I click the "Verify API" link.
        Then I should see the "Verify API Pricing" title of the opened page.

        When I click the "Identity Services & Data" link.
        Then I should see the "ID Services & Data pricing" title of the opened page.

  

    

    
