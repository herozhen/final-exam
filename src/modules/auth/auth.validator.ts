import { expect, Page } from '@playwright/test';
import { LoginTestData } from '@modules/auth/auth.type';
import { LoginDialog } from '@shared/dialogs/login.dialog';

export class AuthValidator {

    constructor(private loginDialog: LoginDialog) { }

    async validate(data: LoginTestData) {
        switch (data.expectedType) {
            case 'LOGIN_SUCCESS':
                await expect(this.loginDialog.getSuccessMessage()).toHaveText("Đăng nhập thành công");
                break;

            case 'VALIDATION_EMPTY_USERNAME':
                await expect(this.loginDialog.getUsernameError()).toBeVisible();
                break;

            case 'VALIDATION_EMPTY_PASSWORD':
                await expect(this.loginDialog.getPasswordError()).toBeVisible();
                break;
            case 'VALIDATION_ACCOUNT':
                await expect(this.loginDialog.getAccountError()).toBeVisible();
                break;
            case 'VALIDATION_EMPTY_BOTH':
                await expect(this.loginDialog.getUsernameError()).toBeVisible();
                await expect(this.loginDialog.getPasswordError()).toBeVisible();
                break;
        }
    }
}