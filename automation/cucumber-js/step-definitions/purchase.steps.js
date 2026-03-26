const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../framework/pages/login.page');
const InventoryPage = require('../framework/pages/inventory.page');
const CartPage = require('../framework/pages/cart.page');
const CheckoutPage = require('../framework/pages/checkout.page');

let loginPage, inventoryPage, cartPage, checkoutPage;

Given('que o usuário está logado', async function () {  
  loginPage = new LoginPage(this.driver);
  inventoryPage = new InventoryPage(this.driver);
  cartPage = new CartPage(this.driver);
  checkoutPage = new CheckoutPage(this.driver);

  await loginPage.acessarPagina();
  await loginPage.fazerLogin('standard_user', 'secret_sauce');
});


//AÇÕES

When('adiciona um produto ao carrinho', async function () {
  await inventoryPage.adicionarPrimeiroProduto();
});

When('adiciona dois produtos ao carrinho', async function () {
  await inventoryPage.adicionarDoisProdutos();
});

When('acessa o carrinho', async function () {
  await inventoryPage.acessarCarrinho();
});

When('inicia o checkout', async function () {
  await cartPage.iniciarCheckout();
});

When('preenche os dados corretamente', async function () {
  await checkoutPage.preencherDados('Rafa', 'Viana', '12345');
  await checkoutPage.continuar();
});

When('preenche {string} {string} {string}', async function (nome, sobrenome, cep) {
  await checkoutPage.preencherDados(nome, sobrenome, cep);
});

When('tenta continuar', async function () {
  await checkoutPage.continuar();
});

When('finaliza a compra', async function () {
  await checkoutPage.finalizarCompra();
});

When('remove o produto', async function () {
  await cartPage.removerProduto();
});


//VALIDAÇÕES

Then('deve ver a confirmação de pedido', async function () {
  const mensagem = await checkoutPage.obterMensagemSucesso();

  if (!mensagem || !mensagem.toLowerCase().includes('thank you')) {
    throw new Error('Compra não finalizada com sucesso');
  }
});


Then('deve ver mensagem de erro {string}', async function (mensagemEsperada) {
  const mensagem = await checkoutPage.obterMensagemErro();

  if (!mensagem.includes(mensagemEsperada)) {
    throw new Error(`Erro esperado não exibido: ${mensagemEsperada}`);
  }
});

Then('o carrinho deve estar vazio', async function () {
  const vazio = await cartPage.carrinhoEstaVazio();

  if (!vazio) {
    throw new Error('Carrinho não está vazio');
  }
});

Then('deve ver {int} produtos no carrinho', async function (quantidade) {
  const total = await cartPage.contarProdutos();

  if (total !== quantidade) {
    throw new Error(`Esperado ${quantidade}, mas encontrou ${total}`);
  }
});

