// tests/video.spec.js
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://egundem.com';

test.describe('eGündem Test Suite - Video Sayfası', () => {

  // EGT-36: Video sayfası başarıyla yüklenmeli
  test('EGT-36 - Video sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/search/video`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/search\/video/);
    await expect(page.locator('h1, h2')).not.toContainText(/404|not found/i);
  });

  // EGT-37: Video listesi görünür olmalı
  test('EGT-37 - Video listesi görüntülenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/search/video`);
    const videoItems = page.locator('.video-card, .video-item, article'); // Sayfaya göre güncellenebilir
    const count = await videoItems.count();
    expect(count).toBeGreaterThan(0);
  });

  // EGT-38: Videolardan biri tıklanarak oynatılabilir olmalı
  test('EGT-38 - Video oynatılabilir olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/search/video`);
    const firstVideo = page.locator('a[href*="/video/"]').first();
    await expect(firstVideo).toBeVisible({ timeout: 10000 });
    await firstVideo.click();
    await expect(page).toHaveURL(/\/video\//);

    const videoPlayer = page.locator('video, iframe');
    await expect(videoPlayer).toBeVisible({ timeout: 10000 });
  });

  // EGT-39: Sayfa hatasız ve içerik dolu olmalı
  test('EGT-39 - Sayfa hatasız ve içerik dolu olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/search/video`);
    const notFound = await page.locator('text=404').count();
    const emptyContent = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyContent).toBe(0);
  });

});
