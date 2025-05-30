import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// .env dosyasını yükle
dotenv.config();

const JIRA_BASE_URL = process.env.JIRA_BASE_URL;
const JIRA_EMAIL = process.env.JIRA_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_PROJECT_KEY = process.env.JIRA_PROJECT_KEY;

if (!JIRA_BASE_URL || !JIRA_EMAIL || !JIRA_API_TOKEN || !JIRA_PROJECT_KEY) {
  console.error('Lütfen tüm JIRA ortam değişkenlerini .env dosyanıza doğru şekilde ekleyin!');
  process.exit(1);
}

const RESULTS_PATH = path.resolve('playwright-report', 'results.json');

function extractIssueKey(title) {
  if (!title || typeof title !== 'string') return null;
  const regex = new RegExp(`${JIRA_PROJECT_KEY}-\\d+`, 'i');
  const match = title.match(regex);
  return match ? match[0].toUpperCase() : null;
}

async function addCommentToIssue(issueKey, comment) {
  const url = `${JIRA_BASE_URL}/rest/api/3/issue/${issueKey}/comment`;
  const auth = Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');

  const body = {
    body: comment,
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(`Jira API hata kodu: ${res.status} - ${res.statusText} - ${errorBody}`);
    }

    console.log(`${issueKey} için yorum başarıyla gönderildi.`);
  } catch (err) {
    console.error(`${issueKey} için yorum gönderilirken hata:`, err.message);
  }
}

function formatTestResult(test) {
  const status = test.ok ? 'Başarılı' : 'Başarısız';
  let errorMessage = '';

  if (!test.ok && test.results) {
    const failedResult = test.results.find(r => r.status !== 'passed');
    if (failedResult && failedResult.errors && failedResult.errors.length > 0) {
      errorMessage = `\nHata: ${failedResult.errors.map(e => e.message || e.text || '').join('\n')}`;
    }
  }

  return `- ${test.title} : **${status}**${errorMessage}`;
}

async function main() {
  if (!fs.existsSync(RESULTS_PATH)) {
    console.error(`Sonuç dosyası bulunamadı: ${RESULTS_PATH}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(RESULTS_PATH, 'utf-8');
  let jsonData;

  try {
    jsonData = JSON.parse(rawData);
  } catch (err) {
    console.error('Sonuç JSON dosyası parse edilirken hata:', err.message);
    process.exit(1);
  }

  if (!jsonData.suites || jsonData.suites.length === 0) {
    console.error('JSON dosyasında "suites" bulunamadı veya boş.');
    process.exit(1);
  }

  // Tüm testleri düzleştiriyoruz
  const tests = [];

  function extractTestsFromSuites(suites) {
    suites.forEach(suite => {
      if (suite.specs && suite.specs.length) {
        suite.specs.forEach(test => {
          if (test.title) tests.push(test);
        });
      }
      if (suite.suites && suite.suites.length) {
        extractTestsFromSuites(suite.suites);
      }
    });
  }

  extractTestsFromSuites(jsonData.suites);

  if (tests.length === 0) {
    console.error('JSON dosyasında hiç test bulunamadı.');
    process.exit(1);
  }

  // Her test için jira bilet anahtarını çıkar ve sonuç mesajı hazırla
  for (const test of tests) {
    const issueKey = extractIssueKey(test.title);
    if (!issueKey) {
      console.log(`Test başlığında Jira bileti bulunamadı, atlanıyor: ${test.title}`);
      continue;
    }

    const comment = `Playwright otomasyon testi sonucu:\n${formatTestResult(test)}`;

    await addCommentToIssue(issueKey, comment);
  }
}

main();
