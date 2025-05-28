const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://egundem.com/';

test.describe('eGündem Test Suite', () => {

  // Sayfa Yüklenme Testi
  test('Page should load successfully', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(BASE_URL);
  });

  // Başlık Kontrol Testi (Playwright bekleme mekanizması ile)
  test('Page should have correct title', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/gündem/i);
  });

  // Form Gönderim Testi (Koşullu)
  test('Forms should submit correctly', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });

    const count = await page.locator('input[name="username"]').count();
    const hasForm = count > 0;

    if (hasForm) {
      await page.fill('input[name="username"]', 'testuser');
      await page.fill('input[name="password"]', 'password');
      await page.click('button[type="submit"]');

      await expect(page.locator('.success-message')).toBeVisible({ timeout: 20000 });
    } else {
      console.warn('Form not found on the page. Skipping test.');
    }
  });

  // Performans Testi
  test('Page load time breakdown', async ({ page }) => {
    const start = Date.now();
    await page.goto(BASE_URL, { timeout: 60000 });
    const loadTime = Date.now() - start;

    const metrics = await page.evaluate(() => ({
      domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
      load: performance.timing.loadEventEnd - performance.timing.navigationStart,
      firstByte: performance.timing.responseStart - performance.timing.navigationStart
    }));

    console.log(`Page Load Time: ${loadTime} ms`);
    console.log(`First Byte: ${metrics.firstByte} ms`);
    console.log(`DOM Content Loaded: ${metrics.domContentLoaded} ms`);
    console.log(`Full Load: ${metrics.load} ms`);

    expect(loadTime).toBeLessThan(30000); // Sayfa 30 saniyeden kısa sürede yüklensin
  });

  // Konsol Hatası Testi
  test('Should not have console errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err));
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });

    if (errors.length > 0) {
      console.error('Console Errors:', errors);
    }

    expect(errors.length).toBe(0);
  });

});