import { Page } from '@playwright/test';
export const actionsMap = {
  fill: (page: Page, locator: string, value: string): Promise<void> => page.fill(locator, value),
  click: (page: Page, locator: string): Promise<void> => page.click(locator),
};
