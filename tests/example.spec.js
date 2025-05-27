import { test, expect } from '@playwright/test';

test('egundem ana sayfa başlığı doğru mu', async ({ page }) => {
  await page.goto('https://egundem.com/');
  await expect(page).toHaveTitle(/e[-]?gündem/i);
});
