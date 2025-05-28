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

  for (const suite of testResults.suites) {
    if (!suite.specs) continue;

    for (const spec of suite.specs) {
      if (!spec.tests || spec.tests.length === 0) continue;

      for (const test of spec.tests) {
        if (!test.results || test.results.length === 0) continue;

        const testTitle = test.title || 'Başlıksız test';
        const status = test.results[0].status || 'unknown';
        const jiraKeyMatch = testTitle.match(new RegExp(`\\b${jiraProjectKey}-\\d+\\b`));

        if (jiraKeyMatch) {
          const jiraKey = jiraKeyMatch[0];
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
