import { test, expect } from '@playwright/test';

const BASE_URL = 'https://egundem.com';

test.describe('eGündem - Gündem Sayfası Testleri', () => {
  // EGT-1: Ana sayfa başarılı şekilde yüklenmeli
  test('EGT-1 - Page should load successfully', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(BASE_URL);
  });

  // EGT-2: Sayfa başlığı doğru şekilde görünmeli
  test('EGT-2 - Page should have correct title', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/gündem/i);
  });

  // EGT-3: Formlar doğru şekilde gönderilmeli
  test('EGT-3 - Forms should submit correctly', async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });

    const formExists = await page.locator('input[name="username"]').count() > 0;

    if (formExists) {
      await page.fill('input[name="username"]', 'testuser');
      await page.fill('input[name="password"]', 'password');
      await page.click('button[type="submit"]');
      await expect(page.locator('.success-message')).toBeVisible({ timeout: 20000 });
    } else {
      console.warn('Form not found on the page. Skipping test.');
    }
  });

  // EGT-4: Performans testi – Sayfa yüklenme süresi kabul edilebilir olmalı
  test('EGT-4 - Page load time breakdown', async ({ page }) => {
    const start = Date.now();
    await page.goto(BASE_URL, { timeout: 60000 });
    const loadTime = Date.now() - start;

    const metrics = await page.evaluate(() => ({
      domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
      load: performance.timing.loadEventEnd - performance.timing.navigationStart,
      firstByte: performance.timing.responseStart - performance.timing.navigationStart
    }));

    console.log(`Page Load Time: ${loadTime} ms`);
    console.log(`First Byte: ${metrics.firstByte} ms`);
    console.log(`DOM Content Loaded: ${metrics.domContentLoaded} ms`);
    console.log(`Full Load: ${metrics.load} ms`);

    expect(loadTime).toBeLessThan(30000);
  });

  // EGT-5: Sayfa console hatası içermemeli
  test('EGT-5 - Should not have console errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err));

    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });

    if (errors.length > 0) {
      console.error('Console Errors:', errors);
    }

    expect(errors.length).toBe(0);
  });

  // EGT-6: Haberler sayfası başarılı şekilde yüklenmeli
  test('EGT-6 - Haberler sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/haberler/);
    await expect(page.locator('h1')).toContainText(/haber/i);
  });

  // EGT-7: Haber listesi görünmeli
  test('EGT-7 - En az 1 haber kartı görünmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    const newsCards = page.locator('.haber-card, .news-card, article'); // Sınıf adını HTML'e göre güncelle
    await expect(newsCards).toHaveCountGreaterThan(0);
  });

  // EGT-8: Haber başlıkları ve bağlantıları çalışmalı
  test('EGT-8 - Her haber başlığının linki olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    const links = page.locator('a[href*="/haber/"]');
    const count = await links.count();

    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href).toMatch(/\/haber\//);
    }
  });

  // EGT-9: Haber detay sayfasına yönlendirme yapılmalı
  test('EGT-9 - Haber detayına gidilebilmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    const firstNews = page.locator('a[href*="/haber/"]').first();
    await firstNews.click();
    await expect(page).toHaveURL(/\/haber\//);
    await expect(page.locator('h1')).not.toBeEmpty();
  });

  // EGT-10: Sayfada hatalı bağlantı veya boş içerik olmamalı
  test('EGT-10 - Sayfada boş içerik veya hata mesajı olmamalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    const errorText = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(errorText + emptyText).toBe(0);
  });
// EGT-11: Yazarlar sayfası başarılı şekilde yüklenmeli
  test('EGT-11 - Yazarlar sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/yazarlar/);
    await expect(page.locator('h1')).toContainText(/yazar/i);
  });

  // EGT-12: En az 1 yazar kartı görünmeli
  test('EGT-12 - Yazar kartları görünmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`);
    const authorCards = page.locator('.yazar-card, .author-card, article'); // HTML'e göre güncelle
    await expect(authorCards).toHaveCountGreaterThan(0);
  });

  // EGT-13: Her yazarın detay sayfası linki olmalı
  test('EGT-13 - Yazar detay linkleri çalışmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`);
    const authorLinks = page.locator('a[href*="/yazar/"]');
    const count = await authorLinks.count();

    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const href = await authorLinks.nth(i).getAttribute('href');
      expect(href).toMatch(/\/yazar\//);
    }
  });

  // EGT-14: Yazar detay sayfasına erişim sağlanmalı
  test('EGT-14 - Yazar detayına gidilebilmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`);
    const firstAuthor = page.locator('a[href*="/yazar/"]').first();
    await firstAuthor.click();
    await expect(page).toHaveURL(/\/yazar\//);
    await expect(page.locator('h1')).not.toBeEmpty();
  });

  // EGT-15: Sayfa boş veya hatalı olmamalı
  test('EGT-15 - Sayfa boş içerik veya hata içermemeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/yazarlar`);
    const errorText = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(errorText + emptyText).toBe(0);
  });

  // EGT-16: Köşe yazıları sayfası doğru şekilde yüklenmeli
  test('EGT-16 - Köşe yazıları sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/kose-yazilari/);
    await expect(page.locator('h1')).toContainText(/köşe yazıları/i);
  });

  // EGT-17: En az 1 köşe yazısı listelenmeli
  test('EGT-17 - Köşe yazıları listelenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`);
    const articles = page.locator('.article-card, article, .kose-yazi'); // HTML'e göre ayarla
    await expect(articles).toHaveCountGreaterThan(0);
  });

  // EGT-18: Yazılarda başlık ve özet bulunmalı
  test('EGT-18 - Yazı başlık ve özetleri görünmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`);
    const title = page.locator('.article-card h2, article h2');
    const excerpt = page.locator('.article-card p, article p');
    await expect(title.first()).not.toBeEmpty();
    await expect(excerpt.first()).not.toBeEmpty();
  });

  // EGT-19: Köşe yazısı detay sayfasına gidilebilmeli
  test('EGT-19 - Yazı detayına ulaşılmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`);
    const firstArticle = page.locator('a[href*="/kose-yazilari/"]').first();
    await firstArticle.click();
    await expect(page).toHaveURL(/\/kose-yazilari\//);
    await expect(page.locator('article')).toBeVisible();
  });

  // EGT-20: Sayfa hatalı veya boş içerik göstermemeli
  test('EGT-20 - Sayfa 404 veya boş içerik içermemeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/kose-yazilari`);
    const notFound = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyText).toBe(0);
  });

  // EGT-21: Gündem sayfası doğru şekilde yüklenmeli
  test('EGT-21 - Gündem sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/gundem/);
    await expect(page.locator('h1, h2')).toContainText(/gündem/i);
  });

  // EGT-22: Gündem haberleri listelenmeli
  test('EGT-22 - Gündem haberleri listelenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`);
    const newsItems = page.locator('.news-card, article, .gundem-item'); // Sitedeki CSS'e göre ayarla
    await expect(newsItems).toHaveCountGreaterThan(0);
  });

  // EGT-23: Her haberde başlık ve tarih bulunmalı
  test('EGT-23 - Gündem haber başlık ve tarihi görünmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`);
    const title = page.locator('.news-card h2, article h2');
    const date = page.locator('.date, .news-date, time');
    await expect(title.first()).not.toBeEmpty();
    await expect(date.first()).not.toBeEmpty();
  });

  // EGT-24: Gündem haber detayına gidilebilmeli
  test('EGT-24 - Haberin detay sayfasına ulaşılmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`);
    const firstNews = page.locator('a[href*="/gundem/"]').first();
    await firstNews.click();
    await expect(page).toHaveURL(/\/gundem\//);
    await expect(page.locator('article')).toBeVisible();
  });

  // EGT-25: Sayfa 404 ya da içerik bulunamadı hatası vermemeli
  test('EGT-25 - Sayfa 404 veya boş içerik içermemeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/gundem`);
    const notFound = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyText).toBe(0);
  });
  // EGT-31: Haberler sayfası doğru şekilde yüklenmeli
  test('EGT-31 - Haberler sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/haberler/);
    await expect(page.locator('h1, h2')).toContainText(/haberler/i);
  });

  // EGT-32: Haber kartları listelenmeli
  test('EGT-32 - Haber kartları listelenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`);
    const cards = page.locator('.news-card, article, .haber-item'); // CSS class'ı sitede neyse ona göre düzelt
    await expect(cards).toHaveCountGreaterThan(0);
  });

  // EGT-33: Her haberde resim, başlık ve özet olmalı
  test('EGT-33 - Haberlerde resim, başlık, özet olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`);
    const image = page.locator('.news-card img');
    const title = page.locator('.news-card h2');
    const summary = page.locator('.news-card .summary, p');
    await expect(image.first()).toBeVisible();
    await expect(title.first()).not.toBeEmpty();
    await expect(summary.first()).not.toBeEmpty();
  });

  // EGT-34: Haber detayına tıklanarak geçiş yapılabilmeli
  test('EGT-34 - Haber detayına gidilebilmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`);
    const firstLink = page.locator('a[href*="/haber/"]').first();
    await firstLink.click();
    await expect(page).toHaveURL(/\/haber\//);
    await expect(page.locator('article')).toBeVisible();
  });

  // EGT-35: Sayfada 404 veya içerik bulunamadı mesajı olmamalı
  test('EGT-35 - Sayfa 404 ya da boş içerik göstermemeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/haberler`);
    const notFound = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyText).toBe(0);
  });
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

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
  });

  
  // EGT-46: Hakkımızda sayfası başarıyla yüklenmeli
  test('EGT-46 - Hakkımızda sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/hakkimizda`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/hakkimizda/);
    await expect(page.locator('h1, h2')).toContainText(/hakkımızda/i);
  });

  // EGT-47: Sayfada şirket hakkında bilgilendirici içerik olmalı
  test('EGT-47 - Şirket hakkında içerik görüntülenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/hakkimizda`);
    const content = page.locator('section, article, p');
    await expect(content).toContainText(/şirket|misyon|vizyon|değerler/i);
  });

  // EGT-48: Sayfa içindeki görseller doğru şekilde yüklenmeli
  test('EGT-48 - Görseller görünür olmalı ve yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/hakkimizda`);
    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await expect(img).toBeVisible();
      const naturalWidth = await img.evaluate((node) => node.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }
  });

  // EGT-49: Sayfada ekip üyeleri veya yönetim kadrosu bilgileri olmalı
  test('EGT-49 - Ekip üyeleri veya yönetim kadrosu listelenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/hakkimizda`);
    const ekipBaslik = page.locator('text=ekip, yönetim, takım, personel', { exact: false });
    await expect(ekipBaslik).toBeVisible();
    const ekipListesi = page.locator('.team-member, .staff, .member');
    expect(await ekipListesi.count()).toBeGreaterThan(0);
  });

});


