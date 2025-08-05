const fs = require("fs");
const path = require("path");
const { Octokit } = require("@octokit/rest");

const reportPath = path.join(process.cwd(), "zap_report.json");
if (!fs.existsSync(reportPath)) {
  console.error("ZAP raporu bulunamadı.");
  process.exit(0);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
const alerts = report.site?.[0]?.alerts || [];

if (alerts.length === 0) {
  console.log("ZAP raporunda güvenlik açığı bulunmadı.");
  process.exit(0);
}

// GitHub Issue oluştur
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

const issueTitle = `🚨 ZAP Güvenlik Açığı (${alerts.length} tespit)`;
const issueBody = alerts.map(alert =>
  `- ${alert.alert} (${alert.riskdesc}): ${alert.desc}`
).join("\n");

(async () => {
  await octokit.rest.issues.create({
    owner,
    repo,
    title: issueTitle,
    body: issueBody,
    labels: ["security", "zap"]
  });
})();
