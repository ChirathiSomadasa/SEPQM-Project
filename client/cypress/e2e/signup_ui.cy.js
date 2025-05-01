describe('Signup Page UI Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/register');
    });
  
    it('Should display the signup form correctly', () => {
      cy.get('h2').should('contain', 'Signup');
      cy.get('input[placeholder="Name"]').should('exist');
      cy.get('input[placeholder="Email"]').should('exist');
      cy.get('input[placeholder="Password"]').should('exist');
      cy.get('button').should('contain', 'Register');
    });
  });
  