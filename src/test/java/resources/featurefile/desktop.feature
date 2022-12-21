Feature: Page Functionality
  As user I want to check all products page working as per requirement

  @smoke
  Scenario: User should add product into the cart
    Given I am on homepage
    When  I click on "Build your own computer" product
    And   I can see Product text "Build your own computer"
    And   I scroll down and choose processor
    And   I scroll down and choose of computer Ram
    And   I scroll down and choose of HDD
    And   I scroll down and select OS
    And   I scroll down and select software of computer
    Then  I click on add to cart option

  @smoke @regression
  Scenario: User can access computer page as per functionality
    Given  I am on homepage
    When   I get text computers
    Then   I select Notebooks as in submenu

  @sanity
  Scenario: User can access Desktop page as per functionality
    Given  I am on homepage
    When   I get text computers
    Then   I select Notebooks as in submenu

  @sanity @regression
  Scenario: User can check Desktops page functionality
    Given  I am on homepage
    When   I click on computer and desktops
    And    I would get text Desktops
    And    I sort product by Z to A
    And    I get display page size
    Then   I get product title list

