# 🧠 Regras de Negócio – SauceDemo QA Project

## 📌 Objetivo

Este documento descreve as principais regras de negócio identificadas no sistema SauceDemo, servindo como base para a criação de cenários de teste e automação.

---

## 🔐 1. Autenticação

* O usuário deve estar autenticado para acessar a área de produtos
* Usuários com credenciais inválidas não devem conseguir acessar o sistema
* Campos de login (usuário e senha) são obrigatórios
* O sistema deve exibir mensagem de erro para tentativas inválidas de login

---

## 🛍️ 2. Produtos

* A listagem de produtos deve ser exibida apenas para usuários logados
* Todos os produtos devem conter nome, preço e botão de ação
* A ordenação de produtos deve respeitar o critério selecionado (preço, nome)

---

## 🛒 3. Carrinho

* O usuário pode adicionar produtos ao carrinho
* O carrinho deve refletir corretamente a quantidade de itens adicionados
* O usuário pode remover produtos do carrinho
* Os itens devem permanecer no carrinho durante a navegação
* O carrinho deve ser mantido enquanto a sessão estiver ativa

---

## 💳 4. Checkout

* O usuário deve ter ao menos um item no carrinho para iniciar o checkout
* Os campos obrigatórios são:

  * Nome
  * Sobrenome
  * CEP
* O sistema deve impedir o avanço com campos obrigatórios vazios
* Os dados inseridos devem ser utilizados para prosseguir com a compra

---

## ✅ 5. Finalização de Compra

* O pedido só pode ser finalizado após o preenchimento correto dos dados
* O sistema deve exibir uma confirmação de sucesso após a compra

---

## ⚠️ 6. Regras Gerais

* O sistema não deve permitir ações fora da ordem lógica (ex: checkout sem login)
* O estado da aplicação deve ser consistente durante toda a navegação
* Mensagens de erro devem ser claras e visíveis para o usuário

