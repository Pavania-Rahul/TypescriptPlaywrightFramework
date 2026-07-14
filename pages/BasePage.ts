import { Page, Locator } from "@playwright/test";

export class BasePage {
    constructor(protected page: Page) { }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    locator(selector: string): Locator {
        return this.page.locator(selector);
    }

    async click(selector: string) {
        await this.locator(selector).click();
    }

    async fill(selector: string, value: string) {
        await this.locator(selector).fill(value);
    }
}