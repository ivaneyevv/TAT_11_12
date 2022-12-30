const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");

class SearchPage extends BasePage {

    static VALID_SEARCH_VALUE_RESULT_XPATH = '//*[@id="catalog"]/div[1]/div/div[1]/div/h1';
    static INVALID_SEARCH_VALUE_RESULT_XPATH = '//*[@id="catalog"]/div[2]/div/p';

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

}


module.exports = SearchPage;