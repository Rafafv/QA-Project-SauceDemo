const BasePage = require('../base/base.page');
const locators = require('../locators/cart.locators');

class CartPage extends BasePage {

  async iniciarCheckout() {
    await this.click(locators.checkoutButton);
  }

  async removerProduto() {
    await this.click(locators.removeSauceButton);
  }

  async carrinhoEstaVazio() {
    const items = await this.find(locators.cartItem);
    return items.length === 0;
  }

  async contarProdutos() {
    const items = await this.find(locators.cartItem);
    return parseInt(items.length);
  }
}

module.exports = CartPage;