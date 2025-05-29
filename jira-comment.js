const axios = require('axios');
const fs = require('fs');

// Environment değişkenleri
const jiraBaseUrl = process.env.JIRA_BASE_URL;
const jiraEmail = process.env.JIRA_EMAIL;
const jiraApiToken = process.env.JIRA_API_TOKEN;
const jiraProjectKey = process.env.JIRA_PROJECT_KEY || 'EGT'; // Örn: EGT

const testResultPath = './playwright-report/results.json'; // Playwright JSON çıktısı
const auth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

// Test sonuçlarını oku
let testResults;
try {
  testResults = JSON.parse(fs.readFileSync(testResultPath, 'utf8'));
} catch (err) {
  console.error('❌ Test sonuç dosyası okunamadı:', err.message);
  process.exit(1);
}

async function postComment(issueKey, message) {
  const url = `${jiraBaseUrl}/rest/api/3/issue/${issueKey}/comment`;

  try {
    await axios.post(
      url,
      { body: message },
      {
        headers: {
          Authorization: `Basic ${auth}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(`✅ Yorum başarıyla eklendi: ${issueKey}`);
  } catch (error) {
    console.error(`❌ Yorum eklenemedi (${issueKey}):`, error.response?.data || error.message);
  }
}

(async () => {
  if (!testResults.suites || testResults.suites.length === 0) {
    console.warn('⚠️ Test sonuçlarında suite bulunamadı.');
    return;
  }

  for (const topSuite of testResults.suites) {
    if (!topSuite.suites) continue;

    for (const innerSuite of topSuite.suites) {
      if (!innerSuite.specs) continue;

      for (const spec of innerSuite.specs) {
        const testTitle = spec.title || 'Başlıksız test';
        const jiraKeyMatch = testTitle.match(new RegExp(`\\b${jiraProjectKey}-\\d+\\b`, 'i'));

        if (jiraKeyMatch) {
          const jiraKey = jiraKeyMatch[0];
          // Test sonucu alınır, varsa ilk testin ilk sonucuna bakılır
          let status = 'unknown';
          if (spec.tests && spec.tests.length > 0 && spec.tests[0].results && spec.tests[0].results.length > 0) {
            status = spec.tests[0].results[0].status;
          }

          const comment = `🔎 Otomasyon Test Sonucu:\n**${testTitle}** → ${status.toUpperCase()}`;
          console.log(`➡️ Jira biletine yorum gönderiliyor: ${jiraKey} - Durum: ${status}`);
          await postComment(jiraKey, comment);
        } else {
          console.log(`⚠️ Jira bilet anahtarı bulunamadı test başlığında: "${testTitle}"`);
        }
      }
    }
  }

  console.log('🎉 Tüm test sonuçları işlendi.');
})();
