const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const BagPage = require("../pages/bagPage")
const HomePage = require("../pages/homePage");

describe('Show empty shopping bag.', () => {
  before(async function () {
    const props = await DataReaderService.getTestData('test.properties');
    for (const key in props) {
      this[key] = props[key];
    }
  })

  beforeEach(async function () {
    this.driver = await Driver.createDriver();
  });

  it('Should show message about empty bag.', async function () {

    const homePage = new HomePage(this.driver);
    await homePage.openPage();
    await homePage.clickBagButton();
    const bagPage = new BagPage(this.driver);
    expect(await bagPage.checkEmptybagMessage()).to.contain(this.emptybagValue);                   
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