import 'dotenv/config';
import fs from 'fs';
import fetch from 'node-fetch';

// Ortam değişkenlerini al
const jiraBaseUrl = process.env.JIRA_BASE_URL;
const jiraEmail = process.env.JIRA_EMAIL;
const jiraApiToken = process.env.JIRA_API_TOKEN;
const jiraProjectKey = process.env.JIRA_PROJECT_KEY;
const reportUrl = process.env.REPORT_URL || 'Rapor linki belirtilmedi';

// Ortam değişkenlerini kontrol et
if (!jiraBaseUrl || !jiraEmail || !jiraApiToken || !jiraProjectKey) {
  console.error('❌ Ortam değişkenleri eksik. Lütfen .env dosyanızı kontrol edin.');
  process.exit(1);
}

console.log('✅ Ortam değişkenleri yüklendi.');
console.log('🔗 REPORT_URL:', reportUrl);

// Jira Basic Auth için base64 encode
const auth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

/**
 * Jira ticket'ına yorum ekleme fonksiyonu
 * @param {string} issueKey Jira issue key (örn: EGT-1)
 * @param {string} comment Eklenecek yorum metni
 */
async function jiraAddComment(issueKey, comment) {
  const url = `${jiraBaseUrl}/rest/api/3/issue/${issueKey}/comment`;
  const body = {
    body: {
      type: "doc",
      version: 1,
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: comment
            }
          ]
        }
      ]
    }
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Jira API hata: ${res.status} ${res.statusText} - ${errorText}`);
  }

  return res.json();
}

(async () => {
  try {
    // Playwright sonuçlarını oku
    const raw = fs.readFileSync('./playwright-report/results.json', 'utf-8');
    const data = JSON.parse(raw);

    let commentCount = 0;
    // Jira issue key pattern: örn. EGT-1, EGT-23
    const regex = new RegExp(`\\b${jiraProjectKey}-\\d+\\b`);

    // Hiyerarşik olarak test sonuçları içinde gezin
    for (const suite of data.suites) {
      if (!suite.suites) continue;

      for (const subsuite of suite.suites) {
        if (!subsuite.specs) continue;

        for (const spec of subsuite.specs) {
          const title = spec.title;
          const match = title.match(regex);

          if (match) {
            const issueKey = match[0];
            console.log(`➡️ Jira bilet bulundu: ${issueKey} için yorum hazırlanıyor...`);

            // Test sonucu durumu
            let testStatus = 'Bilinmiyor';
            if (spec.tests && spec.tests.length > 0) {
              const results = spec.tests[0].results;
              if (results && results.length > 0) {
                testStatus = results[0].status;  // passed / failed / skipped ...
              }
            }

            // Yorum metni - burada reportUrl kullanılacak, dikkat!
            const comment = `Otomasyon testi sonucu: **${testStatus}**\n\nTest raporu için: [Tıklayınız](${reportUrl})`;

            console.log('Yorum içeriği:', comment);

            // Jira'ya yorum ekle
            await jiraAddComment(issueKey, comment);

            console.log(`✅ ${issueKey} için yorum başarıyla eklendi.`);
            commentCount++;
          } else {
            console.log(`❗ Jira anahtarı bulunamadı: "${title}"`);
          }
        }
      }
    }

    console.log(`✅ Toplam ${commentCount} Jira bileti için yorum gönderildi.`);
  } catch (err) {
    console.error('❌ Hata:', err.message);
  }
})();
