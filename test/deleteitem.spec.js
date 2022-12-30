const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const BagPage = require("../pages/bagPage")
const HomePage = require("../pages/homePage");

describe('Show bag after deletion.', () => {
  before(async function () {
    const props = await DataReaderService.getTestData('test.properties');
    for (const key in props) {
      this[key] = props[key];
    }
  })

  beforeEach(async function () {
    this.driver = await Driver.createDriver();
  });

  it('Should show message about bag is empty.', async function () {

    const homePage = new HomePage(this.driver);
    await homePage.openPage();
    await homePage.clickItemButton();
    await homePage.clickSizeButton();
    await homePage.clickAddItemButton();
    await homePage.clickCloseItemButton();
    await homePage.clickBagButton();
    const bagPage = new BagPage(this.driver);
    await bagPage.clickDeleteitemButton();
    expect(await bagPage.checkAfterdeletionMessage()).to.contain(this.afterdeletionValue);                   
  }).timeout(Constants.TEST_TIMEOUT);

  afterEach(async function () {
    await new Promise((resolve) => {
      setTimeout(async () => {
        resolve();
      }, 100);
    })
    await this.driver.quit();
  })
});