# Playwright TypeScript Automation Framework

A production-style Playwright automation framework developed using **TypeScript** following the **Page Object Model (POM)** design pattern.

This framework is designed for scalability, maintainability, and interview demonstrations. It includes reusable components such as a Base Page, Custom Fixtures, Logger Utility, Constants, and Test Data management.

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

---

# Project Structure

```
PlaywrightFramework
│
├── fixtures
│   └── baseFixture.ts
│
├── pages
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   └── ProductPage.ts
│
├── locators
│   ├── LoginLocators.ts
│   └── ProductPageLocators.ts
│
├── tests
│   ├── loginpage.spec.ts
│   └── productpage.spec.ts
│
├── logger
│   └── Logger.ts
│
├── constants
│   ├── Urls.ts
│   ├── Messages.ts
│   └── FilterValues.ts
│
├── testData
│   ├── LoginData.ts
│   └── ProductData.ts
│
├── utils
│   └── envConfig.ts
│
├── playwright.config.ts
│
├── package.json
│
└── README.md
```

---

# Framework Features

- Page Object Model (POM)
- Separate Locator Files
- Reusable Base Page
- Custom Playwright Fixtures
- Logger Utility
- Constants Management
- Test Data Management
- TypeScript Support
- Clean Folder Structure
- Easy to Maintain
- Scalable Design

---

# Design Pattern

The framework follows the **Page Object Model (POM)**.

Benefits:

- Better code reusability
- Easy maintenance
- Reduced code duplication
- Clear separation of test logic and page interactions

---

# Base Page

All page classes inherit from the BasePage.

Common reusable methods include:

- navigate()
- click()
- fill()
- locator()
- selectOption()
- waitForElement()

This removes duplicate Playwright code from page classes.

---

# Custom Fixtures

The framework uses Playwright Custom Fixtures.

Instead of creating page objects in every test:

```ts
const loginPage = new LoginPage(page);
const productPage = new ProductPage(page);
```

Fixtures automatically provide them:

```ts
test("Login Test", async ({ loginPage, productPage }) => {

});
```

Benefits:

- Cleaner test files
- Less boilerplate code
- Better scalability
- Centralized object creation

---

# Logger Utility

Reusable logging utility for reporting execution steps.

Example:

```ts
Logger.info("Entering Username");
Logger.success("Login Successful");
Logger.error("Element Not Found");
```

Benefits:

- Easier debugging
- Better execution visibility
- Standardized logging

---

# Constants

Reusable application constants are stored separately.

Examples:

- URLs
- Error Messages
- Filter Values

Benefits:

- No hardcoded values
- Easy maintenance
- Single source of truth

---

# Test Data

Test data is separated from test scripts.

Example:

```ts
LoginData.standardUser.username
LoginData.standardUser.password
```

Benefits:

- Reusable data
- Cleaner tests
- Easy updates
- Supports multiple test users

---

# Sample Test

```ts
test("Login Test", async ({ loginPage }) => {

    await loginPage.navigate(BASE_URL);

    await loginPage.login(
        LoginData.standardUser.username,
        LoginData.standardUser.password
    );

});
```

---

# Running Tests

Run all tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run a specific file:

```bash
npx playwright test tests/productpage.spec.ts
```

Run Chromium only:

```bash
npx playwright test --project=chromium
```

Generate HTML Report:

```bash
npx playwright show-report
```

---

# Current Framework Components

✅ Page Object Model

✅ Base Page

✅ Locator Files

✅ Custom Fixtures

✅ Logger

✅ Constants

✅ Test Data

✅ TypeScript

---

# Future Enhancements

- Storage State Authentication
- Environment Configuration (.env)
- API Automation
- Database Utilities
- Jenkins Integration
- GitHub Actions CI/CD
- Allure Reporting
- Retry Mechanism
- Screenshot on Failure
- Parallel Execution
- Docker Support

---

# Author

Playwright TypeScript Automation Framework

Developed for learning, interview preparation, and scalable UI automation.
