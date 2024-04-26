import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the site', () => {
  cy.visit('/')
});

When('I click on the login button', () => {
  cy.get('.navbar > :nth-child(2) > .d-flex > :nth-child(2) > .btn').click()
});

When('I choose the register option', () => {
  cy.get('#register').click()
});

When('I enter a valid email address and password', () => {
  cy.get('.mb-2').type('eric@eric')
  cy.get('[type="password"]').type('ericeric')
  cy.get('.ms-2').click()
});

Then('my account is created', () => {
  if (cy.get('.alert').contains('already').should('be.visible')) {
    cy.get('.btn-secondary').click()
  }
  else if (cy.get('.modal-body > p').should('be.visible')) {
    cy.get('.modal-footer > .btn').click()
  }
});

Then('I can log in to my account', () => {
  // TODO: implement step
});