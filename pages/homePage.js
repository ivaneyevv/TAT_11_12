const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class HomePage extends BasePage {
  static PAGE_URL = 'https://www.wildberries.by/';
  
  static BAG_BUTTON_XPATH = '//*[@id="basketContent"]/div[3]/a/span';
  
  static INPUT_FORM_XPATH = '//*[@id="searchInput"]';
  static INPUT_SEARCH_VALUE_TEXT_XPATH = '//*[@id="searchInput"]';

  static CURRENT_CURRENCY_XPATH = '/html/body/div[1]/header/div/div[1]/ul/li[1]/span';
  static NEW_CURRENCY_XPATH = '/html/body/div[1]/header/div/div[1]/ul/li[1]/div/div/div/div/form/fieldset/label[2]/span/span[2]';
  
  static ITEM_BUTTON_XPATH = '/html/body/div[1]/main/div[2]/div/div[2]/div/div[3]/div[1]/ul/li[1]/a/div[1]/button';
  static ADD_ITEM_TO_BAG_XPATH = '/html/body/div[1]/div/div/div[2]/div[2]/div[5]/div/button[2]/span[1]';
  static CLOSE_ITEM_BUTTON_XPATH = '/html/body/div[1]/a';
  static CHOOSE_SIZE_BUTTON = '/html/body/div[1]/div/div/div[2]/div[2]/div[4]/ul/li[1]/label';

  static CURRENT_LOCATION_XPATH = '/html/body/div[1]/header/div/div[1]/ul/li[2]/span';

  static CHATTING_BUTTON_XPATH = '/html/body/div[4]/button';
  static CHATTING_TEXTAREA_XPATH = '/html/body/div[4]/div/section/div[3]/form/div/div/textarea';

  //static BURGER_XPATH = '/html/body/div[1]/header/div/div[2]/div[1]/button';
  //static BEAUTY_XPATH = '/html/body/div[2]/div/div[2]/ul/li[7]/a';
  //static ACCESSORIES_XPATH = '';

  static QUESTIONS_AND_ANSWERS_XPATH = '/html/body/div[1]/footer/div/div[1]/div[1]/div[1]/ul/li[8]/a';


  openPage = async () => super.openPage(HomePage.PAGE_URL);

  async clickBagButton() {
    logger.info("Click on the bag button");
    const element = await this.findByXpath(HomePage.BAG_BUTTON_XPATH);
    await element.click();
    return this;
  }

  async moveCurrencyButton() {
    logger.info("Move on the currency button");
    const element = await this.findByXpath(HomePage.CURRENT_CURRENCY_XPATH);
    await element.click();
    return this;
  }

  async clickCurrencyButton() {
    logger.info("Click on the new currency button");
    const element = await this.findByXpath(HomePage.NEW_CURRENCY_XPATH);
    await element.click();
    return this;
  }


  async clickAddItemButton() {
    logger.info("Click on the add item to bag button");
    const element = await this.findByXpath(HomePage.ADD_ITEM_TO_BAG_XPATH);
    await element.click();
    return this;
  }

  async clickItemButton() {
    logger.info("Click on the item button");
    const element = await this.findByXpath(HomePage.ITEM_BUTTON_XPATH);
    await element.click();
    return this;
  }

  async clickCloseItemButton() {
    logger.info("Click on the close item button");
    const element = await this.findByXpath(HomePage.CLOSE_ITEM_BUTTON_XPATH);
    await element.click();
    return this;
  }

  async clickSizeButton() {
    logger.info("Click on the item size button");
    const element = await this.findByXpath(HomePage.CHOOSE_SIZE_BUTTON);
    await element.click();
    return this;
  }

  async inputSearchValue(textToSeacrh) {
    logger.info("Enter text and click Enter");
    const element = await this.findByXpath(HomePage.INPUT_SEARCH_VALUE_TEXT_XPATH);
    await element.sendKeys(textToSeacrh, Key.ENTER);
    return this;
  }

  async clickInputformButton() {
    logger.info("Click on the input form button");
    const element = await this.findByXpath(HomePage.INPUT_FORM_XPATH);
    await element.click();
    return this;
  }

  async clickLocationButton() {
    logger.info("Click on the location button");
    const element = await this.findByXpath(HomePage.CURRENT_LOCATION_XPATH);
    await element.click();
    return this;
  }

  async clickChattingButton() {
    logger.info("Click on the chatting button");
    const element = await this.findByXpath(HomePage.CHATTING_BUTTON_XPATH);
    await element.click();
    return this;
  }

  async clickQnaButton() {
    logger.info("Click on the questions&answers button");
    const element = await this.findByXpath(HomePage.QUESTIONS_AND_ANSWERS_XPATH);
    await element.click();
    return this;
  }
}

module.exports = HomePage;