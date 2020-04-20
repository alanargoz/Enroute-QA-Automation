Feature: Automation Test on the Enroute System Contact page

    Background:
        Given I land on the "contact" page

    Scenario: I want to verify that the Enroute Systems contact page is loading correctly
    Scenario Outline: I want to verify the contact us form is working
        When I fill the "<name>", "<email>","<subject>" and "<message>" fields no problems are shown
        And I verify the send button is enabled

        Examples:
            | name          | email               | subject               | message                      |
            | Alan Arguello | alan.test@gmail.com | Automation Assignment | This is an automated message |