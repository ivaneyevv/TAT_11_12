const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const QnaPage = require('../pages/qnaPage');
const HomePage = require("../pages/homePage");
const { driver } = require('../driver/Driver');

describe('Search any answer on any question.', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('test.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })

    beforeEach(async function () {
        this.driver = await Driver.createDriver();
      });

    it('Should show valid entered product.', async function () {

        const homePage = new HomePage(this.driver);
        await homePage.openPage();
        await homePage.clickQnaButton();
        const qnaPage = new QnaPage(this.driver);
        //await qnaPage.clickQuestionForm();
        await qnaPage.inputQuestionForm(this.validQuestionValue);
        await qnaPage.clickAnswer();
        expect(await searchPage.checkAnswerOnQuestion()).to.be.contain(this.validAnswerResult);
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