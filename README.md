# 🧪 Suíte de Testes Automatizados - Módulo de Autenticação

Este repositório contém a automação de testes end-to-end (E2E) para a funcionalidade de **Login/Autenticação** do sistema **SauceDemo**.

---

## 🌐 Informações do Ambiente de Testes

* **Aplicação Alvo:** SauceDemo (Swag Labs)
* **URL do Ambiente:** [https://www.saucedemo.com/](https://www.saucedemo.com/)
* **Tipo de Aplicação:** Web App (E-commerce Fictício)
* **Massa de Dados de Teste:**
  * **Usuário Válido:** `standard_user`
  * **Senha Válida:** `secret_sauce`
  * **Usuário Inválido:** `t`
  * **Senha Inválida:** `teste` / `senha_errada_123`

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **Linguagem:** JavaScript (Node.js)
* **Framework de Testes:** Cypress (v13+)
* **IDE:** Visual Studio Code
* **Gestão de Testes & Bugs:** Jira + Zephyr Scale

---

## 📚 Dicionário de Comandos e Sintaxe do Cypress

Abaixo está o detalhamento de cada comando utilizado nos scripts de teste (`cypress/e2e/login.cy.js`):

| Comando / Bloco | Descrição e Finalidade |
| :--- | :--- |
| **`describe('Título', () => { ... })`** | Define uma **Suíte de Testes** (grupo de cenários relacionados a uma mesma funcionalidade). |
| **`beforeEach(() => { ... })`** | Hook que executa o código contido nele **antes de cada teste (`it`)** do arquivo. |
| **`it('Título', () => { ... })`** | Declara um **Caso de Teste individual** (ex: `CT001`, `CT002`). |
| **`cy.visit('URL')`** | Abre o navegador e navega até a URL especificada. |
| **`cy.get('seletor')`** | Localiza um elemento HTML na página usando seletores CSS ou atributos (ex: `#user-name`, `[data-test="error"]`). |
| **`.type('texto')`** | Simula a digitação de um texto no campo de entrada previamente selecionado com o `cy.get`. |
| **`.click()`** | Simula a ação de clique do mouse no elemento selecionado. |
| **`.should('condicao', 'valor')`** | Realiza uma **Asserção (Validação)**. Garante que o sistema atingiu o resultado esperado. |
| **`cy.url()`** | Captura a URL atual da navegação para validação. |
| **`include`** | Verificação de asserção: valida se o valor contém o trecho indicado (ex: `should('include', '/inventory.html')`). |
| **`be.visible`** | Verificação de asserção: confirma se um elemento está visível na tela para o usuário. |
| **`contain.text`** | Verificação de asserção: valida se o elemento contém o texto exato ou parcial esperado. |

---

## 📋 Cenários Cobertos

1. **`CT001 - Realizar login com sucesso (Fluxo Principal)`**
   * **Objetivo:** Garantir que um usuário com credenciais válidas consegue acessar a área restrita (`/inventory.html`).
2. **`CT002 - Validar mensagem de erro ao realizar login com senha incorreta (Fluxo de Exceção)`**
   * **Objetivo:** Garantir que o sistema bloqueia o acesso e exibe a mensagem *"Epic sadface: Username and password do not match any user in this service"*.
3. **`CT003 - Validar mensagem de erro ao realizar login com usuario incorreto (Fluxo de Exceção)`**
   * **Objetivo:** Garantir a segurança do sistema ao barrar usuários inexistentes ou formatados incorretamente e exibindo a mensagem *"Epic sadface: Username and password do not match any user in this service"*.
4. **`CT004 - Validar mensagem de erro ao realizar login com usuario e senha incorreto (Fluxo de Exceção)`**
   * **Objetivo:** Garantir que o sistema bloqueia o acesso e exibe a mensagem *"Epic sadface: Username and password do not match any user in this service"*.
4. **`CT005 - Validar mensagem de erro ao deixar usuario e senha vazio (Fluxo de Exceção)`**
   * **Objetivo:** Garantir a segurança do sistema ao barrar tentativa de login sem informação preenchida e exibindo a mensagem *"Epic sadface: Username is required"*.
---

## 🚀 Como Executar os Testes Localmente

### Pré-requisitos
* Node.js instalado (versão 18+)

### 1. Instalar dependências
```bash
npm install

// Instala o Cypress como dependência de desenvolvimento
npm install cypress --save-dev
// Cria a interface visual do Cypress pela primeira vez:
npx cypress open