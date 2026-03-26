const { setWorldConstructor } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

class CustomWorld {

  constructor() {
    this.driver = null; 
  }

  async abrirBrowser() {
    const options = new firefox.Options();
    // Adiciona o argumento headless
    options.addArguments('--headless'); 
    this.driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(options)
      .build();
  }

  async fecharBrowser() {
    if (this.driver) {
      await this.driver.quit();
      this.driver = null;
    }
  }
}

setWorldConstructor(CustomWorld);