describe('My First Test', () => {
  it('Does not do much!', () => {
   // expect(true).to.equal(true)
   cy.visit('https://qa-sso.csoki.com/Account/Login?ReturnUrl=%2F')
  })
})