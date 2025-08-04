const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const path = require("path");

// 1. Doğru rapor yolunu bul
const reportPath = path.join(process.cwd(), "playwright-report", "results.json");

if (!fs.existsSync(reportPath)) {
  console.error("❌ Rapor dosyası bulunamadı:", reportPath);
  process.exit(0);
}

// 2. Raporu oku
let report;
try {
  report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
} catch (err) {
  console.error("❌ Rapor okunamadı:", err.message);
  process.exit(0);
}

// 3. Başarısız testleri topla (yeni yapıya uygun)
const failedTests = [];

function processSuite(suite) {
  if (suite.specs) {
    suite.specs.forEach(spec => {
      spec.tests.forEach(test => {
        if (test.results.some(result => 
          ["failed", "timedOut"].includes(result.status)
        )) {
          failedTests.push({
            title: spec.title,
            file: suite.file || "unknown",
            error: test.results[0]?.error?.message || "Hata mesajı yok",
            line: spec.line
          });
        }
      });
    });
  }
  
  if (suite.suites) suite.suites.forEach(processSuite);
}

if (report.suites) report.suites.forEach(processSuite);

// 4. Başarısız test yoksa çık
if (failedTests.length === 0) {
  console.log("ℹ️ Başarısız test bulunamadı.");
  process.exit(0);
}

// 5. GitHub API ayarları (TOKEN'i environment'dan al)
const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN,
  userAgent: "Playwright Test Reporter v1.0"
});

const [owner, repo] = "mytech-technology/pardoon-backend".split("/");

// 6. Issue oluştur (gruplandırılmış şekilde)
(async () => {
  // Aynı dosyadaki hataları grupla
  const testsByFile = failedTests.reduce((acc, test) => {
    const key = test.file;
    acc[key] = acc[key] || [];
    acc[key].push(test);
    return acc;
  }, {});

  for (const [file, tests] of Object.entries(testsByFile)) {
    const issueTitle = `[Test Hatası] ${path.basename(file)}: ${tests.length} test başarısız`;
    
    const issueBody = `
      **Dosya:** ${file}
      **Başarısız Testler (${tests.length}):**
      ${tests.map(t => `- ${t.title} (Satır ${t.line}): \`${t.error}\``).join("\n")}
      **Detaylar:** ${process.env.REPORT_URL}
      **Ekran Görüntüleri:** ${process.env.GITHUB_SERVER_URL}/${owner}/${repo}/actions/runs/${process.env.GITHUB_RUN_ID}
    `;

    try {
      // Benzer issue var mı kontrol et
      const { data: issues } = await octokit.rest.issues.listForRepo({
        owner,
        repo,
        state: "open",
        labels: "test-failure"
      });

      const existingIssue = issues.find(issue => 
        issue.title.includes(path.basename(file))
      );

      if (!existingIssue) {
        await octokit.rest.issues.create({
          owner,
          repo,
          title: issueTitle,
          body: issueBody,
          labels: ["test-failure"]
        });
        console.log(`✅ Yeni issue oluşturuldu: ${issueTitle}`);
      } else {
        // Mevcut issue'ya yorum ekle
        await octokit.rest.issues.createComment({
          owner,
          repo,
          issue_number: existingIssue.number,
          body: `Yeni test hataları:\n${issueBody}`
        });
        console.log(`ℹ️ Mevcut issue güncellendi: #${existingIssue.number}`);
      }
    } catch (error) {
      console.error(`❌ Issue oluşturma hatası: ${error.message}`);
      if (error.status === 403) {
        console.log("⚠️ Yetki hatası. Token geçersiz olabilir.");
      }
    }
  }
})();