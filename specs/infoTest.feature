Feature: Login

    Scenario: More information about a bid
        Given That I am on the homepage
        Then I see all auctions
        When I click on the more info button on the first auction
        Then I see more info about the first auction
        Then I click on Back
        Then I will be taken back to the home page
        