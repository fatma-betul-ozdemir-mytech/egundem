const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const path = require("path");

const reportPath = path.join(process.cwd(), "fossa-report.json");

if (!fs.existsSync(reportPath)) {
  console.log("⚠️ FOSSA raporu bulunamadı.");
  process.exit(0);
}

let report;
try {
  report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
} catch (err) {
  console.error("❌ Rapor okunamadı:", err.message);
  process.exit(1);
}

// Hataları bul (issues veya violations alanında olabilir)
const violations = report.issues || report.violations || [];

if (violations.length === 0) {
  console.log("✅ FOSSA taramasında sorun bulunmadı.");
  process.exit(0);
}

// GitHub ayarları
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

(async () => {
  for (const v of violations) {
    const issueTitle = `🚨 FOSSA Policy Violation: ${v.title || v.issueId}`;

    // Aynı başlıkta issue var mı kontrol et
    const existing = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      state: "open",
      labels: "fossa"
    });

    if (existing.data.some((i) => i.title === issueTitle)) {
      console.log(`⚠️ Issue zaten mevcut: ${issueTitle}`);
      continue;
    }

    const body = `
**FOSSA Lisans/Güvenlik İhlali Tespit Edildi**

🔗 Paket: ${v.coordinates || "N/A"}  
📌 Açıklama: ${v.title || "Bilinmiyor"}  
⚠️ Tür: ${v.type || "Unknown"}  
📝 Detay: ${v.description || "Detay bulunamadı"}

👉 Daha fazla bilgi için [FOSSA Dashboard](https://app.fossa.com/projects/custom/${owner}%2F${repo})
`;

    try {
      await octokit.rest.issues.create({
        owner,
        repo,
        title: issueTitle,
        body,
        labels: ["fossa", "license", "security"]
      });
      console.log(`✅ Issue oluşturuldu: ${issueTitle}`);
    } catch (err) {
      console.error(`❌ Issue oluşturulamadı: ${err.message}`);
    }
  }
})();
