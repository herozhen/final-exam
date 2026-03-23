import { RegisterPage } from "@modules/register/register.page";
import { RegisterTestData } from "@modules/register/register.type";
export class RegisterFlow {
    constructor(private registerPage: RegisterPage) { }
    async register(registerData: RegisterTestData) {
        if (registerData.randomAccount) {
            const accountInfo = this.generateAccount();
            registerData.username = accountInfo.account;
            registerData.email = accountInfo.email;
        }
        await this.registerPage.enterAccount(registerData.username);
        await this.registerPage.enterPassword(registerData.password);
        await this.registerPage.enterConfirmPassword(registerData.confirmPassword);
        await this.registerPage.enterFullName(registerData.fullName);
        await this.registerPage.enterEmail(registerData.email);
        await this.registerPage.clickRegister();
    }

    generateAccount() {
        const account = crypto.randomUUID();
        const email = `${account}@gmail.com`;
        return { account, email };
    }
}