const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const path = require("path");

// 1. Rapor dosyasını bul
const reportPath = path.join(process.cwd(), "playwright-report", "results.json");

if (!fs.existsSync(reportPath)) {
  console.error("❌ Rapor dosyası bulunamadı:", reportPath);
  process.exit(0); // Hata yerine sessizce çık (workflow'u fail etme)
}

// 2. Raporu oku ve failed testleri bul
let report;
try {
  report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
} catch (err) {
  console.error("❌ Rapor okunamadı:", err.message);
  process.exit(0);
}

const failedTests = [];

function processSuite(suite) {
  if (suite.tests) {
    suite.tests.forEach(test => {
      if (test.status === "failed" || test.status === "timedOut") {
        failedTests.push({
          title: test.title,
          file: suite.file || "unknown",
          error: test.results?.[0]?.error?.message || "No error message"
        });
      }
    });
  }
  
  if (suite.suites) suite.suites.forEach(processSuite);
}

if (report.suites) processSuite(report.suites);

// 3. Hiç failed test yoksa çık
if (failedTests.length === 0) {
  console.log("ℹ️ Başarısız test bulunamadı.");
  process.exit(0);
}

// 4. GitHub API ile issue oluştur
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

(async () => {
  for (const test of failedTests) {
    const issueTitle = `[Test Failure] ${test.title}`;
    const issueBody = [
      `**Test File:** ${test.file}`,
      `**Error:**\n\`\`\`\n${test.error}\n\`\`\``,
      `**View Run:** ${process.env.REPORT_URL}`
    ].join("\n\n");

    try {
      await octokit.rest.issues.create({
        owner,
        repo,
        title: issueTitle,
        body: issueBody,
        labels: ["test-failure"]
      });
      console.log(`✅ Issue created: ${issueTitle}`);
    } catch (error) {
      console.error(`❌ Error creating issue: ${error.message}`);
    }
  }
})();