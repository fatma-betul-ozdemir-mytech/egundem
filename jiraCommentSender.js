// jiraCommentSender.js

const fetch = require('node-fetch');  // <-- Bunu ekle, fetch kullanımı için

const fs = require('fs');
const path = require('path');

const JIRA_BASE_URL = process.env.JIRA_BASE_URL;
const JIRA_EMAIL = process.env.JIRA_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_PROJECT_KEY = process.env.JIRA_PROJECT_KEY;

const resultsPath = path.join(__dirname, 'playwright-report', 'results.json');

async function sendCommentToJira(issueKey, comment) {
  const url = `${JIRA_BASE_URL}/rest/api/3/issue/${issueKey}/comment`;

  const auth = Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body: comment }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${await response.text()}`);
    }

    console.log(`Jira'ya yorum gönderildi: ${issueKey}`);
  } catch (error) {
    console.error(`Jira'ya yorum gönderirken hata: ${error.message}`);
  }
}

function parseAndSendComments() {
  if (!fs.existsSync(resultsPath)) {
    console.error(`Sonuç dosyası bulunamadı: ${resultsPath}`);
    return;
  }

  const data = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));

  // Burada, tüm test suite ve test sonuçları üzerinden geçerek bilet numarasına göre yorum gönderiyoruz
  data.suites.forEach(suite => {
    if (!suite.suites) return;
    suite.suites.forEach(innerSuite => {
      if (!innerSuite.specs) return;
      innerSuite.specs.forEach(testCase => {
        const issueKeyMatch = testCase.title.match(new RegExp(`(${JIRA_PROJECT_KEY}-\\d+)`));
        if (!issueKeyMatch) return;

        const issueKey = issueKeyMatch[1];

        const testResult = testCase.tests[0];
        const status = testResult.status;
        const duration = testResult.results[0].duration;

        const comment = `Test sonucu: ${status.toUpperCase()}\nTest süresi: ${duration} ms\nTest başlığı: ${testCase.title}`;

        sendCommentToJira(issueKey, comment);
      });
    });
  });
}

parseAndSendComments();
