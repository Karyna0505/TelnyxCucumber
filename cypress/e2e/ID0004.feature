Feature: Check navigation menu. 

    As a user
    I want to use navigation menu.

    Scenario:ID_0004 Check "Solutions" menu items on the navmenu.
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Solutions" link.
        When I click the "Customer Engagement Platforms" link.
        Then I should see the "Customer Engagement Platforms" title of the opened page.

        When I click the "Business to Consumer Brands" link.
        Then I should see the "Business to Consumer Brands" title of the opened page.

        When I click the "Managed Service Providers" link.
        Then I should see the "Managed Service Providers" title of the opened page.

        When I click the "Contact Center" link.
        Then I should see the "Contact Center" title of the opened page.

        When I click the "Call Tracking" link.
        Then I should see the "Call Tracking" title of the opened page.

        When I click the "SMS Customer Support" link.
        Then I should see the title about support of the opened page.

        When I click the "VoIP for Small Business" link.
        Then I should see the title about support of the opened page.



        