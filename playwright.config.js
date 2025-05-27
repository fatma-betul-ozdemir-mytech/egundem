// playwright.config.js
module.exports = {
  use: { headless: true },
  reporter: [
    ['list'], 
    ['json', { outputFile: 'playwright-report/results.json' }]
  ]
};
