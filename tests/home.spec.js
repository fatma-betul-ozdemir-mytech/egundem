import { test, expect } from '@playwright/test';

const BASE_URL = 'https://egundem.com/';

test.describe('eGündem Test Suite', () => {

  // EGT-1: Ana sayfa başarılı şekilde yüklenmeli
  test('EGT-1 - Page should load successfully', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(BASE_URL);
  });

  // EGT-2: Sayfa başlığı doğru şekilde görünmeli
  test('EGT-2 - Page should have correct title', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/gündem/i);
  });

  // EGT-3: Formlar doğru şekilde gönderilmeli
  test('EGT-3 - Forms should submit correctly', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });

    const formExists = await page.locator('input[name="username"]').count() > 0;

    if (formExists) {
      await page.fill('input[name="username"]', 'testuser');
      await page.fill('input[name="password"]', 'password');
      await page.click('button[type="submit"]');
      await expect(page.locator('.success-message')).toBeVisible({ timeout: 20000 });
    } else {
      console.warn('Form not found on the page. Skipping test.');
    }
  });

  // EGT-4: Performans testi – Sayfa yüklenme süresi kabul edilebilir olmalı
  test('EGT-4 - Page load time breakdown', async ({ page }) => {
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

    expect(loadTime).toBeLessThan(30000);
  });

  // EGT-5: Sayfa console hatası içermemeli
  test('EGT-5 - Should not have console errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err));

    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });

    if (errors.length > 0) {
      console.error('Console Errors:', errors);
    }

    expect(errors.length).toBe(0);
  });

});
