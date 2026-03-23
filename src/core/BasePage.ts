import { Locator, Page } from "@playwright/test";
import { TIMEOUT } from "@utils/ConstantTimeout";

// khai báo aias
type PlaywrightLocator = Locator | string;

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo(url: string) {
        await this.page.goto(url);
    }

    async input(locator: PlaywrightLocator, value: string, timeoutInSec: number = TIMEOUT.DEFAULT_TIMEOUT) {
        if (typeof locator === "string") {
            await this.page.locator(locator).fill(value);
        } else {
            await locator.fill(value, { timeout: timeoutInSec * 10000 });
        }

    }
    async click(locator: PlaywrightLocator, timeoutInSec: number = TIMEOUT.DEFAULT_TIMEOUT) {
        if (typeof locator === "string") {
            await this.page.locator(locator).click({ timeout: timeoutInSec * 10000 });
        } else {
            await locator.click({ timeout: timeoutInSec * 10000 });
        }

    }

    async getText(locator: PlaywrightLocator, timeoutInSec: number = TIMEOUT.DEFAULT_TIMEOUT): Promise<string | null> {
        let value;
        if (typeof locator === "string") {
            value = await this.page.locator(locator).textContent({ timeout: timeoutInSec * 10000 })
        } else {
            value = await locator.textContent({ timeout: timeoutInSec * 10000 });
        }
        return value;
    }

    async selectOption(locator: Locator, value: string) {
        await locator.waitFor({ state: 'visible' });
        await locator.selectOption({ label: value });



        // // wait dropdown enable
        // await locator.waitFor({ state: 'visible' });

        // // wait option không còn disabled
        // await this.page.waitForFunction(
        //     ({ locator, value }) => {
        //         const select = document.querySelector(locator);
        //         if (!select) return false;

        //         const option = select.querySelector(`option[value="${value}"]`);
        //         return option && !option.disabled;
        //     },
        //     { locator: await locator.selector(), value }
        // );

        // await locator.selectOption(value);
    }


}