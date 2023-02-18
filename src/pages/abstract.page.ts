import { Page } from '@playwright/test';
import { Action, PageConfiguration } from '../config-data';
import { FormInteractions } from '../utils/common/FormInteractions/FormInteractions.page';

export interface IBasePage {
  visit(): Promise<void>;
  performActions(): Promise<void>;
}

export abstract class BasePage implements IBasePage {
  protected formInteractions: FormInteractions;
  protected readonly url: string;
  protected readonly actions: Action[];

  constructor(protected readonly page: Page, protected readonly config: PageConfiguration<Action[]>) {
    this.formInteractions = new FormInteractions(page);
    this.url = config.URL;
    this.actions = config.ACTIONS;
  }

  public async visit(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async performActions(): Promise<void> {
    for (const action of this.actions) {
      await this.formInteractions.performAction({ ...action });
    }
  }
}
