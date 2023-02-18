import { actionsMap } from './utils/common/actions/actions.map';

export interface Action {
  LOCATOR: string;
  ACTION: keyof typeof actionsMap;
  VALUE?: string;
  FRAME?: string;
}

export interface PageConfiguration<T> {
  URL: string;
  ACTIONS: T;
}

// export const configuration: {
//   LOGIN_PAGE: PageConfiguration<Action[]>;
//   MAIN_PAGE: PageConfiguration<Action[]>;
// } = {
//   LOGIN_PAGE: {
//     URL: 'https://www.saucedemo.com/',
//     ACTIONS: [
//       {
//         LOCATOR: '#user-name',
//         ACTION: 'fill',
//         VALUE: 'standard_user',
//       },
//       {
//         LOCATOR: '#password',
//         ACTION: 'fill',
//         VALUE: 'secret_sauce',
//       },
//       {
//         LOCATOR: '#login-button',
//         ACTION: 'click',
//         VALUE: null,
//       },
//     ],
//   },
//   MAIN_PAGE: {
//     URL: 'test',
//     ACTIONS: [],
//   },
// };

export const configuration: {
  LOGIN_PAGE: PageConfiguration<Action[]>;
  MAIN_PAGE: PageConfiguration<Action[]>;
} = {
  LOGIN_PAGE: {
    URL: 'https://services.cal-online.co.il/Card-Holders',
    ACTIONS: [
      {
        LOCATOR: '#mat-input-0',
        ACTION: 'fill',
        VALUE: 'test',
        FRAME: '#calconnectIframe',
      },
      {
        LOCATOR: '#mat-input-1',
        ACTION: 'fill',
        VALUE: 'test',
        FRAME: '#calconnectIframe',
      },
      {
        LOCATOR: '#regular-login',
        ACTION: 'click',
        FRAME: '#calconnectIframe',
      },
      {
        LOCATOR: '#u1stLogoContainer',
        ACTION: 'click',
      },
    ],
  },
  MAIN_PAGE: {
    URL: 'test',
    ACTIONS: [],
  },
};

