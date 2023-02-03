describe('acessar o login e senha do usuário', () => {

    beforeEach(()   => {
        cy.visit('http://alura-fotos.herokuapp.com/') 
    })

    it('verifica mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Fernanda');
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
    })

    it('Verifica mensagem campo nome completo', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('Fernanda');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','User name is required!').should('be.visible');
    })

    it('verfica mensagem senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');
    })

    it('verfica mensagens erro de caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('M');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Mininum length is 2','Must be lower case').should('be.visible');
    })
}) 