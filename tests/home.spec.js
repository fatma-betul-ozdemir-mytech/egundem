import { test, expect } from '@playwright/test';

test.describe('eGündem Ana Sayfa Testleri', () => {

  test('Ana sayfa başlığı doğru mu', async ({ page }) => {
    await page.goto('https://egundem.com/');
    await expect(page).toHaveTitle(/e[-]?gündem/i);
  });

  test('"Gündem" menü linki görünür mü', async ({ page }) => {
    await page.goto('https://egundem.com/');
    const gundemLink = page.locator('a[href="/gundem"]').first();
    await expect(gundemLink).toBeVisible();
  });

  test('Ana sayfadan bir habere tıklanınca detay sayfası açılır', async ({ page }) => {
    await page.goto('https://egundem.com/');
    const firstNews = page.locator('article a').first();
    await expect(firstNews).toBeVisible();
    await firstNews.click();
    await expect(page).toHaveURL(/\/haber\//);
  });

  test('Arama kutusunda sonuç bulunuyor mu', async ({ page }) => {
    await page.goto('https://egundem.com/');
    const searchInput = page.locator('input[placeholder*="Ara"]');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('ekonomi');
    await searchInput.press('Enter');
    await page.waitForTimeout(2000); // Arama sonuçları yüklenmesi için bekleyelim
    const articleCount = await page.locator('article').count();
    expect(articleCount).toBeGreaterThan(0);
  });

  test('Footer içinde İletişim linki mevcut mu', async ({ page }) => {
    await page.goto('https://egundem.com/');
    const footerLinks = page.locator('footer a');
    const linkTexts = await footerLinks.allTextContents();
    const hasContact = linkTexts.some(text => text.toLowerCase().includes('iletişim'));
    expect(hasContact).toBe(true);
  });

});
