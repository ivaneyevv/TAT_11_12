const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");

class CurrencyPage extends BasePage {

    static NEW_CURRENT_CURRENCY_XPATH = '/html/body/div[1]/header/div/div[1]/ul/li[1]/span/span[2]';

    async checkNewcurrentCurrency() {
        logger.info("Check new current currency");
        const element = await this.findByXpath(CurrencyPage.NEW_CURRENT_CURRENCY_XPATH);
        return element.getText();
    }

}


module.exports = CurrencyPage;