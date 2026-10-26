/**
 * @fileoverview Testes E2E do Módulo de Autenticação
 * @site https://www.saucedemo.com/
 * @author Amilton Melo
 * @description Cobertura do fluxo principal e fluxos de exceção de login no SauceDemo.
*/

describe('Módulo: Autenticação - SauceDemo', () => {
  // Acede a página inicial antes do teste
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('CT001 - Realizar login com sucesso (Fluxo Principal)', ()=>{
    // Preenche o utilizador e a palavra-passe corretas
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Clica no botão de login
    cy.get('#login-button').click();

    // Validação (Asserção): Verifica se redirecionou para a página de produtos
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('CT002 - Validar mensagem de erro ao realizar login com senha incorreta (Fluxo de Exceção)', ()=>{
    // Preenche o utilizador com uma palavra-passe incorreta
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('teste');

    // Clica no botão de login
    cy.get('#login-button').click();

    // Validação (Asserção): Verifica se a mensagem de erro esperada é exibida na tela
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('CT003 - Validar mensagem de erro ao realizar login com usuario incorreto (Fluxo de Exceção)', ()=> {
    // Preenche o utilizador com usuario invalido
    cy.get('#user-name').type('t');
    cy.get('#password').type('secret_sauce');

    // Clique no botão
    cy.get('#login-button').click();

    // Validação (Asserção): Verifica se a mensagem de erro esperada é exibida na tela
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('CT004 - Validar mensagem de erro ao realizar login com usuario e senha incorreto (Fluxo de Exceção)', ()=> {
    // Preenche o utilizador com usuario invalido
    cy.get('#user-name').type('t');
    cy.get('#password').type('a');

    // Clique no botão
    cy.get('#login-button').click();

    // Validação (Asserção): Verifica se a mensagem de erro esperada é exibida na tela
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('CT005 - Validar mensagem de erro ao deixar usuario e senha vazio (Fluxo de Exceção)', ()=> {
    // Clique no botão
    cy.get('#login-button').click();

    // Validação (Asserção): Verifica se a mensagem de erro esperada é exibida na tela
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username is required');
  });
});