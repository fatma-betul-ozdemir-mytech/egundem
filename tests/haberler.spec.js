const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://egundem.com';

test.describe('eGündem - Haberler Sayfası Testleri', () => {

  // EGT-6: Haberler sayfası başarılı şekilde yüklenmeli
  test('EGT-6 - Haberler sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/haberler/);
    await expect(page.locator('h1')).toContainText(/haber/i);
  });

  // EGT-7: Haber listesi görünmeli
  test('EGT-7 - En az 1 haber kartı görünmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    const newsCards = page.locator('.haber-card, .news-card, article'); // Sınıf adını HTML'e göre güncelle
    await expect(newsCards).toHaveCountGreaterThan(0);
  });

  // EGT-8: Haber başlıkları ve bağlantıları çalışmalı
  test('EGT-8 - Her haber başlığının linki olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    const links = page.locator('a[href*="/haber/"]');
    const count = await links.count();

    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href).toMatch(/\/haber\//);
    }
  });

  // EGT-9: Haber detay sayfasına yönlendirme yapılmalı
  test('EGT-9 - Haber detayına gidilebilmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    const firstNews = page.locator('a[href*="/haber/"]').first();
    await firstNews.click();
    await expect(page).toHaveURL(/\/haber\//);
    await expect(page.locator('h1')).not.toBeEmpty();
  });

  // EGT-10: Sayfada hatalı bağlantı veya boş içerik olmamalı
  test('EGT-10 - Sayfada boş içerik veya hata mesajı olmamalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    const errorText = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(errorText + emptyText).toBe(0);
  });

});
