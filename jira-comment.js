const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Env değişkenleri
const jiraBaseUrl = process.env.JIRA_BASE_URL;
const jiraEmail = process.env.JIRA_EMAIL;
const jiraApiToken = process.env.JIRA_API_TOKEN;
const jiraProjectKey = process.env.JIRA_PROJECT_KEY || 'EGT';
const reportUrl = process.env.REPORT_URL || 'Rapor linki belirtilmedi';

console.log('🌟 Ortam Değişkenleri Durumu:', {
  jiraBaseUrl: jiraBaseUrl ? 'OK' : 'MISSING!',
  jiraEmail: jiraEmail ? 'OK' : 'MISSING!',
  jiraApiToken: jiraApiToken ? 'OK' : 'MISSING!',
  jiraProjectKey,
  reportUrl,
});

const testResultPath = path.resolve('./playwright-report/results.json');
const auth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

// Test sonucu dosyasını oku
let testResults;
try {
  testResults = JSON.parse(fs.readFileSync(testResultPath, 'utf8'));
  console.log('📂 Test sonuç dosyası başarıyla okundu:', testResultPath);
} catch (err) {
  console.error('❌ Test sonucu dosyası okunamadı:', err.message);
  process.exit(1);
}

async function postComment(issueKey, message) {
  const url = `${jiraBaseUrl}/rest/api/3/issue/${issueKey}/comment`;
  console.log(`➡️ Yorum URL'si: ${url}`);

  try {
    const response = await axios.post(
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
    console.log(`✅ ${issueKey} için yorum eklendi. Response status: ${response.status}`);
  } catch (error) {
    console.error(`❌ ${issueKey} için yorum eklenemedi:`, error.response ? error.response.data : error.message);
  }
}

(async () => {
  if (!testResults.suites || testResults.suites.length === 0) {
    console.warn('⚠️ Test sonuçlarında "suites" bulunamadı.');
    return;
  }

  for (const suite of testResults.suites) {
    if (!suite.specs) continue;

    for (const spec of suite.specs) {
      if (!spec.tests) continue;

      for (const test of spec.tests) {
        const testTitle = Array.isArray(test.title) ? test.title.join(' ') : test.title || '';
        const status = test.results?.[0]?.status || 'unknown';

        console.log('🔎 Test başlığı:', testTitle);

        const match = testTitle.match(new RegExp(`\\b${jiraProjectKey}-\\d+\\b`));
        if (!match) {
          console.log(`⚠️ Jira bileti bulunamadı test başlığında: "${testTitle}"`);
          continue;
        }

        const issueKey = match[0];
        const comment = `🔍 **Test Sonucu**\n\n- Başlık: *${testTitle}*\n- Durum: **${status.toUpperCase()}**\n- [📄 Raporu Görüntüle](${reportUrl})`;

        console.log(`💬 Yorum gönderiliyor: ${issueKey}`);
        await postComment(issueKey, comment);
      }
    }
  }

  console.log('✅ Tüm Jira yorumları tamamlandı.');
})();
