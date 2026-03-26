const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../framework/pages/login.page');

let loginPage;

Given('que o usuário acessa a página de login', async function () { 
  loginPage = new LoginPage(this.driver);
  await loginPage.acessarPagina();
});

When('ele faz login com {string} e {string}', async function (username, password) {
  await loginPage.fazerLogin(username, password);  

});

Then('deve ver {string}', async function (resultado) {
  if (resultado === 'sucesso') {
    const url = await loginPage.obterURLAtual();

    if (!url.includes('inventory')) {
      throw new Error('Login deveria ter sucesso');
    }

  } else if (resultado === 'erro') {
    const mensagem = await loginPage.obterMensagemErro();

    if (!mensagem) {
      throw new Error('Erro esperado não exibido');
    }

  } else if (resultado === 'erro_campos') {
    const mensagem = await loginPage.obterMensagemErro();

    if (!mensagem.toLowerCase().includes('required')) {
      throw new Error('Erro de campos obrigatórios não exibido');
    }
  }
});

