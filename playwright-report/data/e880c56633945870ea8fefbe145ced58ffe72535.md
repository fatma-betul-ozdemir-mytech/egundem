# Test info

- Name: eGündem - Haberler Sayfası Testleri >> EGT-34 - Haber detayına gidilebilmeli
- Location: C:\Users\Kasa\Documents\egundem\tests\haberleri.spec.js:33:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected pattern: /\/haber\//
Received string:  "https://egundem.com/haberler"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="tr" class="text-sm md:text-base">…</html>
      - unexpected value "https://egundem.com/haberler"

    at C:\Users\Kasa\Documents\egundem\tests\haberleri.spec.js:37:24
```

# Page snapshot

```yaml
- link "E-Gündem Haberleri & Son Dakika Haberleri E-Gündem Logo":
  - /url: /
  - text: E-Gündem Haberleri & Son Dakika Haberleri
  - img "E-Gündem Logo"
- 'link "Yozgat''ta cenaze töreninden dönenleri taşıyan midibüs devrildi: 2 kişi öldü, 15 kişi yaralandı"':
  - /url: /gundem/yozgatta-cenaze-toreninden-donenleri-tasiyan-midibus-devrildi-2-kisi-oldu-15-kisi-yaralandi-d1cbfefd
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
  - link "Son Dakika":
    - /url: /son-dakika
  - link "Gündem":
    - /url: /gundem
  - link "Spor":
    - /url: /spor
  - link "Finans":
    - /url: /finans
  - link "Dedikodu":
    - /url: /dedikodu
  - link "Yaşam":
    - /url: /yasam
  - link "Yemek":
    - /url: /yemek
  - link "Astroloji":
    - /url: /astroloji
  - link "Bilim & Teknoloji":
    - /url: /bilim-and-teknoloji
  - link "YouTube":
    - /url: /youtube
  - link "Twitter":
    - /url: /twitter
  - link "Yerel":
    - /url: /yerel
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
  27 |     await expect(image.first()).toBeVisible();
  28 |     await expect(title.first()).not.toBeEmpty();
  29 |     await expect(summary.first()).not.toBeEmpty();
  30 |   });
  31 |
  32 |   // EGT-34: Haber detayına tıklanarak geçiş yapılabilmeli
  33 |   test('EGT-34 - Haber detayına gidilebilmeli', async ({ page }) => {
  34 |     await page.goto(`${BASE_URL}/haberler`);
  35 |     const firstLink = page.locator('a[href*="/haber/"]').first();
  36 |     await firstLink.click();
> 37 |     await expect(page).toHaveURL(/\/haber\//);
     |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
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