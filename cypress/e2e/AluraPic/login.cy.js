describe('login e senha do usuário', () => {

    beforeEach(()   => {
        cy.visit('/')
    })

    it('Validação de usuario valido', () => {
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type(123, {log: false});
        cy.contains('button', 'login').click();

    })
})