const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://egundem.com';

test.describe('eGündem Test Suite - Video Sayfası', () => {
  
  // EGT-36: Video sayfası yüklenmeli
  test('EGT-36 - Video sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/search/video`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/search\/video/);

    const headers = page.locator('h1, h2');
    if (await headers.count() > 0) {
      await expect(headers).not.toContainText(/404|not found/i);
    }
  });

  // EGT-37: Video listesi görünür olmalı
  test('EGT-37 - Video listesi görüntülenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/search/video`);

    // Video öğelerini tanımlayan seçiciler – gerekirse güncellenebilir
    const videoItems = page.locator('.video-card, .video-item, article, a[href*="/video/"]');
    const count = await videoItems.count();

    console.log(`Sayfada bulunan video öğesi sayısı: ${count}`);
    expect(count).toBeGreaterThan(0);
  });

  // EGT-38: Videolardan biri tıklanarak oynatılabilir olmalı
  test('EGT-38 - Video oynatılabilir olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/search/video`);

    const firstVideo = page.locator('a[href*="/video/"], .video-card a, article a').first();
    await expect(firstVideo).toBeVisible({ timeout: 10000 });

    await firstVideo.click();
    await expect(page).toHaveURL(/\/video\/|\/haber\/|\/detay\//); // URL yapısına göre esnek kontrol
  });

  // EGT-39: Sayfa hatasız ve içerik dolu olmalı
  test('EGT-39 - Sayfa hatasız ve içerik dolu olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/search/video`);
    await expect(page).not.toHaveTitle(/404|not found/i);

    const mainContent = page.locator('main, section, .container');
    await expect(mainContent.first()).toBeVisible();
  });

});
