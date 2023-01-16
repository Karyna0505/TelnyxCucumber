Feature: Checking "Pricing" menu 

 Scenario:ID_0013 Checking Voice API Pricing after choosing country.  
        Given I open site and hover "Pricing" link.
        When Click the "Voice API" link.
        Then Check changes price by choosing country.

 Scenario:ID_0014 Checking "Download SIP Trunking pricing" form.  
        Given I open site and hover "Pricing" link.
        When Click the "Elastic SIP Trunking" link.
        Then Checking to download prices.