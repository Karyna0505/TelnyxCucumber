Feature: Verify message popup.

Scenario:ID_0015 Verify message popup on the "Managed Service Providers" page. 
        Given I open site.
        And I click "Accept and close" button.
        And I hover the mouse over the "Solutions" link.
        When I click the "Managed Service Providers" link.
        Then I check the message popup on the header of the new page.

