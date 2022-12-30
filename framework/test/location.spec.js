const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const HomePage = require("../pages/homePage");
const LocationPage = require("../pages/locationPage");
const { driver } = require('../driver/Driver');

describe('Change location.', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('test.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })

    beforeEach(async function () {
        this.driver = await Driver.createDriver();
      });

    it('Should show changed location.', async function () {

        const homePage = new HomePage(this.driver);  
        await homePage.openPage();
        await homePage.clickLocationButton();
        const locationPage = new LocationPage(this.driver); 
        //await locationPage.clickInputLocation(); 
        //await locationPage.inputLocationValue(validLocationValue)
        await locationPage.clickLocationAdress();
        await locationPage.clickMapLocationAdress();
        expect(await locationPage.checkNewcurrentLocation()).to.be.contain(validLocationResult);
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