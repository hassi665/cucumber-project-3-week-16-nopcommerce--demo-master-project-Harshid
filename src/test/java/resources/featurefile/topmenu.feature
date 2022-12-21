Feature: TopMenu Test
  As user I want to login into nop commerce website

  @sanity @regression
  Scenario: User can check all links
    Given I am on homepage
    When  I click on login link
    And   I check login link display display or not
    And   I click on Register link
    And   I click on MyAccount link
    And   I click on Logout link
    Then  I check logout link is display or not


