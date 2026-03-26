const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(30 * 1000); // 30 segundos

Before(async function () {
  await this.abrirBrowser();
});

After(async function () {
  await this.fecharBrowser();
});