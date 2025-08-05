import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '30s',
};

// Test edilecek sayfalar ve içerik doğrulamaları
const urls = [
  { url: 'https://egundem.com/',             keyword: 'eGündem' },
  { url: 'https://egundem.com/gundem',       keyword: 'Gündem' },
  { url: 'https://egundem.com/ekonomi',      keyword: 'Ekonomi' },
  { url: 'https://egundem.com/siyaset',      keyword: 'Siyaset' },
  { url: 'https://egundem.com/dunya',        keyword: 'Dünya' },
  { url: 'https://egundem.com/teknoloji',    keyword: 'Teknoloji' },
  { url: 'https://egundem.com/spor',         keyword: 'Spor' },
  { url: 'https://egundem.com/magazin',      keyword: 'Magazin' },
  { url: 'https://egundem.com/video-haber',  keyword: 'Video Haber' },
  { url: 'https://egundem.com/iletisim',     keyword: 'İletişim' },
  { url: 'https://egundem.com/login',        keyword: 'Giriş Yap' },           // 🔐 Giriş sayfası
  { url: 'https://egundem.com/iletisim',     keyword: 'Gönder', method: 'form' } // 📝 İletişim formu
];

export default function () {
  urls.forEach(({ url, keyword, method }) => {
    let res;

    // Eğer form sayfası ise POST isteği simüle et
    if (method === 'form') {
      const payload = {
        ad: 'Test Kullanıcısı',
        email: 'test@example.com',
        mesaj: 'Bu bir test mesajıdır.'
      };

      const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
      const encoded = Object.entries(payload).map(([k,v]) => `${k}=${encodeURIComponent(v)}`).join('&');
      res = http.post(url, encoded, { headers });
    } else {
      res = http.get(url);
    }

    check(res, {
      [`${url} => status 200/302`]: (r) => r.status === 200 || r.status === 302,
      [`${url} => içerik "${keyword}" var`]: (r) => r.body.includes(keyword),
    });

    sleep(1);
  });
}
