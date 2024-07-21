// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.get('#nav-tools a[data-nav-role="signin"]')
    .should("be.visible")
    .invoke("mouseover");

  cy.get('#nav-signin-tooltip a[data-nav-role="signin"]')
    .should("be.visible")
    .click();
  cy.get('input[name="email"]')
    .should("be.visible")
    .type(Cypress.env("userName"));

  cy.get('#continue input[type="submit"]').should("be.visible").click();
  cy.get('input[name="password"]')
    .should("be.visible")
    .type(Cypress.env("password"));
  cy.get('#signInSubmit[type="submit"]').should("be.visible").click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
