const { Given, When, Then } = require('cucumber');
const carPage = require('../../components/pageObjects/car.page');

Then('Assert Car searching', function() {
  carPage.assertCarSearching()
});

Then (/^Assert "([^"]*)" searching$/, car => carPage.assertCarSearching(car));
