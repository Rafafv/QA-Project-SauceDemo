# 🧪 Test Plan – SauceDemo QA Project

## 📌 1. Objetivo

Este documento tem como objetivo definir a estratégia de testes para o site SauceDemo, garantindo a qualidade das principais funcionalidades do sistema, com foco no fluxo de compra de produtos.

---

## 📌 2. Escopo

### ✅ Funcionalidades em escopo:

* Login de usuário
* Listagem de produtos
* Adição e remoção de produtos no carrinho
* Visualização do carrinho
* Processo de checkout
* Finalização de compra

### ❌ Fora de escopo:

* Integrações externas
* Testes de segurança avançados
* Testes de carga em larga escala

---

## 📌 3. Tipos de Teste

### 🔹 Testes Funcionais

Verificar se todas as funcionalidades estão operando conforme esperado.

### 🔹 Testes de Regressão

Garantir que novas alterações não impactaram funcionalidades já existentes.

### 🔹 Testes de Usabilidade

Avaliar a experiência do usuário, navegação e clareza das interfaces.

### 🔹 Testes Exploratórios

Explorar o sistema de forma não estruturada para identificar falhas inesperadas.

### 🔹 Testes Não Funcionais (básico)

* Tempo de resposta
* Comportamento visual

---

## 📌 4. Estratégia de Teste

Os testes serão realizados em duas etapas:

### 1. Testes Manuais

* Criação de cenários em BDD (Gherkin)
* Execução manual dos fluxos principais
* Registro de bugs

### 2. Testes Automatizados

* Automação com Selenium
* Estrutura com Page Object Model (POM)
* Execução via CI/CD (GitHub Actions)

---

## 📌 5. Ambiente de Teste

* Navegador: Google Chrome
* Sistema Operacional: Windows
* Ferramentas:

  * Selenium
  * Python
  * Pytest
  * GitHub Actions

---

## 📌 6. Critérios de Entrada

Os testes serão iniciados quando:

* O sistema estiver disponível
* O ambiente de testes estiver configurado

---

## 📌 7. Critérios de Saída

Os testes serão finalizados quando:

* Todos os cenários forem executados
* Bugs críticos forem resolvidos
* Taxa de sucesso mínima de 90% nos testes

---

## 📌 8. Regras de Negócio

* O usuário deve estar logado para acessar produtos
* O carrinho deve manter os itens durante a sessão
* O checkout exige preenchimento obrigatório de dados
* A compra só é finalizada após confirmação

---

## 📌 9. Riscos

* Instabilidade do ambiente de testes
* Mudanças no sistema sem aviso
* Dependência de dados fixos para testes

---

## 📌 10. Entregáveis

* Test Plan
* Cenários de teste (BDD)
* Relatórios de bugs
* Testes automatizados
* Pipeline CI/CD configurado

---

## 📌 11. Considerações Finais

Este projeto tem como objetivo demonstrar habilidades completas em QA, incluindo testes manuais, automação e integração contínua, seguindo boas práticas de mercado.
