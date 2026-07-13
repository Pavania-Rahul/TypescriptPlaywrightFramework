import { test as base } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { LoginPage } from "../pages/loginpage";

type MyFixtures = {
    loginPage: LoginPage;
    productPage: ProductPage;
};

export const test = base.extend <MyFixtures>({
     loginPage:async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
     },

    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
});

export { expect } from "@playwright/test";