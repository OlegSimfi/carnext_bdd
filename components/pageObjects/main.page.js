class MainPage {
  get header() {return $('h1')};
  get brandDropdown() {return $('[data-e2e-id="brandDropdown"]')};
  get modelDropdown() {return $('[data-e2e-id="modelDropdown"]')};
  get searchButton() {return $('[data-e2e-id="searchButton"]')};


  assertMainPageIsOpened() {
    this.header.waitForExist();
    this.brandDropdown.waitForExist();
    this.modelDropdown.waitForExist();
    this.searchButton.waitForExist();
  }

  selectCarBrand(carBrand) {
    this.brandDropdown.click();
    browser.pause(1000); // Required to do item wait
    const carMod = $(`[value=${carBrand}] + div`);
    carMod.click();
  }

  selectCarModel(carModel) {
    this.modelDropdown.click();
    browser.pause(1000);
    const carBrand = $(`[value="${carModel}"] + div`);
    carBrand.click();
  }

  clickSearchButton() {
    this.searchButton.click()
  }

}

module.exports = new MainPage;
