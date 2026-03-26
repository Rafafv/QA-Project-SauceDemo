const BasePage = require('../base/base.page');
const locators = require('../locators/checkout.locators');

class CheckoutPage extends BasePage {

  async preencherDados(firstName, lastName, postalCode) {
    await this.type(locators.firstName, firstName);
    await this.type(locators.lastName, lastName);
    await this.type(locators.postalCode, postalCode);
  }

  async continuar() {
    await this.click(locators.continueButton);
  }

  async finalizarCompra() {
    await this.click(locators.finishButton);
  }

  async obterMensagemSucesso() {
    const el = await this.find(locators.successMessage);
    return await el.getText();
  }

  async obterMensagemErro() {
    const el = await this.find(locators.errorMessage);
    return await el.getText();
  }
}

module.exports = CheckoutPage;