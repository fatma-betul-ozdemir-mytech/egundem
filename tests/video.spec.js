const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://egundem.com';

test.describe('eGündem Test Suite - Sayfa Testleri', () => {

  // EGT-36: Video sayfası başarılı şekilde yüklenmeli
  test('EGT-36 - Video sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/video`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/video/);
    await expect(page.locator('h1, h2')).toContainText(/video/i);
  });

  // EGT-37: Video listesi görünür olmalı
  test('EGT-37 - Video listesi görüntülenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/video`);
    const videoItems = page.locator('.video-card, .video-item, article'); // Sayfaya göre CSS selector değişebilir
    await expect(videoItems).toHaveCountGreaterThan(0);
  });

  // EGT-38: Videolardan biri tıklanarak oynatılabilir olmalı
  test('EGT-38 - Video oynatılabilir olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/video`);
    const firstVideo = page.locator('a[href*="/video/"]').first();
    await firstVideo.click();
    await expect(page).toHaveURL(/\/video\//);

    const videoPlayer = page.locator('video, iframe');
    await expect(videoPlayer).toBeVisible();

    const isPaused = await videoPlayer.evaluate((el) => el.paused);
    if (isPaused) {
      await videoPlayer.click();
    }

    await page.waitForTimeout(2000);
  });

  // EGT-39: Sayfa 404 veya içerik yok mesajı göstermemeli
  test('EGT-39 - Sayfa hatasız ve içerik dolu olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/video`);
    const notFound = await page.locator('text=404').count();
    const emptyContent = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyContent).toBe(0);
  });

  // Buradan sonra diğer sayfalara geçebiliriz...

});
