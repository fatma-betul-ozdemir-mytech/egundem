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
    // 'article' yerine güvenilir bir sınıfla seçim
    const newsLinks = page.locator('a[href*="/haber/"]').first();
    await newsLinks.waitFor({ state: 'visible', timeout: 10000 });
    await newsLinks.click();
    await expect(page).toHaveURL(/\/haber\//);
  });

  test('Arama kutusunda sonuç bulunuyor mu', async ({ page }) => {
    await page.goto('https://egundem.com/');
    const searchInput = page.locator('input[placeholder*="Ara"]');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('haber');
    await searchInput.press('Enter');
    await page.waitForTimeout(3000);
    const results = await page.locator('article').count();
    expect(results).toBeGreaterThan(0);
  });

  test('Footer içinde İletişim linki mevcut mu', async ({ page }) => {
    await page.goto('https://egundem.com/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const contactLink = page.locator('a[href*="iletisim"]');
    await expect(contactLink).toBeVisible({ timeout: 5000 });
  });

});
