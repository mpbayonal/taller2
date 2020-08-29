context('Login Tests', () => {

    it('makes a login attemp', () => {
        cy.visit('https://habitica.com/static/home')
        cy.get('.login-button').click();

        cy.get('#usernameInput').type('PaolaBay').should('have.value', 'PaolaBay');
        cy.get('#passwordInput').type('Paola197728');
        cy.get('.btn-info[type="submit"]').click()
        cy.contains(".character-name").should('be.visible')
    })
});
