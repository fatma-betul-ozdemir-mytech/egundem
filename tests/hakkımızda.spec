test.describe('eGündem Test Suite - Hakkımızda Sayfası', () => {

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
