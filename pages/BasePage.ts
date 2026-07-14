import { Page, Locator, expect } from "@playwright/test";
import * as allure from "allure-js-commons";

export class BasePage {
    constructor(protected page: Page) { }

    async navigate(url: string) {

        await allure.step(`Navigate to ${url}`, async () => {

            await this.page.goto(url);

        });

    }

    locator(selector: string): Locator {
        return this.page.locator(selector);
    }

    async click(selector: string) {
        await allure.step(`Click : ${selector}`, async () => {

            await this.locator(selector).click();

        });
    }

    async fill(selector: string, value: string) {
        await allure.step(`Enter '${value}' into ${selector}`, async () => {

            await this.locator(selector).fill(value);

        });
    }

    async getText(selector: string) {

        return await allure.step(`Read text from ${selector}`, async () => {

            return await this.locator(selector).innerText();

        });

    }

    async verifyVisible(selector: string) {

        await allure.step(`Verify ${selector} is visible`, async () => {

            await expect(this.locator(selector)).toBeVisible();

        });

    }
}