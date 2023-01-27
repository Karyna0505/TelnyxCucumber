Feature: Check "Blog" page

        As a user
        I want to use available options on the "Blog" page.

Scenario:ID_0006 Verify the search option on the "Blog" page with valid data.
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Resources" link.
        And I click the "Blog" link.
        When I am doing a search with valid data.
        Then I should see search results.

Scenario:ID_0007 Verify the search option on the "Blog" page with invalid data.
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Resources" link.
        And I click the "Blog" link.
        When I am doing a search with invalid data.
        Then I should see the "No results found for.." message.

Scenario:ID_0008 Check subscription option on the "Blog" page with valid email.
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Resources" link.
        And I click the "Blog" link.
        And I scroll down to the "Stay Connected" block.
        When I subscribe to the newsletter with valid mail.
        Then The successful subscription message should be displayed.

Scenario:ID_0009 Check subscription option on the "Blog" page with invalid email.
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Resources" link.
        And I click the "Blog" link.
        And I scroll down to the "Stay Connected" block.
        When I subscribe to the newsletter with invalid mail.
        Then The "Please enter a valid email address." subscription message should be displayed.

Scenario:ID_00010 Check getting eBook on the "Blog" page.
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Resources" link.
        And I click the "Blog" link.
        And I click the "Get the eBook" link.
        When I fill in all required field.
        Then The "Thank you!" message should be displayed.


