const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const HomePage = require("../pages/homePage");
const SupportPage = require("../pages/supportPage");
const { driver } = require('../driver/Driver');

describe('Test chatting.', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('test.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })

    beforeEach(async function () {
        this.driver = await Driver.createDriver();
      });

    it('Should show sended message.', async function () {

        const homePage = new HomePage(this.driver);  
        await homePage.openPage();
        await homePage.clickChattingButton();
        const supportPage = new SupportPage(this.driver); 
        await supportPage.clickChattingTextarea();
        await supportPage.inputChattingValue(this.chattingValue);
        expect(await supportPage.checkNewcurrentMessage()).to.be.contain(chattingResult);
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