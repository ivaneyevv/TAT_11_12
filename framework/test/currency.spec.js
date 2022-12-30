const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const HomePage = require("../pages/homePage");
const CurrencyPage = require("../pages/currencyPage");
const { driver } = require('../driver/Driver');

describe('Search any product.', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('test.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })

    beforeEach(async function () {
        this.driver = await Driver.createDriver();
      });

    it('Should show changed currency.', async function () {

        const homePage = new HomePage(this.driver);
        await homePage.openPage();
        await homePage.moveCurrencyButton();
        await homePage.clickCurrencyButton();
        const currencyPage = new CurrencyPage(this.driver);
        expect(await currencyPage.checkNewcurrentCurrency()).to.be.contain(this.currentCurrency);
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