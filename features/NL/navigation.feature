Feature: Homepage

#  @home-page @search
#  Scenario: Find car by model
#    Given I navigate to "en-be/" page
#    And Assert Main page is opened
#    When User select a "bmw" car brand
#    And User select a "5-serie" car model
#    And User click the Search button
#    Then Assert "BMW 5 Serie" searching

  @car-page @search
  Scenario: Search by Price and Transmission
    Given I navigate to "en-be/cars/" page
    When User select min price "40000"
    And User select max price "75000"
    And User select "automatic" transmission type
    Then Assert cars "Automatic" transmission type
    And Price array
    And DEBUG
