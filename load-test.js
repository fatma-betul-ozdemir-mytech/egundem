import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  // 👇 Farklı test senaryoları burada tanımlandı
  scenarios: {
    // 1️⃣ Normal Load Test (Senin mevcut testin)
    normal_load: {
      executor: 'constant-vus',
      vus: 100, // aynı anda 100 kullanıcı
      duration: '1m',
    },

    // 2️⃣ Stress Test (kapasite sınırını bulmak için)
    stress_test: {
      executor: 'ramping-vus',
      startVUs: 50,
      stages: [
        { duration: '30s', target: 200 },  // kısa sürede 200 kullanıcıya çık
        { duration: '30s', target: 500 },  // sonra 500
        { duration: '30s', target: 1000 }, // kapasiteyi zorla
      ],
      gracefulRampDown: '10s',
    },

    // 3️⃣ Spike Test (ani trafik patlaması)
    spike_test: {
      executor: 'ramping-arrival-rate',
      startRate: 10,
      timeUnit: '1s',
      preAllocatedVUs: 1000,
      maxVUs: 2000,
      stages: [
        { duration: '10s', target: 10 },    // düşük trafik
        { duration: '5s', target: 2000 },   // ani spike 🚀
        { duration: '20s', target: 10 },    // tekrar normale dön
      ],
    },

    // 4️⃣ Soak Test (uzun süreli dayanıklılık testi)
    soak_test: {
      executor: 'constant-vus',
      vus: 50,
      duration: '30m',  // uzun süreli çalıştır (isteğe göre saatlerce olabilir)
    },
  },

  thresholds: {
    // 👇 Ortalama değil p95 ve p99 değerlerine odaklan
    http_req_duration: ['p(95)<1000', 'p(99)<2000'], // p95 < 1s, p99 < 2s olmalı
    http_req_failed: ['rate<0.01'], // %1’den az hata kabul edilebilir
  },
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
  { url: 'https://egundem.com/login',        keyword: 'Giriş Yap' }, // 🔐 Login sayfası
  { url: 'https://egundem.com/iletisim',     keyword: 'Gönder', method: 'form' }, // 📝 İletişim formu
];

export default function () {
  urls.forEach(({ url, keyword, method }) => {
    let res;

    // Eğer form sayfası ise POST isteği simüle et
    if (method === 'form') {
      const payload = {
        ad: 'Test Kullanıcısı',
        email: 'test@example.com',
        mesaj: 'Bu bir test mesajıdır.',
      };

      const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
      const encoded = Object.entries(payload)
        .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
        .join('&');
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
