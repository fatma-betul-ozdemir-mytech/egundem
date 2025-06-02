import { test, expect } from '@playwright/test';

const BASE_URL = 'https://egundem.com/iletisim';

test.describe('eGündem İletişim Sayfası Testleri', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
  });

  // EGT-40: Sayfadaki tüm butonlar görünür ve tıklanabilir olmalı
  test('EGT-40 - Sayfadaki tüm butonlar tıklanabilir olmalı', async ({ page }) => {
    const buttons = await page.locator('button, input[type="submit"]').elementHandles();
    for (const btn of buttons) {
      await expect(btn).toBeVisible();
      await expect(btn).toBeEnabled();
    }
  });

  // EGT-41: İletişim sayfasındaki linkler doğru hedefe gitmeli
  test('EGT-41 - Sayfadaki önemli linkler doğru sayfaya yönlendiriyor', async ({ page }) => {
    const linkSelectors = [
      'a[href="/"]',       // Ana sayfa linki örneği
      'a[href="/hakkimizda"]', // Hakkımızda linki varsa
      'a[href^="mailto:"]' // Mailto linkleri
    ];

    for (const selector of linkSelectors) {
      const links = await page.locator(selector);
      if (await links.count() > 0) {
        const firstLink = links.first();
        const href = await firstLink.getAttribute('href');

        // Yeni sayfada açılan mailto linkleri hariç
        if (href && !href.startsWith('mailto:')) {
          await Promise.all([
            page.waitForNavigation(),
            firstLink.click(),
          ]);
          await expect(page).toHaveURL(new RegExp(href));
          // Sayfayı tekrar iletişim sayfasına getir
          await page.goto(BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
        }
      }
    }
  });

  // EGT-42: Formdaki input alanları doğru tipte olmalı
  test('EGT-42 - Formdaki input alanları doğru tipte olmalı', async ({ page }) => {
    const emailInput = page.locator('input[type="email"][name="email"]');
    const textInputs = await page.locator('input[type="text"], textarea').elementHandles();

    await expect(emailInput).toHaveCount(1);
    for (const input of textInputs) {
      await expect(input).toBeVisible();
      await expect(input).toBeEnabled();
    }
  });

  // EGT-43: Formdaki textarea alanı yeterli büyüklükte olmalı
  test('EGT-43 - Formdaki mesaj alanı yeterli büyüklükte olmalı', async ({ page }) => {
    const textarea = page.locator('textarea[name="mesaj"]');
    await expect(textarea).toBeVisible();
    const box = await textarea.boundingBox();
    expect(box.height).toBeGreaterThan(50);
    expect(box.width).toBeGreaterThan(200);
  });

  // EGT-44: Formu gönderirken yüklenme göstergesi görünmeli
  test('EGT-44 - Form gönderilirken yüklenme göstergesi görünmeli', async ({ page }) => {
    await page.fill('input[name="isim"]', 'Test Kullanıcı');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="mesaj"]', 'Bu bir test mesajıdır.');

    const submitButton = page.locator('button[type="submit"]');

    await Promise.all([
      page.waitForResponse(response => response.url().includes('/iletisim') && response.status() === 200),
      submitButton.click(),
    ]);

    // Yüklenme göstergesini sayfada kontrol et (örnek: spinner, loading class, vs.)
    const loader = page.locator('.loading, .spinner, .loading-indicator');
    if (await loader.count() > 0) {
      await expect(loader).toBeVisible();
      await loader.waitFor({ state: 'hidden', timeout: 10000 });
    }
  });

  // EGT-45: Form gönderiminden sonra sayfa doğru mesaj göstermeli
  test('EGT-45 - Form gönderiminden sonra başarı mesajı görünmeli', async ({ page }) => {
    await page.fill('input[name="isim"]', 'Test Kullanıcı');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="mesaj"]', 'Bu bir test mesajıdır.');
    await page.click('button[type="submit"]');

    const successMessage = page.locator('text=Mesajınız başarıyla gönderildi');
    await expect(successMessage).toBeVisible({ timeout: 10000 });
  });

});
