const { setWorldConstructor } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

class CustomWorld {

  constructor() {
    this.driver = null; 
  }

  async abrirBrowser() {
    const options = new firefox.Options();    
    options.addArguments('--headless');

    this.driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(options)
      .build();
  }

  async fecharBrowser() {
    if (this.driver) {
       await this.driver.quit();  
    }
  }
}

setWorldConstructor(CustomWorld);