Feature: Create an account

    Scenario: Create a new user account
        Given that I am on the site
        When I click on the login button
        And I choose the register option
        And I enter a valid email address and password
        Then my account is created
        And I can log in to my account