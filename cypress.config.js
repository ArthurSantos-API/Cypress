const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    experimentalSkipDomainInjection: ['*.dev-csoki.com'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
    env: {
      username: "arthur.santos@dev-cellularsales.com",
      password: "**********************",
    },
});
