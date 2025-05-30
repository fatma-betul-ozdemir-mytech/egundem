// playwright.config.js

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Tüm test dosyaların bu klasörde
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://egundem.com',
  },
  reporter: [['json', { outputFile: 'playwright-report/results.json' }]], // JSON çıktısı üret
});
