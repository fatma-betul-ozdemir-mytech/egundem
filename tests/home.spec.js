const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://egundem.com/';

test.describe('eGündem Test Suite', () => {

  // Sayfa Yüklenme Testi
  test('Page should load successfully', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(BASE_URL);
  });

  // Başlık Kontrol Testi
  test('Page should have correct title', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
    const pageTitle = await page.title();
    console.log(`Page Title: ${pageTitle}`);
    expect(pageTitle).toMatch(/E-?Gündem/i); // toMatch string için doğru kullanım
  });

  // Form Gönderim Testi (Koşullu)
  test('Forms should submit correctly', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });

    const hasForm = (await page.locator('input[name="username"]').count()) > 0;
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
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'load' }); // load event'i bekleniyor
    const loadTime = Date.now() - start;

    const metrics = await page.evaluate(() => {
      const timing = performance.timing;
      return {
        domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
        load: timing.loadEventEnd - timing.navigationStart,
        firstByte: timing.responseStart - timing.navigationStart
      };
    });

    console.log(`Page Load Time: ${loadTime} ms`);
    console.log(`First Byte: ${metrics.firstByte} ms`);
    console.log(`DOM Content Loaded: ${metrics.domContentLoaded} ms`);
    console.log(`Full Load: ${metrics.load} ms`);

    expect(loadTime).toBeLessThan(30000);
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

  // Haber detay sayfasına tıklama testi
  test('Ana sayfadan bir habere tıklanınca detay sayfası açılır', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    const newsLinks = page.locator('a[href*="/haber/"]');
    await newsLinks.first().waitFor({ state: 'visible', timeout: 10000 });
    await newsLinks.first().click();

    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/haber\//);
  });

  // Arama kutusunda sonuç bulunuyor mu testi
  test('Arama kutusunda sonuç bulunuyor mu', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    const searchInput = page.locator('input[type="search"], input[name="q"], input[placeholder*="Ara"]');
    await expect(searchInput).toBeVisible();

    await searchInput.fill('haber');
    await searchInput.press('Enter');

    await page.waitForLoadState('networkidle');

    const results = await page.locator('article').count();
    expect(results).toBeGreaterThan(0);
  });

  // Footer içinde İletişim linki testi
  test('Footer içinde İletişim linki mevcut mu', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const contactLink = page.locator('footer a[href*="iletisim"], footer a:has-text("İletişim")');
    await expect(contactLink).toBeVisible({ timeout: 5000 });
  });

});
