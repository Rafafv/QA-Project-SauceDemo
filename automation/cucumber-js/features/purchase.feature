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


  Scenario: Checkout com carrinho vazio deve exibir erro ao tentar continuar
    When acessa o carrinho
    And inicia o checkout
    And tenta continuar
    Then deve ver mensagem de erro "First Name is required"

  @validation
  Scenario Outline: Validação de campos obrigatórios no checkout
    When adiciona um produto ao carrinho
    And acessa o carrinho
    And inicia o checkout
    And preenche "<nome>" "<sobrenome>" "<cep>"
    And tenta continuar
    Then deve ver mensagem de erro "<mensagem>"

    Examples:
      | nome | sobrenome | cep   | mensagem                  |
      |      | Viana     | 12345 | First Name is required    |
      | Rafa |           | 12345 | Last Name is required     |
      | Rafa | Viana     |       | Postal Code is required   |
     

  Scenario: Remover produto do carrinho
    When adiciona um produto ao carrinho
    And acessa o carrinho
    And remove o produto
    Then o carrinho deve estar vazio


  Scenario: Adicionar múltiplos produtos ao carrinho
    When adiciona dois produtos ao carrinho
    And acessa o carrinho
    Then deve ver 2 produtos no carrinho
