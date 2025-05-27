import { test, expect } from '@playwright/test';

test.describe('eGündem Ana Sayfa Testleri', () => {

  test('Ana sayfa başlığı doğru mu', async ({ page }) => {
    await page.goto('https://egundem.com/');
    await expect(page).toHaveTitle(/e[-]?gündem/i);
  });

  test('"Gündem" menü linki görünür mü', async ({ page }) => {
    await page.goto('https://egundem.com/');
    const link = page.getByRole('link', { name: /Gündem/i });
    await expect(link).toBeVisible();
  });

  test('Ana sayfadan bir habere tıklanınca detay sayfası açılır', async ({ page }) => {
    await page.goto('https://egundem.com/');
    const firstNews = page.locator('article').first();
    await firstNews.click();
    await expect(page).toHaveURL(/\/haber\//);
  });

  test('Arama kutusunda sonuç bulunuyor mu', async ({ page }) => {
    await page.goto('https://egundem.com/');
    const searchInput = page.locator('input[placeholder*="Ara"]');
    await searchInput.fill('ekonomi');
    await searchInput.press('Enter');
    await expect(page.locator('article')).toHaveCountGreaterThan(0);
  });

  test('Footer içinde İletişim linki mevcut mu', async ({ page }) => {
    await page.goto('https://egundem.com/');
    const contactLink = page.getByRole('link', { name: /İletişim/i });
    await expect(contactLink).toBeVisible();
  });

});
