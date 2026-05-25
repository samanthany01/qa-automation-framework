import { test, expect } from '@playwright/test';
import { ApiClient } from '../../api/core/apiClient';
import { UsersService } from '../../api/services/users.service';

test('SDET: Create user via API and validate in UI', async ({ request, page }) => {

  // ======================
  // API SETUP
  // ======================
  const apiClient = new ApiClient(request);
  const usersService = new UsersService(apiClient);

  const userPayload = {
    name: 'SDET User',
    email: `user${Date.now()}@test.com`
  };

  const apiResponse = await usersService.createUser(userPayload);
  expect(apiResponse.status()).toBe(201);

  const apiBody = await apiResponse.json();
  const userId = apiBody.id;

  // ======================
  // UI VALIDATION
  // ======================
  await page.goto('https://your-app.com/users');

  await expect(page.locator(`text=${userPayload.name}`)).toBeVisible();
});