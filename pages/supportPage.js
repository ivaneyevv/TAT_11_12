const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");

class SupportPage extends BasePage {

    static CHATTING_TEXTAREA_XPATH = '/html/body/div[4]/div/section/div[3]/form/div/div/textarea';
    static SENDED_MESSAGE_XPATH = '/html/body/div[4]/div/section/div[2]/div/div[2]/div/p';


    async clickChattingTextarea() {
        logger.info("Click on text area");
        const element = await this.findByXpath(SupportPage.CHATTING_TEXTAREA_XPATH);
        await element.click();
        return this;
      }
    
      async inputChattingValue(textToSeacrh) {
        logger.info("Enter text and click Enter");
        const element = await this.findByXpath(SupportPage.CHATTING_TEXTAREA_XPATH);
        await element.sendKeys(textToSeacrh, Key.ENTER);
        return this;
      }

      async checkNewcurrentMessage() {
        logger.info("Get info about sended message");
        const element = await this.findByXpath(SupportPage.SENDED_MESSAGE_XPATH);
        return element.getText();
    }

}


module.exports = SupportPage;