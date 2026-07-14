import { productPageLocator } from "../locators/ProductPageLocators";
import { BasePage } from "./BasePage";
import { Logger } from "../logger/Logger";

export class ProductPage extends BasePage {


    async logout() {
        Logger.info("Opening Menu");
        await this.click(productPageLocator.settingIcon);
        Logger.info("Clicking Logout");
        await this.click(productPageLocator.logoutLink);
        Logger.success("Logout Successful");
    }

    async openAboutPage() {
        Logger.info("Opening Menu");
        await this.click(productPageLocator.settingIcon);
        Logger.info("Clickin on aboutlink");
        await this.click(productPageLocator.aboutLink);

    }

    async validateAllProductDisplayed() {
        const names = await this.locator(productPageLocator.productNames).allTextContents();
        const description = await this.locator(productPageLocator.productDescription).allTextContents();
        const price = await this.locator(productPageLocator.productPrices).allTextContents();
        const buttonCount = await this.locator(productPageLocator.addToCartButtons).count();

        if (names.length === 0) {
            throw new Error("No Product Found");
        }

        if (names.length !== description.length || names.length !== price.length || names.length !== buttonCount) {
            throw new Error("Mismatch between the product Details");
        }

    }


    async addFirstProductToCart() {
        Logger.info("Clicking on First item only");
        await this.locator(productPageLocator.addToCartButtons).first().click();
    }

    async addAllProductsToCart() {
        const buttons = await this.locator(productPageLocator.addToCartButtons).all();
        Logger.info("Clicking on All Items");
        for (const button of buttons) {
            await button.click();
        }
    }

}