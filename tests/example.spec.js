const { test, expect } = require('@playwright/test');

test('egundem ana sayfa başlığı doğru mu', async ({ page }) => {
  await page.goto('https://egundem.com/');
  await expect(page).toHaveTitle(/eGündem/);
});
