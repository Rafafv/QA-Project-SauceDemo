const BasePage = require('../base/base.page');
const locators = require('../locators/login.locators');

class LoginPage extends BasePage {

    constructor(driver) {
      super(driver);
    }

    async acessarPagina() {
      await this.driver.get('https://www.saucedemo.com/');
    }

    async fazerLogin(username, password) {
      await this.type(locators.usernameInput, username);
      await this.type(locators.passwordInput, password);
      await this.click(locators.loginButton);
    }

    async obterURLAtual() {
      return await this.driver.getCurrentUrl();
    }

    async obterMensagemErro() {
      const element = await this.find({ id: 'error-message' });
      return await element.getText();
    }

}

module.exports = LoginPage;