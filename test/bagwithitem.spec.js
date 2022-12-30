const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const BagPage = require("../pages/bagPage")
const HomePage = require("../pages/homePage");

describe('Show bag with item.', () => {
  before(async function () {
    const props = await DataReaderService.getTestData('test.properties');
    for (const key in props) {
      this[key] = props[key];
    }
  })

  beforeEach(async function () {
    this.driver = await Driver.createDriver();
  });

  it('Should show message about bag with item.', async function () {

    const homePage = new HomePage(this.driver);
    await homePage.openPage();
    await homePage.clickItemButton();
    //if (this.findByXpath(HomePage.CHOOSE_SIZE_BUTTON) == '/html/body/div[1]/div/div/div[2]/div[2]/div[4]/ul/li[1]/label') {
    //    await homePage.clickSizeButton();
    //    await homePage.clickAddItemButton();
    //} else {
    //    await homePage.clickAddItemButton();
    //}
    await homePage.clickSizeButton();
    await homePage.clickAddItemButton();
    await homePage.clickCloseItemButton();
    await homePage.clickBagButton();
    const bagPage = new BagPage(this.driver);
    expect(await bagPage.checkBagwithitemMessage()).to.contain(this.bagwithitemValue);                   
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