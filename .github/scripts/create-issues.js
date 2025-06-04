const { Octokit } = require("@octokit/rest");
const fs = require("fs");

const report = JSON.parse(fs.readFileSync("playwright-report/results.json", "utf8"));

const failedTests = report.suites.flatMap(suite =>
  suite.specs.flatMap(spec =>
    spec.tests.filter(test => test.status === "failed").map(test => ({
      name: spec.title,
      error: test.results[0].error?.message || "Unknown error",
    }))
  )
);

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

(async () => {
  for (const test of failedTests) {
    await octokit.issues.create({
      owner,
      repo,
      title: `❌ Test Failed: ${test.name}`,
      body: `Hata mesajı:\n\`\`\`\n${test.error}\n\`\`\``,
    });
    console.log(`Issue created for failed test: ${test.name}`);
  }
})();
