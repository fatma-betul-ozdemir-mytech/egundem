// create-issues-semgrep.cjs
const fs = require("fs");
const path = require("path");
const { Octokit } = require("@octokit/rest");

const reportPath = path.join(process.cwd(), "semgrep-results.json");
if (!fs.existsSync(reportPath)) {
  console.log("❌ Semgrep raporu bulunamadı.");
  process.exit(0);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf-8"));
const findings = report.results || [];

if (findings.length === 0) {
  console.log("✅ Hiç güvenlik sorunu bulunamadı (Semgrep).");
  process.exit(0);
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

(async () => {
  for (const finding of findings) {
    const issueTitle = `[Semgrep] ${finding.check_id} - ${finding.path}`;
    const issueBody = `
**Kural:** ${finding.check_id}
**Dosya:** ${finding.path}
**Satır:** ${finding.start.line}
**Mesaj:** ${finding.extra.message}
**Kod Örneği:**
\`\`\`
${finding.extra.lines}
\`\`\`

🔗 Detaylı rapor: ${process.env.REPORT_URL}
`;

    await octokit.rest.issues.create({
      owner,
      repo,
      title: issueTitle,
      body: issueBody,
      labels: ["semgrep", "security"]
    });

    console.log(`✅ Issue oluşturuldu: ${issueTitle}`);
  }
})();
