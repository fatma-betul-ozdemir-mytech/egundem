const fs = require('fs');
const axios = require('axios');

const jiraUser = process.env.JIRA_EMAIL;
const jiraToken = process.env.JIRA_API_TOKEN;
const jiraBaseUrl = process.env.JIRA_BASE_URL;
const reportUrl = process.env.REPORT_URL;

const report = JSON.parse(fs.readFileSync('playwright-report/results.json', 'utf-8'));

const ticketSet = new Set();

for (const testResult of report.tests) {
  const matches = testResult.title.match(/EGT-\d+/g);
  if (matches) {
    matches.forEach(id => ticketSet.add(id));
  }
}

const commentBody = {
  body: `✅ Otomasyon test sonucu: [Test Raporu](${reportUrl})`
};

(async function main() {
  for (const ticketId of ticketSet) {
    try {
      await axios.post(
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
