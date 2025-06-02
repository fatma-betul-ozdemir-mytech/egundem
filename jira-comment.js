const fs = require('fs');
const axios = require('axios');

const jiraUser = process.env.JIRA_USER;
const jiraToken = process.env.JIRA_TOKEN;
const jiraBaseUrl = process.env.JIRA_BASE_URL;
const reportUrl = 'https://fatma-betul-ozdemir-mytech.github.io/egundem/';

// 1. Rapor dosyasını oku
const report = JSON.parse(fs.readFileSync('playwright-report/results.json', 'utf-8'));

// 2. Test açıklamalarında ticket numaralarını ara (örneğin: EGT-21)
const ticketSet = new Set();
for (const suite of report.suites) {
  for (const test of suite.specs) {
    for (const t of test.tests) {
      if (t.title) {
        const matches = t.title.join(' ').match(/EGT-\d+/g);
        if (matches) {
          matches.forEach(id => ticketSet.add(id));
        }
      }
    }
  }
}

// 3. Jira yorum içeriği
const commentBody = {
  body: `✅ Otomasyon test sonucu: [Test Raporu](${reportUrl})`
};

// 4. Her Jira ticket'ına yorum gönder
(async () => {
  for (const ticketId of ticketSet) {
    try {
      const response = await axios.post(
        `${jiraBaseUrl}/rest/api/2/issue/${ticketId}/comment`,
        commentBody,
        {
          auth: {
            username: jiraUser,
            password: jiraToken
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(`✅ ${ticketId} için yorum başarıyla eklendi.`);
    } catch (error) {
      console.error(`❌ ${ticketId} için yorum eklenemedi: ${error.response?.data?.errorMessages || error.message}`);
    }
  }
})();
