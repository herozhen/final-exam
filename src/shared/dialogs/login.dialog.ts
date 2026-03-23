import { Page, Locator } from "@playwright/test";
import { BasePage } from "@core/BasePage";
export class LoginDialog extends BasePage {
    private readonly lblMsgText = this.page.locator("#swal2-title");
    private readonly lblErrorEmptyUsername = this.page.locator('#taiKhoan-helper-text');
    private readonly lblErrorEmptyPassword = this.page.locator('#matKhau-helper-text');
    private readonly lblErrorMinLengthPassword = this.page.getByText('Mật khẩu phải có ít nhất 6 k');
    private readonly lblErrorAccount = this.page.getByText('Tài khoản hoặc mật khẩu không đúng!');

    constructor(page: Page) {
        super(page);
    }
    getSuccessMessage(): Locator {
        return this.lblMsgText;
    }
    getUsernameError(): Locator {
        return this.lblErrorEmptyUsername;
    }
    getPasswordError(): Locator {
        return this.lblErrorEmptyPassword;
    }
    getPasswordLengthError(): Locator {
        return this.lblErrorMinLengthPassword;
    }
    getAccountError(): Locator {
        return this.lblErrorAccount;
    }
}


// await page.getByRole('alert').click();
// await page.getByText('Tài khoản hoặc mật khẩu không').click();
// await expect(page.getByText('Tài khoản hoặc mật khẩu không')).toBeVisible();
// await expect(page.getByRole('alert')).toContainText('Tài khoản hoặc mật khẩu không đúng!');
// await expect(page.getByRole('alert')).toContainText('Tài khoản hoặc mật khẩu không đúng!');