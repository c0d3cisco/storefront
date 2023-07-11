/* eslint-disable */

describe('My Storefront App', () => {
  it('adds and deletes items to the card', () => {

    cy.visit('http://localhost:5173/storefront/')

    cy.contains('Cart (0)').should('be.visible')
    cy.contains('ELECTRONIC').click()

    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()

    cy.contains('Cart (2)').should('be.visible')
    cy.get('[data-testid="DeleteIcon"]').first().click()

    cy.contains('Cart (1)').should('be.visible')
    cy.get('[data-testid="DeleteIcon"]').click()

    cy.contains('Cart (0)').should('be.visible')

  })

  it('runs out of stock', () => {

    cy.visit('http://localhost:5173/storefront/')

    cy.contains('Cart (0)').should('be.visible')
    cy.contains('TOYS').click()

    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()
    cy.contains('ADD TO CART').click()

    cy.contains('Cart (10)').should('be.visible')
    cy.get('[data-testid="stockDivTest"]').should('have.string', 'Out of Stock')

    // cy.get('[data-testid="DeleteIcon"]').first().click()

    // cy.contains('Cart (1)').should('be.visible')
    // cy.get('[data-testid="DeleteIcon"]').click()
    
    // cy.contains('Cart (0)').should('be.visible')

  })

})

