import { test } from '../utils/common/fixtures/fixture.config';

test('has correct title', async ({ page, loginPage }) => {
  await loginPage.visit();
  await loginPage.performActions();
});
