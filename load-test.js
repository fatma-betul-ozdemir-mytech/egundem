import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 50,           // 50 eşzamanlı kullanıcı
  duration: '30s',   // 30 saniye boyunca yük uygula
};

export default function () {
  const res = http.get('https://egundem.com/gundem');
  check(res, {
    'status 200': (r) => r.status === 200,
    'gündem içeriği geldi': (r) => r.body.includes('Gündem'),
  });
  sleep(1);
}
