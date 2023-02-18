import { Page } from '@playwright/test';
import { Action } from '../../../config-data';
import { actionsMap } from '../actions/actions.map';

export class FormInteractions {
  private page: Page;
  private validActions: { [key: string]: Function };

  constructor(page: Page) {
    console.log('FormInteractions constructor called');
    this.page = page;
    this.validActions = actionsMap;
  }

  public async performAction(obj: Action): Promise<void> {
    const actionFunction = this.validActions[obj.ACTION];
    if (!actionFunction) {
      throw new Error(`Invalid action: ${obj.ACTION}`);
    }
    await actionFunction(this.page, obj);
  }
}
