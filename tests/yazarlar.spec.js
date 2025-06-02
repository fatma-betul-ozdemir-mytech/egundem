import { test, expect } from '@playwright/test';

const BASE_URL = 'https://egundem.com';

test.describe('eGündem - Yazarlar Sayfası Testleri', () => {

  // EGT-11: Yazarlar sayfası başarılı şekilde yüklenmeli
  test('EGT-11 - Yazarlar sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/yazarlar/);
    await expect(page.locator('h1')).toContainText(/yazar/i);
  });

  // EGT-12: En az 1 yazar kartı görünmeli
  test('EGT-12 - Yazar kartları görünmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`);
    const authorCards = page.locator('.yazar-card, .author-card, article'); // HTML'e göre güncelle
    await expect(authorCards).toHaveCountGreaterThan(0);
  });

  // EGT-13: Her yazarın detay sayfası linki olmalı
  test('EGT-13 - Yazar detay linkleri çalışmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`);
    const authorLinks = page.locator('a[href*="/yazar/"]');
    const count = await authorLinks.count();

    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const href = await authorLinks.nth(i).getAttribute('href');
      expect(href).toMatch(/\/yazar\//);
    }
  });

  // EGT-14: Yazar detay sayfasına erişim sağlanmalı
  test('EGT-14 - Yazar detayına gidilebilmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`);
    const firstAuthor = page.locator('a[href*="/yazar/"]').first();
    await firstAuthor.click();
    await expect(page).toHaveURL(/\/yazar\//);
    await expect(page.locator('h1')).not.toBeEmpty();
  });

  // EGT-15: Sayfa boş veya hatalı olmamalı
  test('EGT-15 - Sayfa boş içerik veya hata içermemeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`);
    const errorText = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(errorText + emptyText).toBe(0);
  });

});
