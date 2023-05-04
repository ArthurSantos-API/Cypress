describe('CS Apps Regression Test', () => {
  it('Regression', () => {
    cy.visit('https://dev-csapps.dev-csoki.com/');
    cy.get("#Username").type(Cypress.env('username'),{log:false,});
    cy.get("#Password").type(Cypress.env('password'),{log:false,});
    cy.get('button.btn.btn-primary').click();
    cy.get('#market').select('North Texas (NT)');  //Market
    cy.get('#location').select('Nten-ennis');    
    cy.get('button.btn.btn-primary').click();    
    cy.origin('https://dev-csapps.dev-csoki.com/', () => { // Navigation DataScape
    //cy.location("href").should("eq", "https://dev-csapps.dev-csoki.com/home/");
     // cy.origin('https://dev-csapps.dev-csoki.com/home/');
      cy.get(".mat-button-wrapper").contains("Datascape").click();
      cy.get(".mat-button-wrapper").contains("Payments").click();
    });
  });
});

