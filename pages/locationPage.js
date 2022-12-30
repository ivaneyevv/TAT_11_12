const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");

class LocationPage extends BasePage {

    static CURRENT_LOCATION_XPATH = '/html/body/div[1]/header/div/div[1]/ul/li[2]/span';
    static INPUT_LOCATION_XPATH = '/html/body/div[1]/div/div[2]/div[1]/ymaps/ymaps/ymaps/ymaps[4]/ymaps[1]/ymaps[1]/ymaps/ymaps[1]/ymaps/ymaps/ymaps/ymaps/ymaps[1]/ymaps/ymaps[1]/ymaps[1]/input';
    static INPUT_LOCATION_ENTERING_XPATH = '/html/body/div[1]/div/div[2]/div[1]/ymaps/ymaps/ymaps/ymaps[4]/ymaps[1]/ymaps[1]/ymaps/ymaps[1]/ymaps/ymaps/ymaps/ymaps/ymaps[1]/ymaps/ymaps[1]/ymaps[1]/input';
    static SELECT_LOCATION_XPATH = '/html/body/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[1]/div/div[1]/span[1]';
    static SELECT_MAP_LOCATION_XPATH = '//*[@id="id_16723456370126709192740"]/ymaps/div/div[2]/button';


    async clickInputLocation() {
        logger.info("Check new current location");
        const element = await this.findByXpath(LocationPage.INPUT_LOCATION_XPATH);
        await element.click();
        return this;
    }

    async inputLocationValue(textToSeacrh) {
        logger.info("Enter text and click Enter");
        const element = await this.findByXpath(LocationPage.INPUT_LOCATION_ENTERING_XPATH);
        await element.sendKeys(textToSeacrh, Key.ENTER);
        return this;
    }

      async clickLocationAdress() {
        logger.info("Select new location adress");
        const element = await this.findByXpath(LocationPage.SELECT_LOCATION_XPATH);
        await element.click();
        return this;
    }

    async clickMapLocationAdress() {
        logger.info("Select new map location adress");
        const element = await this.findByXpath(LocationPage.SELECT_MAP_LOCATION_XPATH);
        await element.click();
        return this;
    }

    async checkNewcurrentLocation() {
        logger.info("Check new current location");
        const element = await this.findByXpath(LocationPage.NEW_CURRENT_LOCATION_XPATH);
        return element.getText();
    }


}


module.exports = LocationPage;