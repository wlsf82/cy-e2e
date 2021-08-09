it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.login(
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD'),
    { cacheSession: false }
  )
  cy.visit('/')

  cy.wait('@getNotes')
  cy.contains('h1', 'Your Notes').should('be.visible')
})
