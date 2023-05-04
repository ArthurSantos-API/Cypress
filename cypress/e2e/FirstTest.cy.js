describe('CS Apps Regression Test', () => {
  it('Regression', () => {
    //login
    cy.clearAllCookies();
    cy.visit('https://dev-csapps.dev-csoki.com/');
    cy.get("#Username").should('be.visible').should('be.enabled').clear().type("arthur.santos@dev-cellularsales.com");
    cy.get("#Password").should('be.visible').should('be.enabled').clear().type("PACcamstar123!123!");
    cy.get('button.btn.btn-primary').as("loginBtn");
    cy.get('@loginBtn').should('be.visible').should('be.enabled');
    cy.get('@loginBtn').click();
    //Market
    cy.get('#market').select('North Texas (NT)').should('be.visible').should('be.enabled');  
    cy.get('#location').select('Nten-ennis').should('be.visible').should('be.enabled');    
    cy.get('button.btn.btn-primary').as("mktBtn");
    cy.get('@mktBtn').should('be.visible').should('be.enabled');
    cy.get('@mktBtn').click();    
   // Navigation DataScape
    cy.origin('https://dev-csapps.dev-csoki.com/', (origin) => {
      cy.get(".mat-button-wrapper").contains("Datascape").as("datascapeBtn");
      cy.get("@datascapeBtn").should('be.visible');                         //verify button are visible and assign to alias
      cy.get(".mat-button-wrapper").contains("Payments").as("paymentsBtn");
      cy.get("@paymentsBtn").should('be.visible');
      //cy.get(".mat-column-invoiceNumber > a", options = { timeout: 40000 }).contains("KXCS000254").click();
      cy.get("@datascapeBtn").click();
    });
  });
});

