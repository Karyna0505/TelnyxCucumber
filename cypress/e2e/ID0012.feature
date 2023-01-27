Feature: Сheck banner calculator.

       As a user
       I want to use calculator banner option on the main page.

 Scenario:ID_0012 Check correct work calculator banner after changing slider-handle.
       Given I open site. 
       And I click "Accept and close" button.
       And I should see the "Switch + Save with Telnyx." banner after scrolling down.
       When I switch sliders in the "How much will you save?" side.
       Then I check changed costs in the Compare Costs.