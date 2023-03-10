
describe('login e senha do usuário', () => {

    beforeEach(()   => {
        cy.visit('/')

        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })

    
    it('Usuario valido realizando logout', () => {
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.wait(400)
        cy.contains('a', '(Logout)').should('be.visible');

    })
})