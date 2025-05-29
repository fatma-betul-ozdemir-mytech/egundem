test.describe('eGündem Test Suite - İletişim Sayfası', () => {

  // EGT-40: İletişim sayfası başarıyla yüklenmeli
  test('EGT-40 - İletişim sayfası yüklenmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/iletisim`, { timeout: 60000 });
    await expect(page).toHaveURL(/\/iletisim/);
    await expect(page.locator('h1, h2')).toContainText(/iletişim/i);
  });

  // EGT-41: İletişim formu görünür ve tüm alanlar mevcut olmalı
  test('EGT-41 - İletişim formu ve alanları görünür olmalı', async ({ page }) => {
    await page.goto(`${BASE_URL}/iletisim`);
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  // EGT-42: İletişim formu başarıyla gönderilmeli
  test('EGT-42 - İletişim formu gönderilmeli', async ({ page }) => {
    await page.goto(`${BASE_URL}/iletisim`);

    await page.fill('input[name="name"]', 'Test Kullanıcı');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'Bu bir test mesajıdır.');

    await page.click('button[type="submit"]');

    // Gönderim sonrası başarı mesajı veya yönlendirme kontrolü
    const successMsg = page.locator('text=Teşekkür ederiz, mesajınız alınmıştır');
    await expect(successMsg).toBeVisible({ timeout: 10000 });
  });

  // EGT-43: İletişim formunda zorunlu alan validasyonları çalışmalı
  test('EGT-43 - Zorunlu alan validasyonları', async ({ page }) => {
    await page.goto(`${BASE_URL}/iletisim`);

    await page.click('button[type="submit"]');

    // Örnek validasyon mesajları, sayfaya göre değişebilir
    await expect(page.locator('text=Lütfen isim giriniz')).toBeVisible();
    await expect(page.locator('text=Lütfen geçerli email giriniz')).toBeVisible();
    await expect(page.locator('text=Lütfen mesajınızı yazınız')).toBeVisible();
  });

  // EGT-44: Form email alanına geçersiz email girildiğinde hata gösterilmeli
  test('EGT-44 - Email alanı için geçersiz format testi', async ({ page }) => {
    await page.goto(`${BASE_URL}/iletisim`);

    await page.fill('input[name="email"]', 'gecersiz-email');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Lütfen geçerli email giriniz')).toBeVisible();
  });

});
