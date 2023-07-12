/* eslint-disable */

describe('My Storefront App', () => {
  it('adds and deletes items to the card', () => {

    cy.visit('http://localhost:5173/storefront/');

    cy.contains('Cart (0)').should('be.visible');

    cy.contains('ELECTRONIC').click();

    cy.get('[data-testid="stockDivTest"]').should('be.visible');

    cy.get('[data-testid="stockDivTest"]').first().invoke('text').as('startValue');




    cy.get('@startValue').then((startValue) => {
      const startValueInt = parseInt(startValue, 10);
      cy.contains('ADD TO CART').click();
      cy.wait(500); // Wait for 2 seconds

      cy.contains('ADD TO CART').click();
      cy.wait(500); // Wait for 2 seconds

      cy.get('[data-testid="stockDivTest"]').first().invoke('text').then((updatedValue) => {
        const updatedValueInt = parseInt(updatedValue, 10);
        expect(updatedValueInt).to.eq(startValueInt - 2);
      });
    });


    cy.get('@startValue').then((startValue) => {
      const startValueInt = parseInt(startValue, 10);
      cy.contains('Cart (2)').should('be.visible')
      cy.get('[data-testid="DeleteIcon"]').first().click()
      cy.wait(500); // Wait for 2 seconds

      cy.contains('Cart (1)').should('be.visible')
      cy.get('[data-testid="DeleteIcon"]').click()
      cy.wait(500); // Wait for 2 seconds

      cy.get('[data-testid="stockDivTest"]').first().invoke('text').then((updatedValue) => {
        const updatedValueInt = parseInt(updatedValue, 10);
        expect(updatedValueInt).to.eq(startValueInt + 2);
      });
    });

    cy.contains('Cart (0)').should('be.visible')

  })

  it('loads the card page correctly', () => {

    cy.visit('http://localhost:5173/storefront/')

    cy.contains('Cart (0)').should('be.visible')
    cy.contains('FOOD').click()

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

    cy.contains('Cart (10)').click()

    cy.get('tr').should('have.length', 12)

  })

})

