require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const jiraBaseUrl = process.env.JIRA_BASE_URL;
const jiraEmail = process.env.JIRA_EMAIL;
const jiraApiToken = process.env.JIRA_API_TOKEN;
const jiraProjectKey = process.env.JIRA_PROJECT_KEY || 'EGT';
const testResultPath = './playwright-report/results.json';
const reportLink = 'https://fatma-betul-ozdemir-mytech.github.io/egundem/'; // GitHub Pages linkin

const auth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

if (!jiraBaseUrl || !jiraEmail || !jiraApiToken) {
  console.error('❌ .env dosyasındaki bilgileri kontrol edin!');
  process.exit(1);
}

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
      {
        body: {
          type: 'doc',
          version: 1,
          content: [
            {
              type: 'paragraph',
              content: [{ type: 'text', text: message }],
            },
          ],
        },
      },
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
    console.error(`❌ Yorum hatası (${issueKey}):`, error.response?.data || error.message);
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
          const message = `🔍 *Otomasyon Test Sonucu*\n- Senaryo: ${testTitle}\n- Durum: **${status.toUpperCase()}**\n📄 Detaylı rapor: ${reportLink}`;
          console.log(`➡️ Jira'ya gönderiliyor: ${issueKey}`);
          await postComment(issueKey, message);
        } else {
          console.log(`⚠️ Jira anahtarı bulunamadı: "${testTitle}"`);
        }
      }
    }
  }

  console.log('🎉 Tüm yorumlar gönderildi.');
})();
