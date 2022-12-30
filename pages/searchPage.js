const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");

class SearchPage extends BasePage {

    static VALID_SEARCH_VALUE_RESULT_XPATH = '//*[@id="catalog"]/div[1]/div/div[1]/div/h1';
    static INVALID_SEARCH_VALUE_RESULT_XPATH = '//*[@id="catalog"]/div[2]/div/p';
    static CHECKBOX_FILTER_XPATH = '/html/body/div[1]/main/div[2]/div/div[2]/div/div[1]/div/div[2]/div/div[1]/div[2]/fieldset/label[1]';
    static NUM_OF_ITEMS_XPATH = '/html/body/div[1]/main/div[2]/div/div[2]/div/div[1]/div/div[1]/div/span';
    
    static DATE_SORTING_XPATH = '/html/body/div[1]/main/div[2]/div/div[2]/div/div[1]/div/div[2]/div/div[2]/div[2]/fieldset/label[1]/span';
    static ERROR_VALUE_XPATH = '/html/body/div[1]/div';
    static CLOSE_ERROR_VALUE_XPATH = '/html/body/div[1]/button';

    async getValidResults(){
        logger.info("Get info about result");
        const element = await this.findByXpath(SearchPage.VALID_SEARCH_VALUE_RESULT_XPATH);
        return element.getText();
    }

    async getInvalidResult() {
        logger.info("Get info about result");
        const element = await this.findByXpath(SearchPage.INVALID_SEARCH_VALUE_RESULT_XPATH);
        return element.getText();
    }

    async clickCheckboxFilter() {
        logger.info("Click on checkbox");
        const element = await this.findByXpath(SearchPage.CHECKBOX_FILTER_XPATH);
        await element.click();
        return this;
      }

      async getNumOfItems() {
        logger.info("Get info about result");
        const element = await this.findByXpath(SearchPage.NUM_OF_ITEMS_XPATH);
        return element.getText();
    }

    async clickChooseFilter() {
        logger.info("Click on filter");
        const element = await this.findByXpath(SearchPage.DATE_SORTING_XPATH);
        await element.click();
        return this;
    }

    async getErrorMessage() {
        logger.info("Get error info");
        const element = await this.findByXpath(SearchPage.ERROR_VALUE_XPATH);
        return element.getText();
    }

    async clickCloseError() {
        logger.info("Click on close error button");
        const element = await this.findByXpath(SearchPage.CLOSE_ERROR_VALUE_XPATH);
        await element.click();
        return this;
    }

}


module.exports = SearchPage;