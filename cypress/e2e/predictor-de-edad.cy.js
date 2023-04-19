describe('Predictor de edad', () => {
    const originalUrl = 'https://api.agify.io?name=meelad'
    const endpoint = 'https://api.agify.io'
    
    it('Verificar los datos devueltos', () => {
        const parametro = 'name';
        const personName = 'Pedro';
        cy.request(`${endpoint}?${parametro}=${personName}`).then(response =>{
            const data = JSON.stringify(response.body)
            const age = Number(JSON.stringify(response.body.age))
            const count = Number(JSON.stringify(response.body.count))
            const name = String(JSON.stringify(response.body.name)).replace(/['"]+/g, '')

            cy.log('Verificar propiedad "age"')
            expect(age).to.be.a('number')
            expect(age).to.not.be.null
          
            cy.log('Verificar propiedad "count"')
            expect(count).to.be.a('number')
            expect(count).to.not.be.null

            cy.log('Verificar propiedad "name"')
            expect(name).to.be.a('string')
            expect(name).to.equal(personName)
            
            cy.wait(30000) 
        })
    });
});