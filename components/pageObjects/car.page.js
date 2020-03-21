class carPage {
  get header() {return $('h1')};
  get priceInputs() {return $$('[data-e2e-id="FilterSet_salePrice"] select[data-e2e-select-input]')};
  get manualTransmission() {return $('[value="manual"] + div')}
  get automaticTransmission() {return $('[value="automatic"] + div')}
  get carBuyPrice() {return $$('[data-e2e-id="carBuyPrice"]')}

  assertCarSearching(car) {
    this.header.waitForExist();
    const itemArray  = $$('[data-e2e-id="searchResultsCar"] h3[data-e2e-id="cardCarName"]');
    itemArray.forEach((element) => {
      const text = element.getText();
      expect(text).to.contain(car)
    });
  }

  selectMinPrice(minPrice) {
    const minInput = this.priceInputs[0];
    minInput.selectByAttribute('value', minPrice);
  }

  selectMaxPrice(maxPrice) {
    const maxInput = this.priceInputs[1];
    maxInput.selectByAttribute('value', maxPrice);
  }

  selectTypeOfTransmission(type) {
    switch (type) {
      case 'manual':
        this.manualTransmission.click();
        break;
      case 'automatic':
        this.automaticTransmission.click();
        break;
    }
  }

  assertCarTransmission(type) {
    this.header.waitForExist();
    const itemArray  = $$('[data-e2e-id="searchResultsCar"]');
    itemArray.forEach((element) => {
      const text = element.getText();
      expect(text).to.contain(type)
    });
  }

  assertPriceRange() {
    const itemArray = $$('[data-e2e-id="searchResultsCar"] [data-e2e-id="carBuyPrice"]');
    itemArray.forEach((element) => {
      const text = element.getText();
      const priceArray = parseInt(text.substring(1, text.length - 2).replace(/\./g, ""));
    });
  }
}


module.exports = new carPage;
