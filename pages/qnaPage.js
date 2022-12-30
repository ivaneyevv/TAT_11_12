const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");

class QnaPage extends BasePage {

    static NEW_CURRENT_CURRENCY_XPATH = '/html/body/div[1]/header/div/div[1]/ul/li[1]/span/span[2]';
    static QUESTION_FORM_XPATH = '/html/body/div/div/div[2]/div[1]/div[1]/div';
    static INPUT_QUESTION_FORM_XPATH = '/html/body/div/div/div[2]/div[1]/div[1]/div/input[1]';
    static ANSWER_XPATH = '/html/body/div/div/div[2]/div[1]/div[2]/div/ul/li/span';
    static FULL_ANSWER_XPATH = '/html/body/div/div/div[2]/div[2]/div/div[9]/h2';


    async clickQuestionForm() {
        logger.info("Click on the question form");
        const element = await this.findByXpath(QnaPage.QUESTION_FORM_XPATH);
        await element.click();
        return this;
    }

    async inputQuestionForm(textToSeacrh) {
        logger.info("Enter question text and press enter key");
        const element = await this.findByXpath(QnaPage.INPUT_QUESTION_FORM_XPATH);
        await element.sendKeys(textToSeacrh, Key.ENTER);
        return this;
    }

    async clickAnswer() {
        logger.info("Click on the answer for question");
        const element = await this.findByXpath(QnaPage.ANSWER_XPATH);
        await element.click();
        return this;
    }

    async checkAnswerOnQuestion() {
        logger.info("Check answers on question");
        const element = await this.findByXpath(QnaPage.FULL_ANSWER_XPATH);
        return element.getText();
    }

}


module.exports = QnaPage;