Feature: Checking "Resources" menu 

Scenario:ID_0006 Verify the search option on the "Blog" page with valid data.
        Given I open site and hover "Resources" link
        When Click the "Blog" link 
        Then Enter valid data in the search field. I should see search results.

Scenario:ID_0007 Verify the search option on the "Blog" page with invalid data.
        Given I open site and hover "Resources" link
        When Click the "Blog" link 
        Then Enter invalid data in the search field. I should see the "No results found for.." message

Scenario:ID_0008 Checking subscription option on the "Blog" page with valid email.
        Given I open site and hover "Resources" link
        When Click the "Blog" link 
        Then Scroll down to the "Stay Connected" block. Subscribe to the newsletter with valid mail.

Scenario:ID_0009 Checking subscription option on the "Blog" page with invalid email.
        Given I open site and hover "Resources" link
        When Click the "Blog" link 
        Then Scroll down to the "Stay Connected" block. Subscribe to the newsletter with invalid mail.

Scenario:ID_00010 Checking getting eBook on the "Blog" page.
        Given I open site and hover "Resources" link
        # When Click the "Blog" link. Scroll down to the "Get the eBook" banner.
        # Then Filling the form and get the e-book.

Scenario:ID_00011 Checking "Live chat" form on the Telnyx Developers page.
        Given I open site and hover "Resources" link
        When Click the "Developer Docs" link 
        Then Checking "Live chat" on the footer.
