const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.amazon.in/",
    userName: "//Add your username ",
    password: "//Add your password",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/tests/*.js",
    defaultCommandTimeout: 40000,
  },
  reporter: "mochawesome",
});
