const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://egundem.com';

test.describe('eGündem - Köşe Yazıları Sayfası Testleri', () => {

  // EGT-16: Köşe yazıları sayfası (arama sonucu) doğru şekilde yüklenmeli
  test('EGT-16 - Köşe yazıları arama sayfası yüklenmeli', async ({ page }) => {
    // URL encode edilmiş haliyle "köşe " kelimesini arama yapıyoruz
    const searchTerm = encodeURIComponent('köşe ');
    await page.goto(`${BASE_URL}/search/${searchTerm}`, { timeout: 60000 });

    // URL beklenen formata uygun mu kontrolü
    await expect(page).toHaveURL(new RegExp(`/search/${searchTerm}`));

    // Sayfada en azından "köşe" kelimesi geçen bir başlık olmalı
    const results = page.locator('article, .article-card, .search-result-item');
    await expect(results).toHaveCountGreaterThan(0);

    // Örnek olarak sayfadaki başlıkların içinde "köşe" kelimesi var mı kontrol edelim
    // Eğer başlıklar farklı selector kullanıyorsa selector'u kendin güncelleyebilirsin
    const firstTitle = results.locator('h2, h3').first();
    await expect(firstTitle).toContainText(/köşe/i);
  });

  // EGT-17: En az 1 köşe yazısı listelenmeli
  test('EGT-17 - Köşe yazıları listelenmeli', async ({ page }) => {
    const searchTerm = encodeURIComponent('köşe ');
    await page.goto(`${BASE_URL}/search/${searchTerm}`);
    const articles = page.locator('article, .article-card, .search-result-item');
    await expect(articles).toHaveCountGreaterThan(0);
  });

  // EGT-18: Yazılarda başlık ve özet bulunmalı
  test('EGT-18 - Yazı başlık ve özetleri görünmeli', async ({ page }) => {
    const searchTerm = encodeURIComponent('köşe ');
    await page.goto(`${BASE_URL}/search/${searchTerm}`);
    const title = page.locator('article h2, article h3');
    const excerpt = page.locator('article p');
    await expect(title.first()).not.toBeEmpty();
    await expect(excerpt.first()).not.toBeEmpty();
  });

  // EGT-19: Yazı detay sayfasına gidilebilmeli
  test('EGT-19 - Yazı detayına ulaşılmalı', async ({ page }) => {
    const searchTerm = encodeURIComponent('köşe ');
    await page.goto(`${BASE_URL}/search/${searchTerm}`);
    const firstArticleLink = page.locator('article a, .article-card a').first();
    await firstArticleLink.click();
    await expect(page).not.toHaveURL(new RegExp(`/search/${searchTerm}`)); // farklı URL olmalı
    await expect(page.locator('article, main')).toBeVisible();
  });

  // EGT-20: Sayfa hatalı veya boş içerik göstermemeli
  test('EGT-20 - Sayfa 404 veya boş içerik içermemeli', async ({ page }) => {
    const searchTerm = encodeURIComponent('köşe ');
    const response = await page.goto(`${BASE_URL}/search/${searchTerm}`);
    expect(response.status()).not.toBe(404);

    const notFound = await page.locator('text=404').count();
    const emptyText = await page.locator('text=İçerik bulunamadı').count();
    expect(notFound + emptyText).toBe(0);
  });

});
