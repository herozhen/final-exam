import { BasePage } from "@core/BasePage";
import { Page } from "@playwright/test";

export class RegisterPage extends BasePage {
    private readonly txtAccount = this.page.getByRole('textbox', { name: 'Tài Khoản' });
    private readonly txtPassword = this.page.getByRole('textbox', { name: 'Mật Khẩu', exact: true });
    private readonly txtConfirmPassword = this.page.getByRole('textbox', { name: 'Nhập lại mật khẩu' });
    private readonly txtFullName = this.page.getByRole('textbox', { name: 'Họ Tên' });
    private readonly txtEmail = this.page.getByRole('textbox', { name: 'Email' });
    private readonly btnRegister = this.page.getByRole('button', { name: 'Đăng ký' });
    private readonly lnkLogin = this.page.getByRole('link', { name: 'Bạn chưa có tài khoản? Đăng ký' });


    constructor(page: Page) {
        super(page);
    }

    async enterAccount(account: string) {
        await this.input(this.txtAccount, account);
    }
    async enterPassword(password: string) {
        await this.input(this.txtPassword, password);
    }
    async enterConfirmPassword(confirmPassword: string) {
        await this.input(this.txtConfirmPassword, confirmPassword);
    }
    async enterFullName(fullName: string) {
        await this.input(this.txtFullName, fullName);
    }
    async enterEmail(email: string) {
        await this.input(this.txtEmail, email);
    }
    async clickRegister() {
        await this.click(this.btnRegister);
    }

}