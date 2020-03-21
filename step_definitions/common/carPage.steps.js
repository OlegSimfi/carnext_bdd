const { Given, When, Then } = require('cucumber');
const carPage = require('../../components/pageObjects/car.page');

Then('Assert Car searching', function() {
  carPage.assertCarSearching()
});

Then (/^Assert "([^"]*)" searching$/, car => carPage.assertCarSearching(car));

When('User select price', function() {
  carPage.selectPrice('50000', '75000');
});

Then (/^User select min price "([^"]*)"$/, minPrice => carPage.selectMinPrice(minPrice));

Then (/^User select max price "([^"]*)"$/, maxPrice => carPage.selectMaxPrice(maxPrice));

Then (/^User select "([^"]*)" transmission type$/, type => carPage.selectTypeOfTransmission(type));

Then (/^Assert cars "([^"]*)" transmission type$/, type => carPage.assertCarTransmission(type));

Then('Price array', function() {
  carPage.assertPriceRange()
});

