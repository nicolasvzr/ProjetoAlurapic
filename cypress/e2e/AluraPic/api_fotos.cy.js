describe('Buscar fotos e dados' , () => {

    it('buscar fotos do flavio', () => {

        const tempoEsperado = Math.random() * 2000;  //flaky tests

        cy.request({
            method: 'GET',
            url:  'https://apialurapic.herokuapp.com/flavio/photos?page=1'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
            expect(res.duration).to.be.lte(tempoEsperado)
        }

        )
    })
})