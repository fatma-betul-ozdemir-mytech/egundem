const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const JIRA_BASE_URL = 'https://mytechteknoloji-team.atlassian.net';
const JIRA_EMAIL = 'fatmabetul.ozdemir@mytechteknoloji.com';
const JIRA_API_TOKEN = 'ATATT3xFfGF09NxbGu6iJHjwP6txJHWIckxQmdiBhk45aMnLmIJPC74ly4_n1JBLaDVqYrQF8pRUiKBSDKoGK7qtYFdlBxcflw30D7z39kmaMxCqdH32gChyTiTCmOccVQwXrfIoVyL9Zc36JOpJFYzK3l1pYJMHL6itJEO3aORqMlhIyuu5npk..';
const JIRA_PROJECT_KEY = 'EGT';

async function sendJiraComment(issueKey, comment) {
  const url = `${JIRA_BASE_URL}/rest/api/3/issue/${issueKey}/comment`;

  const auth = Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');

  const body = {
    body: comment,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Jira comment gönderilemedi: ${res.status} ${res.statusText} - ${errorText}`);
  }

  console.log(`Jira issue ${issueKey} için yorum gönderildi.`);
}

async function sendAllTestResultsToJira() {
  const reportPath = path.join(__dirname, 'playwright-report', 'results.json');
  const content = fs.readFileSync(reportPath, 'utf-8');
  const reportJson = JSON.parse(content);

  for (const suite of reportJson.suites) {
    if (!suite.suites) continue;
    for (const subSuite of suite.suites) {
      if (!subSuite.specs) continue;
      for (const spec of subSuite.specs) {
        const testTitle = spec.title; // Örnek: "EGT-1 - Page should load successfully"
        const testStatus = spec.ok ? 'Passed ✅' : 'Failed ❌';
        // Jira issue anahtarını baştan alıyoruz
        const issueKey = testTitle.split(' ')[0]; // "EGT-1"

        if (!issueKey.startsWith(JIRA_PROJECT_KEY)) {
          console.log(`Test başlığı Jira key formatında değil: ${testTitle}, atlandı.`);
          continue;
        }

        const comment = `
Otomasyon testi sonucu:
**Test:** ${testTitle}
**Sonuç:** ${testStatus}
        `;

        try {
          await sendJiraComment(issueKey, comment);
        } catch (e) {
          console.error(`Jira'ya yorum gönderirken hata: ${e.message}`);
        }
      }
    }
  }
}

sendAllTestResultsToJira();
