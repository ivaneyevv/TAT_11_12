const { Select } = require('selenium-webdriver')
const BasePage = require("./basePage");
const logger = require("../logger");


class BagPage extends BasePage {
    static EMPTY_BAG_RESULT_XPATH =  '//*[@id="app"]/div[2]/div/div[1]/div[1]/h1';
    static BAG_WITH_ITEM_XPATH =  '//*[@id="basketForm"]/div[1]/div[1]/div[1]/h1';
    static DELETE_ITEM_BUTTON = '//*[@id="basketForm"]/div[1]/div[1]/div[2]/div/div/div/div/div/div/div[2]/div[2]/button[2]/span';
    static BAG_AFTER_DELETION_XPATH = '//*[@id="basketForm"]/div[1]/div[1]/div[1]/h1';
    
    async checkEmptybagMessage() {
      logger.info("Get result of empty bag.");
      const element = await this.findByXpath(BagPage.EMPTY_BAG_RESULT_XPATH);
    return element.getText();
    }

    async checkBagwithitemMessage() {
      logger.info("Get result of bag with item.");
      const element = await this.findByXpath(BagPage.BAG_WITH_ITEM_XPATH);
    return element.getText();
    }

    async clickDeleteitemButton() {
      logger.info("Get result of bag after deletion.");
      const element = await this.findByXpath(BagPage.DELETE_ITEM_BUTTON);
    return element.getText();
    }

    async checkAfterdeletionMessage() {
      logger.info("Get result of bag after deletion.");
      const element = await this.findByXpath(BagPage.BAG_AFTER_DELETION_XPATH);
    return element.getText();
    }
  }

    module.exports = BagPage;