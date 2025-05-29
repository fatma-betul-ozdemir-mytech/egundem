require('dotenv').config(); // .env kullanıyorsan

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const jiraBaseUrlRaw = process.env.JIRA_BASE_URL;
const jiraEmail = process.env.JIRA_EMAIL;
const jiraApiToken = process.env.JIRA_API_TOKEN;
const jiraProjectKey = process.env.JIRA_PROJECT_KEY || 'EGT';

if (!jiraBaseUrlRaw || !jiraEmail || !jiraApiToken) {
  console.error('❌ Lütfen .env dosyasına JIRA_BASE_URL, JIRA_EMAIL ve JIRA_API_TOKEN bilgilerini giriniz!');
  process.exit(1);
}

// Jira base URL sonundaki slash'ları kaldırıyoruz (örnek: https://mytechteknoloji-team.atlassian.net)
const jiraBaseUrl = jiraBaseUrlRaw.replace(/\/+$/, '');

const testResultPath = path.resolve(__dirname, './playwright-report/results.json');

const auth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

let testResults;
try {
  const jsonData = fs.readFileSync(testResultPath, 'utf8');
  testResults = JSON.parse(jsonData);
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
    const errMsg = error.response?.data || error.message;
    console.error(`❌ Yorum eklenemedi (${issueKey}):`, errMsg);
  }
}

(async () => {
  if (!testResults.suites || testResults.suites.length === 0) {
    console.warn('⚠️ Test sonuçlarında suite bulunamadı.');
    return;
  }

  for (const suite of testResults.suites) {
    // Playwright JSON raporundaki yapıya göre:
    // Suites içinde ya specs ya da alt suites olabilir, dolayısıyla recursive parse etmek gerekebilir.

    // Burada recursive fonksiyonla parse edeceğiz:
    async function processSuite(suite) {
      if (suite.specs && suite.specs.length > 0) {
        for (const spec of suite.specs) {
          if (!spec.tests || spec.tests.length === 0) continue;

          for (const test of spec.tests) {
            if (!test.results || test.results.length === 0) continue;

            const testTitle = test.title || 'Başlıksız test';
            // Jira bilet anahtarı regex'i (örn: EGT-1, EGT-25)
            const jiraKeyMatch = testTitle.match(new RegExp(`\\b${jiraProjectKey}-\\d+\\b`));

            if (jiraKeyMatch) {
              const jiraKey = jiraKeyMatch[0];
              // Playwright test sonucu status bilgisi
              const status = test.results[0].status || 'unknown';
              const comment = `🔎 Otomasyon Test Sonucu:\n**${testTitle}** → ${status.toUpperCase()}`;

              console.log(`➡️ Jira biletine yorum gönderiliyor: ${jiraKey} - Durum: ${status}`);
              await postComment(jiraKey, comment);
            } else {
              console.log(`⚠️ Jira bilet anahtarı bulunamadı test başlığında: "${testTitle}"`);
            }
          }
        }
      }

      if (suite.suites && suite.suites.length > 0) {
        for (const innerSuite of suite.suites) {
          await processSuite(innerSuite);
        }
      }
    }

    await processSuite(suite);
  }

  console.log('🎉 Tüm test sonuçları işlendi.');
})();
