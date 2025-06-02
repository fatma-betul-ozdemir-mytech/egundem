# Test info

- Name: eGündem Test Suite - Hakkımızda Sayfası >> EGT-47 - Şirket hakkında içerik görüntülenmeli
- Location: C:\Users\Kasa\Documents\egundem\tests\hakkımızda.spec.js:14:3

# Error details

```
Error: expect.toContainText: Error: strict mode violation: locator('section, article, p') resolved to 3 elements:
    1) <p class="font-inter font-normal md:font-bold text-sm text-primary-black dark:text-white">© 2024 e-Gündem. Her hakkı saklıdır</p> aka getByText('© 2024 e-Gündem. Her hakkı')
    2) <p>…</p> aka getByText('Websitemiz, haber alma')
    3) <p>…</p> aka getByText('Kabul Et butonuna tıklayarak')

Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('section, article, p')

    at C:\Users\Kasa\Documents\egundem\tests\hakkımızda.spec.js:17:27
```

# Page snapshot

```yaml
- link "E-Gündem Haberleri & Son Dakika Haberleri E-Gündem Logo":
  - /url: /
  - text: E-Gündem Haberleri & Son Dakika Haberleri
  - img "E-Gündem Logo"
- button "Toggle dark mode"
- link "eGündem Instagram":
  - /url: https://www.instagram.com/egundemapp/
  - img
- link "eGündem Facebook":
  - /url: https://www.facebook.com/
  - img
- link "eGündem Twitter":
  - /url: https://x.com/egundemapp/
  - img
- link "eGündem TikTok":
  - /url: https://www.tiktok.com/@egundem
  - img
- link "eGündem Youtube":
  - /url: https://www.youtube.com/
  - img
- button "Menüyü Aç":
  - img
- link "GÜNDEM":
  - /url: /gundem
- link "SPOR":
  - /url: /spor
- link "FİNANS":
  - /url: /finans
- link "BİLİM & TEKNOLOJİ":
  - /url: /bilim-and-teknoloji
- link "YAŞAM":
  - /url: /yasam
- button "Ara"
- button "Giriş Yap veya Üye Ol": Giriş Yap / Üye Ol
- heading "404" [level=1]
- heading "Not Found" [level=2]
- dialog:
  - img "E-Gündem Logo"
  - button "Kapat"
  - text: BİZİ TAKİP EDİN
  - link "eGündem Instagram":
    - /url: https://www.instagram.com/egundemapp/
    - img
  - link "eGündem Facebook":
    - /url: https://www.facebook.com/
    - img
  - link "eGündem Twitter":
    - /url: https://x.com/egundemapp/
    - img
  - link "eGündem TikTok":
    - /url: https://www.tiktok.com/@egundem
    - img
  - link "eGündem Youtube":
    - /url: https://www.youtube.com/
    - img
  - button "Giriş Yap veya Üye Ol": Giriş Yap / Üye Ol
  - textbox "Ara"
  - link "Hakkımızda":
    - /url: /about
  - link "Künye":
    - /url: /tag
  - text: Mobil uygulama indir
  - link "AppGallery":
    - /url: "#"
    - img
    - text: AppGallery
  - link "AppStore":
    - /url: "#"
    - img
    - text: AppStore
  - link "GooglePlay":
    - /url: "#"
    - img
    - text: GooglePlay
- img "E-Gündem Logo"
- text: Copyright © 2024 eGündem Medya AŞ. Tüm Hakları Saklıdır.
- link "eGündem Instagram":
  - /url: https://www.instagram.com/egundemapp/
  - img
- link "eGündem Facebook":
  - /url: https://www.facebook.com/
  - img
- link "eGündem Twitter":
  - /url: https://x.com/egundemapp/
  - img
- link "eGündem TikTok":
  - /url: https://www.tiktok.com/@egundem
  - img
- link "eGündem Youtube":
  - /url: https://www.youtube.com/
  - img
- link "HABERLER":
  - /url: /
- link "Gündem":
  - /url: "#"
- link "Politika":
  - /url: "#"
- link "Finans":
  - /url: "#"
- link "Dünya":
  - /url: "#"
- link "Sağlık":
  - /url: "#"
- link "Otomobil":
  - /url: "#"
- link "Bilgi":
  - /url: "#"
- link "Teknoloji":
  - /url: "#"
- link "Medya":
  - /url: "#"
- link "Yaşam":
  - /url: "#"
- link "Spor":
  - /url: "#"
- link "3. Sayfa":
  - /url: "#"
- link "Magazin":
  - /url: "#"
- link "Emlak":
  - /url: "#"
- link "Kadın":
  - /url: "#"
- link "İpucu":
  - /url: "#"
- link "Biyografi":
  - /url: "#"
- link "Eğitim":
  - /url: "#"
- link "Tarih":
  - /url: "#"
- link "Seyahat":
  - /url: "#"
- link "Kitap":
  - /url: "#"
- link "Kültür Sanat":
  - /url: "#"
- link "Astroloji":
  - /url: "#"
- link "Fatiha Suresi":
  - /url: "#"
- link "Ayetel Kürsi":
  - /url: "#"
- link "Fetih suresi":
  - /url: "#"
- link "Namaz Vakitleri":
  - /url: "#"
- link "İhlas Suresi":
  - /url: "#"
- link "Dualar":
  - /url: "#"
- paragraph: © 2024 e-Gündem. Her hakkı saklıdır
- link "App Store HEMEN İNDİRİN":
  - /url: "#"
  - img
  - text: App Store HEMEN İNDİRİN
- link "Google Play HEMEN İNDİRİN":
  - /url: "#"
  - img
  - text: Google Play HEMEN İNDİRİN
- link "App Gallery HEMEN İNDİRİN":
  - /url: "#"
  - img
  - text: App Gallery HEMEN İNDİRİN
- link "Hakkımızda":
  - /url: /about
- link "KVKK Politikası":
  - /url: /kvkk
- link "Gizlilik Politikası":
  - /url: /gizlilik-politikasi
- link "Bize Ulaşın":
  - /url: "#"
- link "Künye":
  - /url: /tag
- alert
- img
- text: Gizliliğinize önem veriyoruz
- button "Reddet":
  - img
- paragraph: Websitemiz, haber alma deneyiminizi iyileştirmek ve daha iyi reklam içeriği sunabilmek için çerezler kullanmaktadır.
- paragraph: Kabul Et butonuna tıklayarak çerez kullanımını kabul etmiş olursunuz.
- img "E-Gündem Logo"
- link "Çerezler":
  - /url: /cerez-politikasi
- link "Gizlilik":
  - /url: /gizlilik-politikasi
- link "Hakkımızda":
  - /url: /about
- button "Kabul Et"
- button "Reddet"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | const BASE_URL = 'https://egundem.com';
   4 | test.describe('eGündem Test Suite - Hakkımızda Sayfası', () => {
   5 |
   6 |   // EGT-46: Hakkımızda sayfası başarıyla yüklenmeli
   7 |   test('EGT-46 - Hakkımızda sayfası yüklenmeli', async ({ page }) => {
   8 |     await page.goto(`${BASE_URL}/hakkimizda`, { timeout: 60000 });
   9 |     await expect(page).toHaveURL(/\/hakkimizda/);
  10 |     await expect(page.locator('h1, h2')).toContainText(/hakkımızda/i);
  11 |   });
  12 |
  13 |   // EGT-47: Sayfada şirket hakkında bilgilendirici içerik olmalı
  14 |   test('EGT-47 - Şirket hakkında içerik görüntülenmeli', async ({ page }) => {
  15 |     await page.goto(`${BASE_URL}/hakkimizda`);
  16 |     const content = page.locator('section, article, p');
> 17 |     await expect(content).toContainText(/şirket|misyon|vizyon|değerler/i);
     |                           ^ Error: expect.toContainText: Error: strict mode violation: locator('section, article, p') resolved to 3 elements:
  18 |   });
  19 |
  20 |   // EGT-48: Sayfa içindeki görseller doğru şekilde yüklenmeli
  21 |   test('EGT-48 - Görseller görünür olmalı ve yüklenmeli', async ({ page }) => {
  22 |     await page.goto(`${BASE_URL}/hakkimizda`);
  23 |     const images = page.locator('img');
  24 |     const count = await images.count();
  25 |     expect(count).toBeGreaterThan(0);
  26 |
  27 |     for (let i = 0; i < count; i++) {
  28 |       const img = images.nth(i);
  29 |       await expect(img).toBeVisible();
  30 |       const naturalWidth = await img.evaluate((node) => node.naturalWidth);
  31 |       expect(naturalWidth).toBeGreaterThan(0);
  32 |     }
  33 |   });
  34 |
  35 |   // EGT-49: Sayfada ekip üyeleri veya yönetim kadrosu bilgileri olmalı
  36 |   test('EGT-49 - Ekip üyeleri veya yönetim kadrosu listelenmeli', async ({ page }) => {
  37 |     await page.goto(`${BASE_URL}/hakkimizda`);
  38 |     const ekipBaslik = page.locator('text=ekip, yönetim, takım, personel', { exact: false });
  39 |     await expect(ekipBaslik).toBeVisible();
  40 |     const ekipListesi = page.locator('.team-member, .staff, .member');
  41 |     expect(await ekipListesi.count()).toBeGreaterThan(0);
  42 |   });
  43 |
  44 | });
  45 |
```