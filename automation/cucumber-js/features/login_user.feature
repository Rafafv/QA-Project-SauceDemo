@login
Feature: Login User
  
  Scenario Outline: Tentativas de login
    Given que o usuário acessa a página de login
    When ele faz login com "<usuario>" e "<senha>" 
    Then deve ver "<resultado>"

  Examples: 
    | usuario        | senha        | resultado
    | standard_user  | secret_sauce | sucesso
    | standard_user  | secret_wrong | erro
    |                |              | erro_campos