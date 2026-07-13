# Playwright TypeScript Automation Framework

A scalable Playwright automation framework built using **TypeScript** following the **Page Object Model (POM)** design pattern.

This framework is designed for learning, interview preparation, and real-world automation practices. It focuses on code reusability, maintainability, and a clean project structure.

---

# Tech Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)

---

# Project Structure

```text
PlaywrightFramework
│
├── fixtures
│   └── baseFixture.ts
│
├── locators
│   ├── LoginLocators.ts
│   └── ProductPageLocators.ts
│
├── logger
│   └── Logger.ts
│
├── pages
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   └── ProductPage.ts
│
├── tests
│   ├── loginpage.spec.ts
│   └── productpage.spec.ts
│
├── utils
│   └── envConfig.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# Framework Features

* Page Object Model (POM)
* Base Page for reusable Playwright actions
* Separate Locator Files
* Custom Playwright Fixtures
* Logger Utility
* TypeScript Support
* Clean Folder Structure
* Reusable Page Objects
* Easy to Maintain
* Scalable Design

---

# Design Pattern

This framework follows the **Page Object Model (POM)** design pattern.

### Benefits

* Separates test logic from page interactions
* Improves code reusability
* Reduces code duplication
* Simplifies framework maintenance
* Makes test scripts cleaner and easier to understand

---

# Base Page

All page classes extend the **BasePage** class.

The BasePage contains reusable Playwright methods such as:

* navigate()
* click()
* fill()
* locator()
* selectOption()
* waitForElement()

This avoids writing the same Playwright code in multiple page classes.

---

# Custom Fixtures

The framework uses **Playwright Custom Fixtures** to initialize page objects automatically.

Instead of creating page objects in every test:

```typescript
const loginPage = new LoginPage(page);
const productPage = new ProductPage(page);
```

Fixtures provide them automatically:

```typescript
test("Login Test", async ({ loginPage }) => {

    await loginPage.navigate(BASE_URL);

    await loginPage.login(USERNAME, PASSWORD);

});
```

### Benefits

* Less boilerplate code
* Cleaner test scripts
* Better scalability
* Centralized page object creation

---

# Logger Utility

A reusable Logger utility is used to standardize framework logs.

Example:

```typescript
Logger.info("Entering Username");

Logger.info("Clicking Login Button");

Logger.success("Login Successful");

Logger.error("Element Not Found");
```

### Benefits

* Easier debugging
* Better execution visibility
* Consistent logging throughout the framework

---

# Environment Configuration

Framework configuration values are stored in:

```text
utils/envConfig.ts
```

Example:

```typescript
export const BASE_URL = "https://www.saucedemo.com/";
export const USERNAME = "standard_user";
export const PASSWORD = "secret_sauce";
```

---

# Sample Test

```typescript
import { test } from "../fixtures/baseFixture";

test("Login Test", async ({ loginPage }) => {

    await loginPage.navigate(BASE_URL);

    await loginPage.login(USERNAME, PASSWORD);

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

Run Chromium only:

```bash
npx playwright test --project=chromium
```

Run a specific test file:

```bash
npx playwright test tests/productpage.spec.ts
```

Show the HTML report:

```bash
npx playwright show-report
```

---

# Current Framework Components

* ✅ Page Object Model (POM)
* ✅ Base Page
* ✅ Locator Files
* ✅ Custom Fixtures
* ✅ Logger Utility
* ✅ TypeScript
* ✅ Reusable Page Objects

---

# Future Enhancements

* Storage State Authentication
* Environment Configuration using `.env`
* Constants Management
* Test Data Management
* API Automation
* Database Utilities
* Screenshot on Failure
* Retry Mechanism
* Allure Reporting
* Parallel Execution
* Jenkins Integration
* GitHub Actions CI/CD
* Docker Support

---

# Author

Developed using **Playwright** and **TypeScript** for learning, interview preparation, and scalable UI automation framework development.
