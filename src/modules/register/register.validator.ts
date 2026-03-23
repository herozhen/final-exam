import { RegisterDialog } from "@shared/dialogs/register.dialog";
import { RegisterTestData } from "@modules/register/register.type";
import { expect, Page } from '@playwright/test';

export class RegisterValidator {
    constructor(private registerDialog: RegisterDialog) { }

    async validate(data: RegisterTestData) {
        switch (data.expectedType) {
            case 'REGISTER_SUCCESS':
                await expect(this.registerDialog.getSuccessMessage()).toHaveText("Đăng ký thành công");
                break;

            case 'VALIDATION_ALL_FIELD_EMPTY':
                await expect(this.registerDialog.getEmptyUsernameError()).toBeVisible();
                await expect(this.registerDialog.getEmptyPasswordError()).toBeVisible();
                await expect(this.registerDialog.getEmptyConfirmPasswordError()).toBeVisible();
                await expect(this.registerDialog.getEmptyFullNameError()).toBeVisible();
                await expect(this.registerDialog.getEmptyEmailError()).toBeVisible();
                break;

            case 'VALIDATION_USERNAME_EMPTY':
                await expect(this.registerDialog.getEmptyUsernameError()).toBeVisible();
                break;
            case 'VALIDATION_PASSWORD_EMPTY':
                await expect(this.registerDialog.getEmptyPasswordError()).toBeVisible();
                break;
            case 'VALIDATION_CONFIRM_PASSWORD_EMPTY':
                await expect(this.registerDialog.getEmptyConfirmPasswordError()).toBeVisible();
                break;
            case 'VALIDATION_FULLNAME_EMPTY':
                await expect(this.registerDialog.getEmptyFullNameError()).toBeVisible();
                break;
            case 'VALIDATION_EMAIL_EMPTY':
                await expect(this.registerDialog.getEmptyEmailError()).toBeVisible();
                break;
            case 'VALIDATION_PASSWORD_MISMATCH':
                await expect(this.registerDialog.getPasswordNotMatchError()).toBeVisible();
                break;
            case 'VALIDATION_PASSWORD_LENGTH':
                await expect(this.registerDialog.getPasswordLengthError()).toBeVisible();
                break;
            case 'VALIDATION_FULLNAME_INVALID':
                await expect(this.registerDialog.getInvalidFullNameError()).toBeVisible();
                break;
            case 'REGISTER_UNSUCCESSFUL':
                await expect(this.registerDialog.getAccountExistedError()).toBeVisible();
                break;
            case 'VALIDATION_EMAIL_INVALID':
                await expect(this.registerDialog.getEmailExistedError()).toBeVisible();
                break;
        }
    }
}