import { AuthPage } from "@modules/auth/auth.page";
export class AuthFlow {
    constructor(private AuthPage: AuthPage) { }
    async login(username: string, password: string, remember: boolean) {
        await this.AuthPage.enterAccount(username);
        await this.AuthPage.enterPassword(password);
        if (remember) {
            await this.AuthPage.clickRemember();
        }
        await this.AuthPage.clickLogin();
    }
}