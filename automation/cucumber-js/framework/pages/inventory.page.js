const BasePage = require('../base/base.page');
const locators = require('../locators/inventory.locators');

class InventoryPage extends BasePage {

  async adicionarPrimeiroProduto() {
    await this.click(locators.firstProductAddButton);
  }

  async acessarCarrinho() {
    await this.click(locators.cartIcon);
  }

  async adicionarDoisProdutos() {
    await this.click(locators.firstProductAddButton);
    await this.click(locators.secondProductAddButton);
  }
  

}

module.exports = InventoryPage;