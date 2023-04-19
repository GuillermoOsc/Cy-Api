describe('Predictor de edad', () => {
    const originalUrl = 'https://api.agify.io?name=meelad'
    const endpoint = 'https://api.agify.io'
    
    it('Verificar los datos devueltos', () => {
        const parametro = 'name';
        const name = 'Pedro';
        cy.request(`${endpoint}?${parametro}=${name}`).then(response =>{
            const data = JSON.stringify(response.body)
            const age = JSON.stringify(response.body.age)
            const count = JSON.stringify(response.body.count)
            const name = JSON.stringify(response.body.name)
            cy.log(data)
            cy.wait(20000)
        })
    });
});