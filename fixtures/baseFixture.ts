import { test as base } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { LoginPage } from "../pages/LoginPage";
import { AddToCart } from "../pages/AddToCartPage";

type MyFixtures = {
    loginPage: LoginPage;
    productPage: ProductPage;
    addToCartPage: AddToCart;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },

     addToCartPage: async ({ page }, use) => {
        const addToCartPage = new AddToCart(page);
        await use(addToCartPage);
    },
});

export { expect } from "@playwright/test";