require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const jiraBaseUrl = process.env.JIRA_BASE_URL;
const jiraEmail = process.env.JIRA_EMAIL;
const jiraApiToken = process.env.JIRA_API_TOKEN;
const jiraProjectKey = process.env.JIRA_PROJECT_KEY || 'EGT';
const testResultPath = './test-results.json'; // playwrigth.config.js'deki json reporter output dosya yolu

if (!jiraBaseUrl || !jiraEmail || !jiraApiToken) {
  console.error('❌ Lütfen .env dosyasına JIRA_BASE_URL, JIRA_EMAIL ve JIRA_API_TOKEN bilgilerini giriniz!');
  process.exit(1);
}

let testResults;
try {
  testResults = JSON.parse(fs.readFileSync(testResultPath, 'utf8'));
} catch (error) {
  console.error('❌ Test sonuç dosyası okunamadı:', error.message);
  process.exit(1);
}

const auth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

async function postComment(issueKey, message) {
  const url = `${jiraBaseUrl}/rest/api/3/issue/${issueKey}/comment`;

  try {
    await axios.post(
      url,
      {
        body: {
          type: "doc",
          version: 1,
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: message,
                },
              ],
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
    console.log(`✅ Yorum başarıyla eklendi: ${issueKey}`);
  } catch (error) {
    console.error(`❌ Yorum eklenemedi (${issueKey}):`, error.response?.data || error.message);
  }
}

// Recursive olarak tüm testleri bulur
function findTests(suite) {
  let tests = [];

  if (suite.tests) {
    tests = tests.concat(suite.tests);
  }

  if (suite.suites) {
    for (const subsuite of suite.suites) {
      tests = tests.concat(findTests(subsuite));
    }
  }

  return tests;
}

(async () => {
  const rootSuites = testResults.suites || [];

  if (rootSuites.length === 0) {
    console.warn('⚠️ Test sonuçlarında suite bulunamadı.');
    return;
  }

  for (const suite of rootSuites) {
    const allTests = findTests(suite);

    for (const test of allTests) {
      const testTitle = test.title || 'Başlıksız test';
      const status = test.results?.[0]?.status || 'unknown';

      const match = testTitle.match(new RegExp(`\\b${jiraProjectKey}-\\d+\\b`));
      if (!match) {
        console.log(`⚠️ Jira bilet anahtarı bulunamadı test başlığında: "${testTitle}"`);
        continue;
      }

      const issueKey = match[0];
      const comment = `Otomasyon Test Sonucu:\n${testTitle} → ${status.toUpperCase()}`;

      console.log(`➡️ Jira biletine yorum gönderiliyor: ${issueKey} - Durum: ${status}`);
      await postComment(issueKey, comment);
    }
  }

  console.log('🎉 Tüm test sonuçları işlendi.');
})();
