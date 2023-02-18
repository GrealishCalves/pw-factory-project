import { Page } from '@playwright/test';
import { Action } from '../../../config-data';

export const actionsMap = {
  fill: async (page: Page, obj: Action): Promise<void> =>
    obj.FRAME
      ? await page.frameLocator(obj.FRAME).locator(obj.LOCATOR).fill(obj.VALUE!)
      : await page.locator(obj.LOCATOR).fill(obj.VALUE!),
  click: async (page: Page, obj: Action): Promise<void> =>
    obj.FRAME ? await page.frameLocator(obj.FRAME).locator(obj.LOCATOR).click() : await page.locator(obj.LOCATOR).click(),
};