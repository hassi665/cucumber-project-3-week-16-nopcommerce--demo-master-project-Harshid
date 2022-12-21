Feature: Login Test
  As user I want to login into nop commerce website

  @smoke @regression
  Scenario: User should navigate to login page successfully and get error message
    Given I am on homepage
    When  I click on login link
    And   I can see welcome message "Welcome, Please Sign In!"
    And   I enter email in email Id field
    And   I enter password in password field
    And   I click on login button
    Then  I can see error message

#  @sanity @regression
#  Scenario: User should login successfully with valid credentials
#    Given I am on homepage
#    When  I click on login link
#    And   I enter email "Harshid.Prime123@gmail.com"
#    And   I enter password "Harshid123"
#    And   I click on login button
#    Then  I should login successfully





