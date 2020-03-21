const { Given, When, Then } = require('cucumber')
const mainPage = require('../../components/pageObjects/main.page');

Then('Assert Main page is opened', function() {
  mainPage.assertMainPageIsOpened()
});

Then('User select a car', function() {
  mainPage.selectCarBrand("bmw");
  browser.debug();
});

When (/^User select a "([^"]*)" car brand$/, carBrand => mainPage.selectCarBrand(carBrand));

When (/^User select a "([^"]*)" car model$/, carModel => mainPage.selectCarModel(carModel));

When('User click the Search button', function() {
  mainPage.clickSearchButton()
});

