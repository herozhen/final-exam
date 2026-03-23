import { BasePage } from "@core/BasePage";
import { Page } from "@playwright/test";
export class RegisterDialog extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    private readonly lblMsgText = this.page.locator("#swal2-title");
    private readonly lbEmptyUsername = this.page.locator('#taiKhoan-helper-text');
    private readonly lbEmptyPassword = this.page.locator('#matKhau-helper-text');
    private readonly lbEmptyConfirmPassword = this.page.locator('#confirmPassWord-helper-text');
    private readonly lbPasswordLength = this.page.getByText('Mật khẩu phải có ít nhất 6 ký tự!');
    private readonly lbPasswordNotMatch = this.page.getByText('Mật khẩu không khớp !');
    private readonly lbEmptyFullName = this.page.locator('#hoTen-helper-text');
    private readonly lbEmptyEmail = this.page.locator('#email-helper-text');
    private readonly lbInvalidFullName = this.page.getByText('Họ và tên không chứa số !');
    private readonly lbAccountExisted = this.page.getByText('Tài khoản đã tồn tại!');
    private readonly lbEmailExisted = this.page.getByText('Email đã tồn tại!');

    getSuccessMessage() {
        return this.lblMsgText;
    }

    getEmptyUsernameError() {
        return this.lbEmptyUsername;
    }
    getEmptyPasswordError() {
        return this.lbEmptyPassword;
    }
    getEmptyConfirmPasswordError() {
        return this.lbEmptyConfirmPassword;
    }
    getPasswordLengthError() {
        return this.lbEmptyPassword;
    }
    getPasswordNotMatchError() {
        return this.lbPasswordNotMatch;
    }
    getEmptyFullNameError() {
        return this.lbEmptyFullName;
    }
    getEmptyEmailError() {
        return this.lbEmptyEmail;
    }
    getInvalidFullNameError() {
        return this.lbInvalidFullName;
    }
    getAccountExistedError() {
        return this.lbAccountExisted;
    }
    getEmailExistedError() {
        return this.lbEmailExisted;
    }
}
