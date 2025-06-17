const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const path = require("path");

// ✅ Güncellenmiş dosya yolu
const reportPath = path.resolve(process.cwd(), "test-results", "test-results.json");
if (!fs.existsSync(reportPath)) {
  console.error("❗️ Rapor dosyası bulunamadı:", reportPath);
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));

const failedTests = [];

function extractFailedTests(suites) {
  if (!suites || !Array.isArray(suites)) return;

  suites.forEach(suite => {
    if (suite.tests) {
      suite.tests.forEach(test => {
        if (test.status === "failed") {
          failedTests.push({
            name: test.title,
            file: suite.file || "Bilinmeyen dosya",
            error: test.results?.[0]?.error?.message || "Hata mesajı yok",
          });
        }
      });
    }
    if (suite.suites) extractFailedTests(suite.suites);
  });
}

extractFailedTests(report.suites);

if (failedTests.length === 0) {
  console.log("✅ Başarısız test yok.");
  process.exit(0);
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// Hedef repo bilgileri
const owner = "mytech-technology";      // 🔁 GitHub organizasyon/hesap adı
const repo = "pardoon-backend";         // 🔁 Hedef repo adı

(async () => {
  for (const test of failedTests) {
    try {
      await octokit.issues.create({
        owner,
        repo,
        title: `❌ Test Hatası: ${test.name}`,
        body: `**Dosya:** ${test.file}\n\n**Hata mesajı:**\n\`\`\`\n${test.error}\n\`\`\``,
        labels: ["otomatik", "test-failure"],
      });
      console.log(`✅ Issue oluşturuldu: ${test.name}`);
    } catch (err) {
      console.error(`❗️ Issue oluşturulurken hata: ${test.name}`, err.message);
    }
  }
})();
