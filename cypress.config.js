const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'knumfv',
  e2e: {
    chromeWebSecurity: false,
    baseURL: "https://lv.sportsdirect.com/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
    },
  },
});
