Feature: Homepage

  @home-page @search
  Scenario: Find car by model
    Given I navigate to "en-be/" page
    And Assert Main page is opened
    When User select a "bmw" car brand
    And User select a "5-serie" car model
    And User click the Search button
    Then Assert "BMW 5 Serie" searching
