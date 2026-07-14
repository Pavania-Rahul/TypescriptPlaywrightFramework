import { expect, test } from '../fixtures/baseFixture';
import { BASE_URL, PASSWORD, USERNAME } from '../utils/envConfig';
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

    test("Validate Product Add To cart Functionality", async ({ page, addToCartPage }) => {

        await addToCartPage.addProductToCart("Sauce Labs Backpack");
        await addToCartPage.clickOnAddToCartButton();
        await addToCartPage.verifyRemoveButtonIsVisible();
        await addToCartPage.verifyBadgeisSHownInCartIcon();
        await addToCartPage.clickOnAddToCartIcon();
        const title = await addToCartPage.verifyProductTitleOnAddToCartPage();
        expect(title).toBe("Sauce Labs Backpack");
        await addToCartPage.clickOnCheckOutButton();
        await addToCartPage.enterShippingDetails("James", "Paul", "3330");
        await addToCartPage.clickOnContinueButton();
        const pageTitle = await addToCartPage.verifyCheckOutPageOpens();
        expect(pageTitle).toBe("Checkout: Overview");
        await addToCartPage.clickOnFinishButton();
        const message = await addToCartPage.verifyThankYouForOrderMessage();
        expect(message).toBe("Thank you for your order!");

    }
    );





});