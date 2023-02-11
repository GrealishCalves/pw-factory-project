import { actionsMap } from './utils/common/actions/actions.map';

export interface Action {
  LOCATOR: string;
  ACTION: keyof typeof actionsMap;
  VALUE: string | null;
}

export interface PageConfiguration<T> {
  URL: string;
  ACTIONS: T;
}

export const configuration: {
  LOGIN_PAGE: PageConfiguration<Action[]>;
  MAIN_PAGE: PageConfiguration<Action[]>;
} = {
  LOGIN_PAGE: {
    URL: 'https://www.saucedemo.com/',
    ACTIONS: [
      {
        LOCATOR: '#user-name',
        ACTION: 'fill',
        VALUE: 'standard_user',
      },
      {
        LOCATOR: '#password',
        ACTION: 'fill',
        VALUE: 'secret_sauce',
      },
      {
        LOCATOR: '#login-button',
        ACTION: 'click',
        VALUE: null,
      },
    ],
  },
  MAIN_PAGE: {
    URL: 'test',
    ACTIONS: [],
  },
};


