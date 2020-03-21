const { Given, When, Then } = require('cucumber'),
  navigationHelper = require('../../utils/helpers/navigationHelper');

Given(/^I navigate to "([^"]*)" page$/, url => navigationHelper.open(url));

When('DEBUG', function() {
  browser.debug();
});
