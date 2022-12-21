Feature: Register

  @sanity
  Scenario: User should create account successfully
    Given I am on homepage
    When  I click on register link
    And   I enters following users details
    And   I click on Register button
    And   I can see registration successful message
    Then  I can click on continue to back to the homepage