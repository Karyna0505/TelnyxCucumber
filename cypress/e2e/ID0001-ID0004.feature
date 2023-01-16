Feature: Checking navigation menu 

    As a user
    I want to use navigation menu.

    Scenario:ID_0001 Checking "Pricing" menu items on the navmenu.
        Given I open site
        When I hover the mouse over the "Pricing" link  
        Then Checking all "Pricing" items are clickable and I should see opened new pages

    Scenario:ID_0002 Checking "Company" menu items on the navmenu.   
        Given I open site
        When  I hover the mouse over the "Company" link 
        Then Checking all "Company" items are clickable and I should see opened new pages

    Scenario:ID_0003 Checking "Resources" menu items on the navmenu.
        Given I open site
        When  I hover the mouse over the "Resources" link 
        Then Checking all "Resources" items are clickable and I should see opened new pages

    Scenario:ID_0004 Checking "Solutions" menu items on the navmenu.
        Given I open site
        When  I hover the mouse over the "Solutions" link 
        Then Checking all "Solutions" items are clickable and I should see opened new pages
