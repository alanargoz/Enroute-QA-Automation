Feature: Automation Test on the Enroute System main page

    Background:
        Given I land on the "main" page

    Scenario: I want to verify that the Enroute Systems main page is loading correctly
        When The page loads I check the title, which should be "Enroute"

    Scenario Outline: I want to verify the "What we Offer" section content is displayed
        When I scroll to "What we offer" section
        Then If tab "<Tab>" has a heading and a description "<boolean>" is returned

        Examples:
            | Tab                     | boolean |
            | QA & Testing            | True    |
            | Software Development    | True    |
            | Inventory Management    | True    |
            | Data Management         | True    |
            | Application Maintenance | True    |
