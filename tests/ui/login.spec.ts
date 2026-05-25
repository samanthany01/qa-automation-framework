import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test('Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://the-internet.herokuapp.com/login');

  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.locator('.flash.success')).toBeVisible();
});