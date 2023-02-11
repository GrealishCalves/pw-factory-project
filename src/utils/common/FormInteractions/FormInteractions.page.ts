import { Page } from '@playwright/test';
import { actionsMap } from '../actions/actions.map';

export class FormInteractions {
  private page: Page;
  private validActions: { [key: string]: Function };

  constructor(page: Page) {
    this.page = page;
    this.validActions = actionsMap;
  }

  public async performAction(locator: string, action: keyof typeof actionsMap, value?: string | null): Promise<void> {
    const actionFunction = this.validActions[action];
    if (!actionFunction) {
      throw new Error(`Invalid action: ${action}`);
    }
    // this is like calling page.fill(locator, value) or page.click(locator)
    await actionFunction(this.page, locator, value);
  }
}
