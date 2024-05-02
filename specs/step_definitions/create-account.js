import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the site', () => {
  cy.visit('/')
});

When('I click on the login button', () => {
  cy.get(':nth-child(2) > .btn').click()
});

When('I choose the register option', () => {
  cy.get('#register').click()
});

When('I enter a valid email address and password', () => {
  cy.get('#emailInput').type('eric@email.com')
  cy.get('#passwordInput').type('ha5gdiwd?hbxsq12sjcabx9')
  cy.get('.ms-2').click()
});

Then('my account is created', () => {

/*  Jag har försökt att få testet att funkar med en if/else men det verkar inte
går ihop med en assertion. Testet kommer att sluta i en error första gång den körs, 
men den lyckas om man kör den igen. Testet har då kollat både att det går att skapa 
ett nytt konto, samt att det inte går att skapa två konto med samma epostadress. */

if (cy.get('.alert').contains('already').should('be.visible')) {
  cy.get('.btn-secondary').click()
}
else if (cy.get('.modal-body > p').should('be.visible')) {
  cy.get('.modal-footer > .btn').click()
}
else {
  cy.get('.btn-secondary').click()
}
});

  
  


Then('I can log in to my account', () => {
  cy.get('#loginButton').contains('Login').should('be.visible')
  cy.get('#loginButton').click()
  cy.get('#emailInput').type('eric@email.com')
  cy.get('#passwordInput').type('ha5gdiwd?hbxsq12sjcabx9')
  cy.get('.ms-2').click()
  cy.get('.modal-body > p').contains('Login successful').should('be.visible')
  cy.get('.modal-footer > .btn').click()
  cy.get('#loginButton').contains('Profile').should('be.visible')
});