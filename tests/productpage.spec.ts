import { expect, test } from '../fixtures/baseFixture';
import { BASE_URL, PASSWORD, USERNAME } from '../utils/envConfig';
import { loginLocators } from '../locators/LoginLocators';
import { productPageLocator } from '../locators/ProductPageLocators';
import { Logger } from "../logger/Logger";

test.describe("Product Page Validation", () => {

  test.beforeEach(async ({ page, loginPage }) => {
    Logger.info("Entering URL");
    await loginPage.navigate(BASE_URL);
    Logger.info("Enter username and password");
    await loginPage.login(USERNAME, PASSWORD);
    Logger.success("Login success");
    Logger.info("Verify Page URL");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  });


  test("Validate Logout functionality", async ({ page, loginPage, productPage }) => {
    Logger.info("clicking on logout button");
    await productPage.logout();
    Logger.info("Verify Submit button is visible");
    await expect(page.locator(loginLocators.submitBtn)).toBeVisible();
  }
  );


  test("Validate About page and navigate back", async ({ page, productPage }) => {
    Logger.info("Open about page");
    await productPage.openAboutPage();
    Logger.info("Verify try if free button is visible");
    await expect(page.locator(productPageLocator.tryitFreeBtn)).toBeVisible();
    Logger.info("Navigate to the back page ");
    await page.goBack();
    Logger.info("Verify Hamburger icon visible");
    await expect(page.locator(productPageLocator.settingIcon)).toBeVisible();
  });

  test("Validate Product Page", async ({ page, productPage }) => {
    await productPage.validateAllProductDisplayed();
    await productPage.addFirstProductToCart();
    await productPage.addAllProductsToCart();
  });
});