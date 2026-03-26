const BasePage = require('../base/base.page');
const locators = require('../locators/cart.locators');

class CartPage extends BasePage {

  async iniciarCheckout() {
    await this.click(locators.checkoutButton);
  }

  async removerProduto() {
    await this.click(locators.cartButton);
  }

  async obterQuantidadeItens() {
    const items = await this.findAll(locators.cartItem);
    return items.length;
  }

  async carrinhoEstaVazio() {
    return (await this.obterQuantidadeItens()) === 0;
  }

  async contarProdutos() {
    const items = await this.findAll(locators.cartItem);          
    return items.length;
  }
}

module.exports = CartPage;