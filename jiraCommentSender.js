// jiraCommentSender.js

require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const JIRA_BASE_URL = process.env.JIRA_BASE_URL;
const JIRA_EMAIL = process.env.JIRA_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_PROJECT_KEY = process.env.JIRA_PROJECT_KEY;

// Jira API için auth header oluştur
const authHeader = 'Basic ' + Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');

// Playwright JSON rapor dosya yolu
const reportPath = path.resolve(__dirname, 'playwright-report', 'results.json');

if (!JIRA_BASE_URL || !JIRA_EMAIL || !JIRA_API_TOKEN || !JIRA_PROJECT_KEY) {
  console.error('Lütfen .env dosyanızda JIRA_BASE_URL, JIRA_EMAIL, JIRA_API_TOKEN ve JIRA_PROJECT_KEY değerlerini tanımlayın.');
  process.exit(1);
}

async function sendComment(issueKey, commentBody) {
  const url = `${JIRA_BASE_URL}/rest/api/3/issue/${issueKey}/comment`;

  const body = {
    body: commentBody
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Jira API hata: ${response.status} ${response.statusText} - ${text}`);
    }

    console.log(`Jira'ya ${issueKey} için yorum başarıyla gönderildi.`);
  } catch (err) {
    console.error(`Jira'ya yorum gönderirken hata: ${err.message}`);
  }
}

function extractIssueKey(title) {
  // Örneğin "EGT-3 - Forms should submit correctly" başlığından EGT-3 çıkar
  const regex = new RegExp(`${JIRA_PROJECT_KEY}-\\d+`, 'i');
  const match = title.match(regex);
  return match ? match[0].toUpperCase() : null;
}

async function main() {
  if (!fs.existsSync(reportPath)) {
    console.error(`Playwright raporu bulunamadı: ${reportPath}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(reportPath, 'utf-8');
  const report = JSON.parse(rawData);

  // Playwright raporunda testler "suites" içinde yer alıyor.
  // Her testin başlığı içinde issue key var (EGT-1, EGT-2 gibi)
  const tests = [];

  function traverseSuites(suites) {
    suites.forEach(suite => {
      if (suite.specs && suite.specs.length) {
        suite.specs.forEach(spec => {
          if (spec.tests && spec.tests.length) {
            spec.tests.forEach(test => {
              tests.push({
                title: test.title,
                ok: test.ok,
                file: spec.file,
                line: test.line,
                duration: test.results && test.results.length > 0 ? test.results[0].duration : 0,
                errors: test.results && test.results.length > 0 ? test.results[0].errors : []
              });
            });
          }
      });
      }
      if (suite.suites && suite.suites.length) {
        traverseSuites(suite.suites);
      }
    });
  }

  traverseSuites(report.suites);

  for (const test of tests) {
    const issueKey = extractIssueKey(test.title);
    if (!issueKey) {
      console.log(`Issue key bulunamadı test başlığında: ${test.title}`);
      continue;
    }

    const status = test.ok ? 'BAŞARILI' : 'BAŞARISIZ';
    const errorMessages = (test.errors && test.errors.length > 0)
      ? test.errors.map(e => e.message || JSON.stringify(e)).join('\n')
      : '';

    const comment = 
      `Otomasyon Test Sonucu: **${status}**\n` +
      `Test Başlığı: ${test.title}\n` +
      `Dosya: ${test.file}\n` +
      `Süre (ms): ${test.duration}\n` +
      (errorMessages ? `Hata Mesajı:\n${errorMessages}\n` : '');

    await sendComment(issueKey, comment);
  }
}

main();
