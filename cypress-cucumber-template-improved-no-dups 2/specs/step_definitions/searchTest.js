import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that i am on the home page', () => {
  cy.visit("/")
});

When('I click on the search inputbar and search for a {string}', (searchTerm) => {
  cy.get('div > input').click().type(searchTerm)
});

Then('I can see the search resolut {string}', (searchTerm) => {
  cy.get('.card').contains(searchTerm).should('be.visible')
});