Feature: Login

    Scenario: Login to see my bids and then logout again
        Given That I am on the homepage
        When I click on the login button
        When I fill in "testing@gmail.com" in the email input
        And I fill in "qweQWE!?" in the password input
        Then I click on login
        Then I click on the profile button
        Then I see my bids on the profile page
        Then I click the logout button
        Then I will be taken back to the homepage
        Then I click the login button
        Then I see the login modal