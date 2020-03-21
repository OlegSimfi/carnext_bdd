class carPage {
  get header() {return $('h1')};

  assertCarSearching(car) {
    this.header.waitForExist();
    const itemArray  = $$('[data-e2e-id="searchResultsCar"] h3[data-e2e-id="cardCarName"]');
    itemArray.forEach((element) => {
      const text = element.getText();
      console.log('DEBUG', text);
      expect(text).to.contain(car)
    });
  }

}

module.exports = new carPage;
