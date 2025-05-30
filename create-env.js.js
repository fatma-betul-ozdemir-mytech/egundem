const fs = require('fs');

const envContent = `JIRA_BASE_URL=https://mytechteknoloji-team.atlassian.net
JIRA_EMAIL=fatmabetul.ozdemir@mytechteknoloji.com
JIRA_API_TOKEN=buraya_token_gir
JIRA_PROJECT_KEY=EGT`;

fs.writeFileSync('.env', envContent, { encoding: 'utf8' });
console.log('✅ .env dosyası başarıyla oluşturuldu.');
