const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const path = require("path");

// Rapor dosyasının yolu
const reportPath = path.join(process.cwd(), "load-report.json");

if (!fs.existsSync(reportPath)) {
  console.error("❌ Rapor dosyası bulunamadı:", reportPath);
  process.exit(0);
}

// JSON raporu oku
let report;
try {
  const raw = fs.readFileSync(reportPath, "utf8");
  report = JSON.parse(raw);
} catch (err) {
  console.error("❌ Rapor okunamadı:", err.message);
  process.exit(0);
}

// Hataları ve özet bilgileri al
const errors = report?.aggregate?.errors || [];
const summary = report?.aggregate?.summaries || {};

if (errors.length === 0) {
  console.log("✅ Artillery testlerinde hata bulunamadı.");
  process.exit(0);
}

// GitHub ayarları
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: "Artillery Reporter v1.0",
});

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

const issueTitle = `🚨 Artillery Load Test Hatası (${errors.length} adet)`;
const issueBody = `
**Artillery yük testi sırasında hatalar oluştu.**

🔗 **Rapor:** ${process.env.REPORT_URL}

### Hatalar:
${errors.map(e => `- ${e.code || JSON.stringify(e)}`).join("\n")}

### Test Özeti:
- Toplam istek: ${summary?.requestsCompleted || "N/A"}
- Başarılı istek: ${summary?.requestsCompleted - errors.length || "N/A"}
- Ortalama gecikme (ms): ${summary?.latency?.median || "N/A"}

📦 Action çalışması: https://github.com/${owner}/${repo}/actions/runs/${process.env.GITHUB_RUN_ID}
`;

(async () => {
  try {
    await octokit.rest.issues.create({
      owner,
      repo,
      title: issueTitle,
      body: issueBody,
      labels: ["load-test", "artillery", "ci-failure"],
    });
    console.log(`✅ Yeni issue oluşturuldu: ${issueTitle}`);
  } catch (error) {
    console.error(`❌ Issue oluşturulamadı: ${error.message}`);
    if (error.status === 403) {
      console.log("⚠️ GITHUB_TOKEN yetkisi yetersiz olabilir.");
    }
    process.exit(1);
  }
})();
