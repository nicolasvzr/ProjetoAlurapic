
describe('login e senha do usuário', () => {

    beforeEach(()   => {
        cy.visit('http://alura-fotos.herokuapp.com/')
    })

    it.only('Verifica campo do nome e senha', () => {
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type(123, {log: false});
        cy.contains('button', 'login').click();

    })
})