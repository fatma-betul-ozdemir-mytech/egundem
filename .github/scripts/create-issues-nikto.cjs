// create-issues-trivy.cjs
const fs = require("fs");
const path = require("path");
const { Octokit } = require("@octokit/rest");

const reportPath = path.join(process.cwd(), "trivy-report.json");
if (!fs.existsSync(reportPath)) {
  console.log("❌ Trivy raporu bulunamadı.");
  process.exit(0);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf-8"));
const findings = report.flatMap(r => r.Vulnerabilities || []);

if (findings.length === 0) {
  console.log("✅ Güvenlik açığı yok (Trivy).");
  process.exit(0);
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

(async () => {
  for (const vuln of findings) {
    const issueTitle = `[Trivy] ${vuln.Severity} - ${vuln.VulnerabilityID}`;
    const issueBody = `
**Paket:** ${vuln.PkgName}
**Versiyon:** ${vuln.InstalledVersion}
**Açıklık:** ${vuln.VulnerabilityID}
**Şiddet:** ${vuln.Severity}
**Açıklama:** ${vuln.Title || vuln.Description || "Yok"}
**Kaynak:** ${vuln.PrimaryURL || "Yok"}

🔗 Detaylı rapor: ${process.env.REPORT_URL}
`;

    await octokit.rest.issues.create({
      owner,
      repo,
      title: issueTitle,
      body: issueBody,
      labels: ["trivy", "security"]
    });

    console.log(`✅ Issue oluşturuldu: ${issueTitle}`);
  }
})();
