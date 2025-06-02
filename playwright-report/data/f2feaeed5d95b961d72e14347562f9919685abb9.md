# Test info

- Name: eGündem - Haberler Sayfası Testleri >> EGT-33 - Haberlerde resim, başlık, özet olmalı
- Location: C:\Users\Kasa\Documents\egundem\tests\haberleri.spec.js:22:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('.news-card img').first()
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('.news-card img').first()

    at C:\Users\Kasa\Documents\egundem\tests\haberleri.spec.js:27:33
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
   7 |   // EGT-31: Haberler sayfası doğru şekilde yüklenmeli
   8 |   test('EGT-31 - Haberler sayfası yüklenmeli', async ({ page }) => {
   9 |     await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
  10 |     await expect(page).toHaveURL(/\/haberler/);
  11 |     await expect(page.locator('h1, h2')).toContainText(/haberler/i);
  12 |   });
  13 |
  14 |   // EGT-32: Haber kartları listelenmeli
  15 |   test('EGT-32 - Haber kartları listelenmeli', async ({ page }) => {
  16 |     await page.goto(`${BASE_URL}/haberler`);
  17 |     const cards = page.locator('.news-card, article, .haber-item'); // CSS class'ı sitede neyse ona göre düzelt
  18 |     await expect(cards).toHaveCountGreaterThan(0);
  19 |   });
  20 |
  21 |   // EGT-33: Her haberde resim, başlık ve özet olmalı
  22 |   test('EGT-33 - Haberlerde resim, başlık, özet olmalı', async ({ page }) => {
  23 |     await page.goto(`${BASE_URL}/haberler`);
  24 |     const image = page.locator('.news-card img');
  25 |     const title = page.locator('.news-card h2');
  26 |     const summary = page.locator('.news-card .summary, p');
> 27 |     await expect(image.first()).toBeVisible();
     |                                 ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  28 |     await expect(title.first()).not.toBeEmpty();
  29 |     await expect(summary.first()).not.toBeEmpty();
  30 |   });
  31 |
  32 |   // EGT-34: Haber detayına tıklanarak geçiş yapılabilmeli
  33 |   test('EGT-34 - Haber detayına gidilebilmeli', async ({ page }) => {
  34 |     await page.goto(`${BASE_URL}/haberler`);
  35 |     const firstLink = page.locator('a[href*="/haber/"]').first();
  36 |     await firstLink.click();
  37 |     await expect(page).toHaveURL(/\/haber\//);
  38 |     await expect(page.locator('article')).toBeVisible();
  39 |   });
  40 |
  41 |   // EGT-35: Sayfada 404 veya içerik bulunamadı mesajı olmamalı
  42 |   test('EGT-35 - Sayfa 404 ya da boş içerik göstermemeli', async ({ page }) => {
  43 |     await page.goto(`${BASE_URL}/haberler`);
  44 |     const notFound = await page.locator('text=404').count();
  45 |     const emptyText = await page.locator('text=İçerik bulunamadı').count();
  46 |     expect(notFound + emptyText).toBe(0);
  47 |   });
  48 |
  49 | });
  50 |
```