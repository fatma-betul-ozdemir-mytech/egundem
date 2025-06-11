# Test info

- Name: eGündem - Köşe Yazıları Sayfası Testleri >> EGT-18 - Yazı başlık ve özetleri görünmeli
- Location: C:\Users\Kasa\Documents\egundem\tests\koseyazilari.spec.js:22:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).not.toBeEmpty()

Locator: locator('.article-card h2, article h2').first()
Expected: not empty
Received: <element(s) not found>
Call log:
  - expect.not.toBeEmpty with timeout 5000ms
  - waiting for locator('.article-card h2, article h2').first()

    at C:\Users\Kasa\Documents\egundem\tests\koseyazilari.spec.js:26:37
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
   5 | test.describe('eGündem - Köşe Yazıları Sayfası Testleri', () => {
   6 |
   7 |   // EGT-16: Köşe yazıları sayfası doğru şekilde yüklenmeli
   8 |   test('EGT-16 - Köşe yazıları sayfası yüklenmeli', async ({ page }) => {
   9 |     await page.goto(`${BASE_URL}/kose-yazilari`, { timeout: 60000 });
  10 |     await expect(page).toHaveURL(/\/kose-yazilari/);
  11 |     await expect(page.locator('h1')).toContainText(/köşe yazıları/i);
  12 |   });
  13 |
  14 |   // EGT-17: En az 1 köşe yazısı listelenmeli
  15 |   test('EGT-17 - Köşe yazıları listelenmeli', async ({ page }) => {
  16 |     await page.goto(`${BASE_URL}/kose-yazilari`);
  17 |     const articles = page.locator('.article-card, article, .kose-yazi'); // HTML'e göre ayarla
  18 |     await expect(articles).toHaveCountGreaterThan(0);
  19 |   });
  20 |
  21 |   // EGT-18: Yazılarda başlık ve özet bulunmalı
  22 |   test('EGT-18 - Yazı başlık ve özetleri görünmeli', async ({ page }) => {
  23 |     await page.goto(`${BASE_URL}/kose-yazilari`);
  24 |     const title = page.locator('.article-card h2, article h2');
  25 |     const excerpt = page.locator('.article-card p, article p');
> 26 |     await expect(title.first()).not.toBeEmpty();
     |                                     ^ Error: Timed out 5000ms waiting for expect(locator).not.toBeEmpty()
  27 |     await expect(excerpt.first()).not.toBeEmpty();
  28 |   });
  29 |
  30 |   // EGT-19: Köşe yazısı detay sayfasına gidilebilmeli
  31 |   test('EGT-19 - Yazı detayına ulaşılmalı', async ({ page }) => {
  32 |     await page.goto(`${BASE_URL}/kose-yazilari`);
  33 |     const firstArticle = page.locator('a[href*="/kose-yazilari/"]').first();
  34 |     await firstArticle.click();
  35 |     await expect(page).toHaveURL(/\/kose-yazilari\//);
  36 |     await expect(page.locator('article')).toBeVisible();
  37 |   });
  38 |
  39 |   // EGT-20: Sayfa hatalı veya boş içerik göstermemeli
  40 |   test('EGT-20 - Sayfa 404 veya boş içerik içermemeli', async ({ page }) => {
  41 |     await page.goto(`${BASE_URL}/kose-yazilari`);
  42 |     const notFound = await page.locator('text=404').count();
  43 |     const emptyText = await page.locator('text=İçerik bulunamadı').count();
  44 |     expect(notFound + emptyText).toBe(0);
  45 |   });
  46 |
  47 | });
  48 |
```