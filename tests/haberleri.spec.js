import { test, expect } from '@playwright/test';

const BASE_URL = 'https://egundem.com';

test.describe('eGündem - Haberler Sayfası Testleri', () => {

  // EGT-31: Haberler sayfası doğru şekilde yüklenmeli
  test('EGT-31 - Haberler sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/haberler/);
    await expect(page.locator('h1, h2')).toContainText(/haberler/i);
  });

  // EGT-32: Haber kartları listelenmeli
  test('EGT-32 - Haber kartları listelenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`);
    const cards = page.locator('.news-card, article, .haber-item'); // CSS class'ı sitede neyse ona göre düzelt
    await expect(cards).toHaveCountGreaterThan(0);
  });

  // EGT-33: Her haberde resim, başlık ve özet olmalı
  test('EGT-33 - Haberlerde resim, başlık, özet olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`);
    const image = page.locator('.news-card img');
    const title = page.locator('.news-card h2');
    const summary = page.locator('.news-card .summary, p');
    await expect(image.first()).toBeVisible();
    await expect(title.first()).not.toBeEmpty();
    await expect(summary.first()).not.toBeEmpty();
  });

  // EGT-34: Haber detayına tıklanarak geçiş yapılabilmeli
  test('EGT-34 - Haber detayına gidilebilmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`);
    const firstLink = page.locator('a[href*="/haber/"]').first();
    await firstLink.click();
    await expect(page).toHaveURL(/\/haber\//);
    await expect(page.locator('article')).toBeVisible();
  });

  // EGT-35: Sayfada 404 veya içerik bulunamadı mesajı olmamalı
  test('EGT-35 - Sayfa 404 ya da boş içerik göstermemeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`);
    const notFound = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyText).toBe(0);
  });

});
