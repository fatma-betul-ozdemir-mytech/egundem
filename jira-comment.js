// Trigger workflow - test
// jira-comment.js
const axios = require('axios');
const fs = require('fs');

// Gerekli environment değişkenlerini al
const jiraBaseUrl = process.env.JIRA_BASE_URL;
const jiraEmail = process.env.JIRA_EMAIL;
const jiraApiToken = process.env.JIRA_API_TOKEN;
const jiraProjectKey = process.env.JIRA_PROJECT_KEY || 'EGT'; // Örn: EGT

const testResultPath = './playwright-report/results.json'; // Playwright JSON çıktısı
const auth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

// Test sonuçlarını oku
const testResults = JSON.parse(fs.readFileSync(testResultPath, 'utf8'));

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

// Her bir testi bir Jira ticket ile eşle
(async () => {
  for (const result of testResults.suites.flatMap(s => s.specs)) {
    const testTitle = result.tests[0].title;
    const status = result.tests[0].results[0].status;
    const jiraKeyMatch = testTitle.match(/\bEGT-\d+\b/); // Başlıkta EGT-1 gibi bir ID varsa

    if (jiraKeyMatch) {
      const jiraKey = jiraKeyMatch[0];
      const comment = `🔎 Otomasyon Test Sonucu:\n**${testTitle}** → ${status.toUpperCase()}`;
      await postComment(jiraKey, comment);
    }
  }
})();