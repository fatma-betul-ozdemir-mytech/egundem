# Test info

- Name: eGündem - Haberler Sayfası Testleri >> EGT-8 - Her haber başlığının linki olmalı
- Location: C:\Users\Kasa\Documents\egundem\tests\haberler.spec.js:22:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
    at C:\Users\Kasa\Documents\egundem\tests\haberler.spec.js:27:19
```

# Page snapshot

```yaml
- 'heading "Application error: a client-side exception has occurred while loading egundem.com (see the browser console for more information)." [level=2]'
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | const BASE_URL = 'https://egundem.com';
   4 |
   5 | test.describe('eGündem - Haberler Sayfası Testleri', () => {
   6 |
   7 |   // EGT-6: Haberler sayfası başarılı şekilde yüklenmeli
   8 |   test('EGT-6 - Haberler sayfası yüklenmeli', async ({ page }) => {
   9 |     await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
  10 |     await expect(page).toHaveURL(/\/haberler/);
  11 |     await expect(page.locator('h1')).toContainText(/haber/i);
  12 |   });
  13 |
  14 |   // EGT-7: Haber listesi görünmeli
  15 |   test('EGT-7 - En az 1 haber kartı görünmeli', async ({ page }) => {
  16 |     await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
  17 |     const newsCards = page.locator('.haber-card, .news-card, article'); // Sınıf adını HTML'e göre güncelle
  18 |     await expect(newsCards).toHaveCountGreaterThan(0);
  19 |   });
  20 |
  21 |   // EGT-8: Haber başlıkları ve bağlantıları çalışmalı
  22 |   test('EGT-8 - Her haber başlığının linki olmalı', async ({ page }) => {
  23 |     await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
  24 |     const links = page.locator('a[href*="/haber/"]');
  25 |     const count = await links.count();
  26 |
> 27 |     expect(count).toBeGreaterThan(0);
     |                   ^ Error: expect(received).toBeGreaterThan(expected)
  28 |     for (let i = 0; i < count; i++) {
  29 |       const href = await links.nth(i).getAttribute('href');
  30 |       expect(href).toMatch(/\/haber\//);
  31 |     }
  32 |   });
  33 |
  34 |   // EGT-9: Haber detay sayfasına yönlendirme yapılmalı
  35 |   test('EGT-9 - Haber detayına gidilebilmeli', async ({ page }) => {
  36 |     await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
  37 |     const firstNews = page.locator('a[href*="/haber/"]').first();
  38 |     await firstNews.click();
  39 |     await expect(page).toHaveURL(/\/haber\//);
  40 |     await expect(page.locator('h1')).not.toBeEmpty();
  41 |   });
  42 |
  43 |   // EGT-10: Sayfada hatalı bağlantı veya boş içerik olmamalı
  44 |   test('EGT-10 - Sayfada boş içerik veya hata mesajı olmamalı', async ({ page }) => {
  45 |     await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
  46 |     const errorText = await page.locator('text=404').count();
  47 |     const emptyText = await page.locator('text=İçerik bulunamadı').count();
  48 |     expect(errorText + emptyText).toBe(0);
  49 |   });
  50 |
  51 | });
  52 |
```