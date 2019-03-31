/// <reference types="Cypress" />

describe('Display a list of 5 employees', () => {

  it('when user visits the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('section[name="header"]')
      .should('contain', 'Employee list')
    cy.get('section[name="main"]').within(() => {
      cy.get('li')
        .should('have.length', 5)
    })
  })
})