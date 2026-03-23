import { Page } from "@playwright/test";
import { BasePage } from "@core/BasePage";
import { TIMEOUT } from "@utils/ConstantTimeout";

export class TopBarNavigation extends BasePage {
    private readonly lnkLogin = this.page.getByRole('link', { name: 'Đăng Nhập' });
    private readonly lnkLogout = this.page.getByRole('link', { name: 'Đăng xuất' });
    //private readonly lnkProfile = this.page.getByRole('link', { name: 'Avatar John Johnson' });
    private readonly lnkProfile = this.page.locator("//a[@href='/account']/h3");
    private readonly lnkRegister = this.page.locator("//a[h3[text()='Đăng Ký']]");

    constructor(page: Page) {
        super(page);
    }
    async navigateRegisterPage() {
        await this.click(this.lnkRegister);
    }

    async navigateLoginPage() {
        await this.click(this.lnkLogin);
    }

    async isLogoutLinkdIsDisplayed(timeoutInSec: number = TIMEOUT.DEFAULT_TIMEOUT): Promise<boolean> {
        return await this.lnkLogout.isVisible({ timeout: timeoutInSec });
    }

    async getProfileName(): Promise<string | null> {
        return await this.getText(this.lnkProfile);
    }
}