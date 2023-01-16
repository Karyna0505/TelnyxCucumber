Feature: Checking links on the footer

Scenario:ID_0005 All links on the footer should be clickable.
        Given I open site 
        When Scroll down to the footer  
        Then Checking all links should be clickable and I should see opened new pages