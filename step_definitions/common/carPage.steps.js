const { Given, When, Then } = require('cucumber');
const carPage = require('../../components/pageObjects/car.page');

Then('Assert Car searching', function() {
  carPage.assertCarSearching()
});

Then (/^Assert "([^"]*)" searching$/, car => carPage.assertCarSearching(car));

When (/^User select min price "([^"]*)"$/, minPrice => carPage.selectMinPrice(minPrice));

When (/^User select max price "([^"]*)"$/, maxPrice => carPage.selectMaxPrice(maxPrice));

When (/^User select "([^"]*)" transmission type$/, type => carPage.selectTypeOfTransmission(type));

Then (/^Assert cars "([^"]*)" transmission type$/, type => carPage.assertCarTransmission(type));

Then (/^Assert min - "([^"]*)" max - "([^"]*)" price type$/, function(min, max) {
 carPage.assertPriceRange(min, max)
});

