import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// Jira ortam değişkenleri
const { JIRA_BASE_URL, JIRA_EMAIL, JIRA_API_TOKEN } = process.env;

// Jira bilet anahtarı ayıklama (örneğin: "EGT-1 - Başlık")
function extractIssueKey(title) {
  const regex = /([A-Z]+-\d+)/;
  const match = title?.match(regex);
  return match ? match[1] : null;
}

// Test sonuçlarını oku
function readTestResults(filePath) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`Test sonucu dosyası bulunamadı: ${fullPath}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(rawData);
}

// Jira'ya yorum gönder
async function addCommentToIssue(issueKey, comment) {
  const url = `${JIRA_BASE_URL}/rest/api/3/issue/${issueKey}/comment`;
  const auth = Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');

  const body = {
    body: {
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: comment
            }
          ]
        }
      ]
    }
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
      const errorText = await res.text();
      throw new Error(`Jira API hata kodu: ${res.status} - ${res.statusText} - ${errorText}`);
    }

    console.log(`${issueKey} için yorum başarıyla gönderildi.`);
  } catch (err) {
    console.error(`${issueKey} için yorum gönderilirken hata:`, err.message);
  }
}

// Ana işlem
async function main() {
  const resultsPath = './playwright-report/results.json';
  const results = readTestResults(resultsPath);

  for (const suite of results.suites) {
    for (const subsuite of suite.suites) {
      for (const spec of subsuite.specs) {
        const issueKey = extractIssueKey(spec.title);
        if (!issueKey) {
          console.warn(`Jira anahtarı bulunamadı: "${spec.title}"`);
          continue;
        }

        const testResult = spec.tests[0]?.results[0];
        const status = testResult?.status;
        const duration = testResult?.duration;

        const comment = `Test: ${spec.title}\nDurum: ${status}\nSüre: ${duration}ms`;
        await addCommentToIssue(issueKey, comment);
      }
    }
  }
}

main();
