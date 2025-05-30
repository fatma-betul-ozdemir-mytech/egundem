const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://egundem.com';

test.describe('eGündem - Köşe Yazıları Sayfası Testleri', () => {

  // EGT-16: Köşe yazıları sayfası doğru şekilde yüklenmeli
  test('EGT-16 - Köşe yazıları sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/kose-yazilari/);
    await expect(page.locator('h1')).toContainText(/köşe yazıları/i);
  });

  // EGT-17: En az 1 köşe yazısı listelenmeli
  test('EGT-17 - Köşe yazıları listelenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`);
    const articles = page.locator('.article-card, article, .kose-yazi'); // HTML'e göre ayarla
    await expect(articles).toHaveCountGreaterThan(0);
  });

  // EGT-18: Yazılarda başlık ve özet bulunmalı
  test('EGT-18 - Yazı başlık ve özetleri görünmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`);
    const title = page.locator('.article-card h2, article h2');
    const excerpt = page.locator('.article-card p, article p');
    await expect(title.first()).not.toBeEmpty();
    await expect(excerpt.first()).not.toBeEmpty();
  });

  // EGT-19: Köşe yazısı detay sayfasına gidilebilmeli
  test('EGT-19 - Yazı detayına ulaşılmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`);
    const firstArticle = page.locator('a[href*="/kose-yazilari/"]').first();
    await firstArticle.click();
    await expect(page).toHaveURL(/\/kose-yazilari\//);
    await expect(page.locator('article')).toBeVisible();
  });

  // EGT-20: Sayfa hatalı veya boş içerik göstermemeli
  test('EGT-20 - Sayfa 404 veya boş içerik içermemeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`);
    const notFound = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyText).toBe(0);
  });

});
