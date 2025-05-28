// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',  // Test dosyalarının olduğu klasör
  timeout: 30000,
  use: {
    headless: true,
  },
};

module.exports = config;
