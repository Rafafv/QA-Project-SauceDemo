@purchase
Feature: Purchase

  Como um usuário autenticado
  Eu quero comprar produtos
  Para receber meu pedido com sucesso

  Background:
    Given que o usuário está logado


  Scenario: Compra realizada com sucesso
    When adiciona um produto ao carrinho
    And acessa o carrinho
    And inicia o checkout
    And preenche os dados corretamente
    And finaliza a compra
    Then deve ver a confirmação de pedido


  Scenario: Não deve permitir checkout com carrinho vazio
    When acessa o carrinho
    And inicia o checkout
    Then deve ver uma mensagem de carrinho vazio


  Scenario Outline: Validação de campos obrigatórios no checkout
    When adiciona um produto ao carrinho
    And acessa o carrinho
    And inicia o checkout
    And preenche "<nome>" "<sobrenome>" "<cep>"
    And tenta continuar
    Then deve ver mensagem de erro "<mensagem>"

    Examples:
      | nome | sobrenome | cep   | mensagem                  |
      |      | Silva     | 12345 | First Name is required    |
      | Rafa |           | 12345 | Last Name is required     |
      | Rafa | Silva     |       | Postal Code is required   |


  Scenario: Remover produto do carrinho
    When adiciona um produto ao carrinho
    And acessa o carrinho
    And remove o produto
    Then o carrinho deve estar vazio


  Scenario: Adicionar múltiplos produtos ao carrinho
    When adiciona dois produtos ao carrinho
    And acessa o carrinho
    Then deve ver 2 produtos no carrinho


  Scenario: Não deve finalizar compra sem etapa de confirmação
    When adiciona um produto ao carrinho
    And acessa o carrinho
    And inicia o checkout
    And tenta finalizar sem continuar
    Then não deve permitir finalizar a compra