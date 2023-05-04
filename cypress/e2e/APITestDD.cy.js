///reference types="cypress" />
describe('API Test Data Driven', () => {

    before(function() {
        cy.fixture('url').then(data => {
            this.data = data;
        })
    });
    it('Launch URL Healthz', () => {
        cy.visit(this.data.url1)
    })
});