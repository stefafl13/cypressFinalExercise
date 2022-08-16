Feature: example

    As an user I'm gonna check if the carousel works

    Background: visit the main page
        Given I visit the home page

    Scenario: verify items number
        Then I verify if the items number of the carousel is equal to 3
        
    Scenario: check left arrow's functionality
        #When I select a carousel's item
        When I click in the left arrow
        Then I verify left arrow's functionality
    
    Scenario: check right arrow's functionality
        #When I get the items number in the carousel 
        When I click in the right arrow
        Then I verify right arrow's functionality
    
    Scenario: verify indicator's functionality
        When I select a carousel's item
        Then I check if the corresponding item is active