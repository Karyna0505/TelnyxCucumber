Feature: Check navigation menu. 

    As a user
    I want to use navigation menu.

    Scenario:ID_0002 Check "Company" menu items on the navmenu.   
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Company" link.
        When I click the "About Telnyx" link.
        Then I should see the "About Us" subtitle of the opened page.

        When I click the "Careers" link.
        Then I should see the "Careers at Telnyx" subtitle of the opened page.

        When I click the "Partners" link.
        Then I should see the "PARTNERS" subtitle of the opened page.

        When I click the "Integrations" link.
        Then I should see the title of the opened page.
