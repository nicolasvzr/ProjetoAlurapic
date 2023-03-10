describe('Usuário não cadastrado no sistema' , () => {


        it('validação de dados de usuário inexistente no sistema ', () => {
            cy.request({
                method: 'POST',
                url:  'https://apialurapic.herokuapp.com/user/login',
                body: Cypress.env()
            }).then((res) => {
                expect(res.status).to.be.equal(401)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('message')
                expect(res.body.message).to.be.equal('Authentication failed for user nico')
            }
    
            )
        })

        it('fazer login do flavio ', () => {
            cy.request({
                method: 'POST',
                url:'https://apialurapic.herokuapp.com/user/login',
                body: Cypress.env()
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('id')
                expect(res.body.id).to.be.equal(1)
                expect(res.body).to.have.property('email')
                expect(res.body.email).to.be.equal("flavio@alurapic.com.br")
    
        })
        })

    
    
  
})