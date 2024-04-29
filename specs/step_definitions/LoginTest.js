import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That I am on the homepage', () => {
  cy.visit("http://localhost:3000")
  cy.get('.gap-5 > :nth-child(1)').should('exist')
});

When('I click on the login button', () => {
  cy.get(':nth-child(2) > .btn').click()
});

When('I fill in {string} in the email input', (a) => {
  cy.get('#emailInput').type(a)
});

When('I fill in {string} in the password input', (a) => {
  cy.get('#passwordInput').type(a)
});

Then('I click on login', () => {
  cy.get('#loginModalButton').click()
  cy.get('.modal-footer > .btn').click()
});
Then('I click on the profile button', () => {
  cy.get(':nth-child(2) > .btn').click()
});

Then('I see my bids on the profile page', () => {
  cy.get('.row.my-4 > :nth-child(1)').should('exist')
});

Then('I click the logout button', () => {
  cy.get('#logoutBtn').click()
});

Then('I will be taken back to the homepage', () => {
  cy.get('.gap-5 > :nth-child(1)').should('exist')
});

Then('I click the login button', () => {
  cy.get(':nth-child(2) > .btn').click()
});

Then('I see the login modal', () => {
  cy.get('#emailInput').should('exist')
});