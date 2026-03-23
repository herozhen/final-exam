import { BasePage } from "@core/BasePage";
import { Page } from "@playwright/test";

export class AuthPage extends BasePage {
    private readonly txtAccount = this.page.getByRole('textbox', { name: 'Tài Khoản' });
    private readonly txtPassword = this.page.getByRole('textbox', { name: 'Mật Khẩu' });
    private readonly ckbRemember = this.page.getByRole('checkbox', { name: 'Nhớ tài khoản' });
    private readonly btnLogin = this.page.getByRole('button', { name: 'Đăng nhập' });


    constructor(page: Page) {
        super(page);
    }

    async enterAccount(account: string) {
        await this.input(this.txtAccount, account);
    }
    async enterPassword(password: string) {
        await this.input(this.txtPassword, password);
    }
    async clickRemember() {
        await this.click(this.ckbRemember);
    }
    async clickLogin() {
        await this.click(this.btnLogin);
    }
}