Feature: Check navigation menu. 

    As a user
    I want to use navigation menu.

    Scenario:ID_0003 Check "Resources" menu items on the navmenu.
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Resources" link.
        When I click the "Developer Docs" link.
        Then I should see the "Telnyx API Documentation" new page.

        When I click the "Customer Stories" link.
        Then I should see the title of the opened page.

        When I click the "Blog" link.
        Then I should see the "Blog" title of the opened page.

        When I click the "Bring Your Own Carrier" link.
        Then I should see the "Bring Your Own Carrier" title of the opened page.

        When I click the "Mission Control" link.
        Then I should see the "Mission Control Portal" title of the opened page.

        When I click the "Savings Calculator" link.
        Then I should see the "Savings Calculator" subtitle of the opened page.


        

        

        

        

        


