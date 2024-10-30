const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pexinxa-database.web.app/",
    specPattern: "e2e/**/*.cy.{js,jsx,ts,tsx}",
    fixturesFolder: "fixtures",
    supportFile:false
  },
});
