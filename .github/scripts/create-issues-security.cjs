import { Octokit } from "@octokit/rest";
import fs from "fs";
import path from "path";

// 1. Rapor dosyalarının yolları
const reports = {
  trivy: path.join(process.cwd(), "trivy_report.txt"),
  semgrep: path.join(process.cwd(), "semgrep_report.json"),
  nikto: path.join(process.cwd(), "nikto_report.txt"),
  nuclei: path.join(process.cwd(), "nuclei_report.txt"),
};

// 2. Octokit ayarları
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

// 3. Raporları oku ve kritik bulguları topla
function parseReport(tool, filePath) {
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, "utf8");
  const issues = [];

  if (tool === "trivy") {
    // Trivy raporundaki HIGH ve CRITICAL bulgular
    content.split("\n").forEach(line => {
      if (line.includes("HIGH") || line.includes("CRITICAL")) {
        issues.push(line.trim());
      }
    });
  } else if (tool === "semgrep") {
    // Semgrep JSON rapor
    const data = JSON.parse(content);
    data.results?.forEach(r => {
      if (["ERROR", "WARNING"].includes(r.severity.toUpperCase())) {
        issues.push(`${r.check_id}: ${r.message}`);
      }
    });
  } else if (tool === "nikto" || tool === "nuclei") {
    content.split("\n").forEach(line => {
      if (line) issues.push(line.trim());
    });
  }

  return issues;
}

// 4. Tüm araçlar için issue’ları oluştur
(async () => {
  for (const [tool, filePath] of Object.entries(reports)) {
    const findings = parseReport(tool, filePath);
    if (findings.length === 0) continue;

    const title = `[Security Alert] ${tool} bulguları (${findings.length})`;
    const body = `
**Araç:** ${tool}
**Bulgular (${findings.length}):**
${findings.map(f => `- ${f}`).join("\n")}
**Detaylar:** ${process.env.REPORT_URL || "Rapor linki yok"}
`;

    // Mevcut benzer açık var mı kontrol et
    const { data: issues } = await octokit.issues.listForRepo({
      owner,
      repo,
      state: "open",
      labels: "security",
    });

    const existingIssue = issues.find(issue => issue.title.includes(tool));
    if (!existingIssue) {
      await octokit.issues.create({
        owner,
        repo,
        title,
        body,
        labels: ["security"],
      });
      console.log(`✅ Yeni issue oluşturuldu: ${title}`);
    } else {
      await octokit.issues.createComment({
        owner,
        repo,
        issue_number: existingIssue.number,
        body: `Yeni bulgular:\n${body}`,
      });
      console.log(`ℹ️ Mevcut issue güncellendi: #${existingIssue.number}`);
    }
  }
})();
