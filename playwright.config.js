// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    baseURL: 'https://egundem.com',
  },
  reporter: [
    ['json', { outputFile: 'playwright-report/results.json' }],
  ],
});
