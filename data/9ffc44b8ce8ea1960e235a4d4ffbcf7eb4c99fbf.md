# Test info

- Name: eGündem Test Suite >> EGT-5 - Should not have console errors
- Location: /home/runner/work/egundem/egundem/tests/home.spec.js:56:3

# Error details

```
Error: browserType.launch: Executable doesn't exist at /home/runner/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | const BASE_URL = 'https://egundem.com/';
   4 |
   5 | test.describe('eGündem Test Suite', () => {
   6 |
   7 |   // EGT-1: Ana sayfa başarılı şekilde yüklenmeli
   8 |   test('EGT-1 - Page should load successfully', async ({ page }) => {
   9 |     await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
  10 |     await expect(page).toHaveURL(BASE_URL);
  11 |   });
  12 |
  13 |   // EGT-2: Sayfa başlığı doğru şekilde görünmeli
  14 |   test('EGT-2 - Page should have correct title', async ({ page }) => {
  15 |     await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
  16 |     await expect(page).toHaveTitle(/gündem/i);
  17 |   });
  18 |
  19 |   // EGT-3: Formlar doğru şekilde gönderilmeli
  20 |   test('EGT-3 - Forms should submit correctly', async ({ page }) => {
  21 |     await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
  22 |
  23 |     const formExists = await page.locator('input[name="username"]').count() > 0;
  24 |
  25 |     if (formExists) {
  26 |       await page.fill('input[name="username"]', 'testuser');
  27 |       await page.fill('input[name="password"]', 'password');
  28 |       await page.click('button[type="submit"]');
  29 |       await expect(page.locator('.success-message')).toBeVisible({ timeout: 20000 });
  30 |     } else {
  31 |       console.warn('Form not found on the page. Skipping test.');
  32 |     }
  33 |   });
  34 |
  35 |   // EGT-4: Performans testi – Sayfa yüklenme süresi kabul edilebilir olmalı
  36 |   test('EGT-4 - Page load time breakdown', async ({ page }) => {
  37 |     const start = Date.now();
  38 |     await page.goto(BASE_URL, { timeout: 60000 });
  39 |     const loadTime = Date.now() - start;
  40 |
  41 |     const metrics = await page.evaluate(() => ({
  42 |       domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
  43 |       load: performance.timing.loadEventEnd - performance.timing.navigationStart,
  44 |       firstByte: performance.timing.responseStart - performance.timing.navigationStart
  45 |     }));
  46 |
  47 |     console.log(`Page Load Time: ${loadTime} ms`);
  48 |     console.log(`First Byte: ${metrics.firstByte} ms`);
  49 |     console.log(`DOM Content Loaded: ${metrics.domContentLoaded} ms`);
  50 |     console.log(`Full Load: ${metrics.load} ms`);
  51 |
  52 |     expect(loadTime).toBeLessThan(30000);
  53 |   });
  54 |
  55 |   // EGT-5: Sayfa console hatası içermemeli
> 56 |   test('EGT-5 - Should not have console errors', async ({ page }) => {
     |   ^ Error: browserType.launch: Executable doesn't exist at /home/runner/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
  57 |     const errors = [];
  58 |     page.on('pageerror', (err) => errors.push(err));
  59 |
  60 |     await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
  61 |
  62 |     if (errors.length > 0) {
  63 |       console.error('Console Errors:', errors);
  64 |     }
  65 |
  66 |     expect(errors.length).toBe(0);
  67 |   });
  68 |
  69 | });
  70 |
```