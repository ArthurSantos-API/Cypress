/// <reference types="cypress" />

describe("Recording 3/17/2023 at 7:03:37 PM", () => {
  beforeEach(function() {
    cy.fixture('\login').then(function (login) {
        this.login = login;
     
      });
  });
  
  it("tests Recording 3/17/2023 at 7:03:37 PM", () => {
      cy.viewport(1386, 969);
    
      cy.visit("https://dev-sso.csoki.com/Account/Login?ReturnUrl=%2Foauth%2Fauthorize%3Fclient_id%3Dcsapps%26scope%3Didentity%2520roles%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fdev-csapps.dev-csoki.com%252Fsignin%26state%3DCfDJ8AyI5rv6nARHuTbFPUJoitYvoG4nWxaYssthvYlwI-Npy20c6G62bxpZoGVbqHrG3mjBYxRu76dvNWWWfFJW0mHCxF2TrpC-WUGhuhCbKCo3NYVYIdUY2ECIK1yyWZjd81tnOwsj4PvBBAjH4f0M3ba_CzNgo81XkG1bwDxSjTx7Xeh4GJngduPEqwWu7riuUe8uQZRW__j5qsD_7gG6KDg");
    
      cy.get("#Username").click();
    
      //cy.get("#Username").type(this.login.myusername);
      cy.get("#Username").type('arthur.santos@dev-cellularsales.com');
    
      cy.get("#Password").click();
    
      //cy.get("#Password").type(this.login.mypassword);
      cy.get("#Password").type('PACcamstar123!123!');
    
      cy.get("body > div > div > div > form > div:nth-child(7) > div > div > div > button").click();
      cy.location("href").should("eq", "https://dev-sso.csoki.com/Account/SelectMarket?ReturnUrl=%2Foauth%2Fauthorize%3Fclient_id%3Dcsapps%26scope%3Didentity%2520roles%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fdev-csapps.dev-csoki.com%252Fsignin%26state%3DCfDJ8AyI5rv6nARHuTbFPUJoitYvoG4nWxaYssthvYlwI-Npy20c6G62bxpZoGVbqHrG3mjBYxRu76dvNWWWfFJW0mHCxF2TrpC-WUGhuhCbKCo3NYVYIdUY2ECIK1yyWZjd81tnOwsj4PvBBAjH4f0M3ba_CzNgo81XkG1bwDxSjTx7Xeh4GJngduPEqwWu7riuUe8uQZRW__j5qsD_7gG6KDg");
    
      //cy.get("#market").click();
    
      cy.get("#market").select("CT");
    
      //cy.get("#location").click();
    
      cy.get("#location").select("4801");
    
      cy.get("#submit").click();
      cy.location("href").should("eq", "https://dev-csapps.dev-csoki.com/");
      cy.timeout(40000);
    
      cy.get("#main > cs-home > cs-app-store > section > cs-button-list > section > section > button:nth-child(1)").click();
    
      cy.get("#main > cs-commissions > section > cs-button-list > section > section > button:nth-child(1)").click();
    
      cy.get("#main > cs-payments > section > cs-button-list > section > section > button:nth-child(1)").click();
    
      cy.get("body > cs-root > cs-main-layout > section > cs-page-heading > mat-card > div > div.title > cs-breadcrumb > breadcrumb > div > div.breadcrumb.ng-star-inserted > a").click();
    
      cy.get("#main > cs-home > cs-app-store > section > cs-button-list > section > section > button:nth-child(2) > span.mat-button-wrapper").click();
    
      cy.get("#main > cs-datascape > section > cs-button-list > section > section > button:nth-child(1)").click();
    
      cy.get("body > cs-root > cs-main-layout > section > cs-page-heading > mat-card > div > div.title > cs-breadcrumb > breadcrumb > div > div.breadcrumb.ng-star-inserted > a").click();
    
      cy.get("#main > cs-home > cs-app-store > section > cs-button-list > section > section > button:nth-child(3) > span.mat-button-wrapper").click();
    
      cy.get("body > cs-root > cs-main-layout > section > cs-page-heading > mat-card > div > div.title > cs-breadcrumb > breadcrumb > div > div > a").click();
    
      cy.get("#main > cs-home > cs-app-store > section > cs-button-list > section > section > button:nth-child(4)").click();
    
      cy.get("body > cs-root > cs-main-layout > section > cs-page-heading > mat-card > div > div.title > cs-breadcrumb > breadcrumb > div > div > a").click();
    
      cy.get("#main > cs-home > cs-app-store > section > cs-button-list > section > section > button:nth-child(5) > span.mat-button-wrapper").click();
    
      cy.get("body > cs-root > cs-main-layout > section > cs-page-heading > mat-card > div > div.title > cs-breadcrumb > breadcrumb > div > div > a").click();
    
      cy.get("body > cs-root > cs-main-layout > section > header > app-nav-menu > header > mat-toolbar > mat-toolbar-row > div.cs-toolbar-user.ng-star-inserted > div > span.user-name").click();
    
      cy.get("#mat-menu-panel-0 > div > button:nth-child(9)").click();
      cy.location("href").should("eq", "https://dev-csapps.dev-csoki.com/Logout/LogoutCallback?application=home");
    
      });
    });
    