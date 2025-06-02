import { test, expect } from '@playwright/test';

const BASE_URL = 'https://egundem.com';

test.describe('eGündem - Gündem Sayfası Testleri', () => {

  // EGT-21: Gündem sayfası doğru şekilde yüklenmeli
  test('EGT-21 - Gündem sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/gundem/);
    await expect(page.locator('h1, h2')).toContainText(/gündem/i);
  });

  // EGT-22: Gündem haberleri listelenmeli
  test('EGT-22 - Gündem haberleri listelenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`);
    const newsItems = page.locator('.news-card, article, .gundem-item'); // Sitedeki CSS'e göre ayarla
    await expect(newsItems).toHaveCountGreaterThan(0);
  });

  // EGT-23: Her haberde başlık ve tarih bulunmalı
  test('EGT-23 - Gündem haber başlık ve tarihi görünmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`);
    const title = page.locator('.news-card h2, article h2');
    const date = page.locator('.date, .news-date, time');
    await expect(title.first()).not.toBeEmpty();
    await expect(date.first()).not.toBeEmpty();
  });

  // EGT-24: Gündem haber detayına gidilebilmeli
  test('EGT-24 - Haberin detay sayfasına ulaşılmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`);
    const firstNews = page.locator('a[href*="/gundem/"]').first();
    await firstNews.click();
    await expect(page).toHaveURL(/\/gundem\//);
    await expect(page.locator('article')).toBeVisible();
  });

  // EGT-25: Sayfa 404 ya da içerik bulunamadı hatası vermemeli
  test('EGT-25 - Sayfa 404 veya boş içerik içermemeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`);
    const notFound = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyText).toBe(0);
  });

});
