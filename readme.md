
# Welcome to the Factory Pattern Automation Project

This project implements the Factory Design Pattern in order to automate web testing using Playwright. The main aim of this project is to make it easier for users to perform automated tests on web applications using Playwright by providing a structured way to define and perform actions on pages.



## Features

- Easy integration with Playwright
- Ability to define tests in a declarative manner using JSON
- Implementation of the Factory Design Pattern for page objects


## Run Locally

Clone the project

```bash
  git clone https://github.com/<repo-name>.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the test

```bash
  npm run test
```

## Folder Structure 

```bash
src
├── pages
│   ├── abstract.page.ts
│   └── pages.ts
├── tests
│   └── test.spec.ts
└── utils
    └── common
        ├── actions
        │   └── actions.map.ts
        ├── fixtures
        │   └── fixture.config.ts
        └── FormInteractions
            └── FormInteractions.page.ts
```

## Code Structure
The project consists of several classes, each of which serves a specific purpose. The key classes are:

FormInteractions: This class performs the actual actions (e.g. fill, click) on the page using Playwright.
BasePage: This class implements the base page and includes the visit and performActions methods, which are called when visiting the page and performing the defined actions respectively.
LoginPage: This class extends the BasePage class and is used to define the Login page of the application.
MainPage: This class extends the BasePage class and is used to define the Main page of the application.

## Page Configuration
A JSON configuration object is used to define the actions that should be performed on each page. The configuration object consists of the URL of the page and an array of actions. Each action consists of a locator, an action type (e.g. fill, click), and a value.

```json
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
  ```

## Conclusion
By using the Factory Design Pattern in combination with JSON configuration, this project provides a flexible and structured approach for automating web testing using Playwright. It makes it easier for users to write tests by providing a clear and concise way to define actions on pages.
