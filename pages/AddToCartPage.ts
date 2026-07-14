
import { addToCartLocators } from "../locators/AddToCartLocators";
import { BasePage } from "./BasePage";
import { Logger } from "../logger/Logger";
import { add } from "winston";

export class AddToCart extends BasePage {

    async addProductToCart(productName: string) {
        Logger.info(`Adding product: ${productName}`);
        await this.click(addToCartLocators.selectProduct(productName));
    }

    async clickOnAddToCartButton() {
        Logger.info("Click on Add to cart button in page details screen");
        await this.click(addToCartLocators.addToCartButton);
    }

    async verifyRemoveButtonIsVisible() {
        Logger.info("Verify Remove Button Appearing");
        await this.verifyVisible(addToCartLocators.removeButton);
    }


    async verifyBadgeisSHownInCartIcon() {
        Logger.info("Verify Badge icon Appearing");
        await this.verifyVisible(addToCartLocators.badgeIcon);
    }

    async clickOnAddToCartIcon() {
        Logger.info("Click on add to cart icon");
        await this.click(addToCartLocators.addToCartIcon);
    }

    async verifyProductTitleOnAddToCartPage() {
        Logger.info("verify product Info on add to cart page");
        return this.getText(addToCartLocators.productTitle);
    }

    async clickOnCheckOutButton() {
        Logger.info("Click on checkout button");
        await this.click(addToCartLocators.checkOutButton);
    }

    async enterShippingDetails(firstName: string, lastName: string, zipcode: string) {
        await this.fill(addToCartLocators.firstName, firstName);
        await this.fill(addToCartLocators.lastName, lastName);
        await this.fill(addToCartLocators.zipcode, zipcode);
    }

    async clickOnContinueButton() {
        Logger.info("Click on continue button");
        await this.click(addToCartLocators.continueButton);
    }

    async verifyCheckOutPageOpens(){
    Logger.info("verify check out page opens");
    return this.getText(addToCartLocators.checkoutPage);
    }

    async clickOnFinishButton(){
        Logger.info("Click on Finish button");
        await this.click(addToCartLocators.finishButton);
    }

    async verifyThankYouForOrderMessage(){
        Logger.info("Verify Thank you for order messsage");
        return this.getText(addToCartLocators.thankyouForOrder);
    }

}