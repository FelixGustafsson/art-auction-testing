import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let title 

  Then('I see all auctions', () => {
    cy.get('.gap-5 > :nth-child(1)').should('exist')
    
  });

  When('I click on the more info button on the first auction', () => { 
    cy.get(':nth-child(1) > .me-5 > .auctionTitle')
    .then(($title) => {
        title = $title.text()
    })
    cy.get(':nth-child(1) > .me-5 > .auctionTitle').then((text) => {
        cy.wrap(text).as('title')
    })
    cy.get(':nth-child(1) > .me-5 > .flex-column > .my-3 > .btn-dark').click()

  });

  Then('I see more info about the first auction', () => {
     cy.get('h2')
    .should(($auctionTitle) => {
        const text = $auctionTitle.text()
    
        expect(text).to.equal(title)
      })
  });


  Then('I click on Back', () => {
    cy.get('.btn-danger').click()
  });

  Then('I will be taken back to the home page', () => {
    cy.get('.gap-5 > :nth-child(1)').should('exist')
    
  });