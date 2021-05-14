describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
    })
    it('finds the content "type"', () => {

      cy.contains('type')
    })
    it('Check the banner', () => {
      cy.get('.banner').should('have.length', 1)
      cy.get('.banner h1').contains('Kitchen Sink')
      cy.get('.banner').find('h1').contains('Kitchen Sink')
    })
    
  })