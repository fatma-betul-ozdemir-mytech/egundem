(async () => {
  if (!testResults.suites || testResults.suites.length === 0) {
    console.warn('⚠️ Test sonuçlarında suite bulunamadı.');
    return;
  }

  for (const suite of testResults.suites) {
    if (!suite.suites) continue;

    for (const innerSuite of suite.suites) {
      if (!innerSuite.specs) continue;

      for (const spec of innerSuite.specs) {
        if (!spec.tests || spec.tests.length === 0) continue;

        for (const test of spec.tests) {
          if (!test.results || test.results.length === 0) continue;

          const testTitle = test.title || 'Başlıksız test';
          const status = test.results[0].status || 'unknown';
          const jiraKeyMatch = testTitle.match(new RegExp(`\\b${jiraProjectKey}-\\d+\\b`, 'i'));

          if (jiraKeyMatch) {
            const jiraKey = jiraKeyMatch[0];
            const comment = `🔎 Otomasyon Test Sonucu:\n**${testTitle}** → ${status.toUpperCase()}`;
            console.log(`➡️ Jira biletine yorum gönderiliyor: ${jiraKey} - Durum: ${status}`);
            await postComment(jiraKey, comment);
          } else {
            console.log(`⚠️ Jira bilet anahtarı bulunamadı test başlığında: "${testTitle}"`);
          }
        }
      }
    }
  }

  console.log('🎉 Tüm test sonuçları işlendi.');
})();
