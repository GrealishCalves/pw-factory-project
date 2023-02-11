import { test as fixture } from '@playwright/test';
import { configuration } from '../../../config-data';
import { LoginPage } from '../../../pages/pages';

export type pagesType = {
  loginPage: LoginPage;
};

const test = fixture.extend<pagesType>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page, configuration.LOGIN_PAGE));
  },
});

export { test };
