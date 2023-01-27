Feature: Check "Live chat" form

        As a user
        I want to use live chat options on the page.

    Scenario:ID_00011 Check "Live chat" form on the Telnyx Developers page.
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Resources" link.
        When I click the "Developer Docs" link.
        Then I check "Live chat" on the footer on the new page.