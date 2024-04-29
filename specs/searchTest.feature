Feature: Search

    Scenario: See the image on the first page
        Given that i am on the home page
        When I click on the search inputbar and search for a "<searchTerm>"
        Then I can see the search resolut "<searchTerm>"

        Examples: 
        | searchTerm |
        | banana     |
        | rhino      |
        | Colors     |
        | perfect    |