require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const jiraBaseUrl = process.env.JIRA_BASE_URL;
const jiraEmail = process.env.JIRA_EMAIL;
const jiraApiToken = process.env.JIRA_API_TOKEN;
const jiraProjectKey = process.env.JIRA_PROJECT_KEY || 'EGT';
const reportUrl = process.env.REPORT_URL;
const testResultPath = './playwright-report/results.json';
const auth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

// Gerekli bilgiler var mı kontrol et
if (!jiraBaseUrl || !jiraEmail || !jiraApiToken || !reportUrl) {
  console.error('❌ .env dosyasında eksik bilgi var. Lütfen kontrol edin!');
  process.exit(1);
}

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
      { body: { type: "plain_text", content: message } },
      {
        headers: {
          Authorization: `Basic ${auth}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(`✅ Yorum eklendi: ${issueKey}`);
  } catch (error) {
    console.error(`❌ Yorum eklenemedi (${issueKey}):`, error.response?.data || error.message);
  }
}

(async () => {
  const allSuites = testResults.suites || [];
  if (allSuites.length === 0) {
    console.warn('⚠️ Test sonuçlarında suite bulunamadı.');
    return;
  }

  for (const suite of allSuites) {
    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        const testTitle = test.title || 'Başlıksız test';
        const status = test.results?.[0]?.status || 'unknown';
        const match = testTitle.match(new RegExp(`\\b${jiraProjectKey}-\\d+\\b`));

        if (match) {
          const issueKey = match[0];
          const comment = `🔎 *Otomasyon Test Sonucu:*\n📌 *${testTitle}* → **${status.toUpperCase()}**\n\n🧪 [Detaylı rapor için tıklayın](${reportUrl})`;
          console.log(`➡️ Jira yorum gönderiliyor: ${issueKey} - Durum: ${status}`);
          await postComment(issueKey, comment);
        } else {
          console.log(`⚠️ Jira bilet anahtarı bulunamadı: "${testTitle}"`);
        }
      }
    }
  }

  console.log('🎉 Tüm test sonuçları işlendi.');
})();
