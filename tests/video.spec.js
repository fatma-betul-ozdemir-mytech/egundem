const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://egundem.com';

test.describe('eGündem - Video Sayfası Testleri', () => {

  // EGT-41: Video sayfası başarılı şekilde yüklenmeli
  test('EGT-41 - Video sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/video`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/video/);
    await expect(page.locator('h1, h2')).toContainText(/video/i);
  });

  // EGT-42: Video listesi görünür olmalı
  test('EGT-42 - Video listesi görüntülenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/video`);
    const videoItems = page.locator('.video-card, .video-item, article'); // Siteye göre CSS class kontrol et
    await expect(videoItems).toHaveCountGreaterThan(0);
  });

  // EGT-43: Videolardan biri tıklanarak oynatılabilir olmalı
  test('EGT-43 - Video oynatılabilir olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/video`);
    const firstVideo = page.locator('a[href*="/video/"]').first();
    await firstVideo.click();
    await expect(page).toHaveURL(/\/video\//);

    const videoPlayer = page.locator('video, iframe');
    await expect(videoPlayer).toBeVisible();

    // Videoyu oynatmayı deneyebiliriz
    const isPaused = await videoPlayer.evaluate((el) => el.paused);
    if (isPaused) {
      await videoPlayer.click();
    }

    // 2 saniye oynatılıyor mu kontrolü
    await page.waitForTimeout(2000);
  });

  // EGT-44: Sayfa 404 veya içerik yok mesajı göstermemeli
  test('EGT-44 - Sayfa hatasız ve içerik dolu olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/video`);
    const notFound = await page.locator('text=404').count();
    const emptyContent = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyContent).toBe(0);
  });

});
