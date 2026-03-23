import { Page, Locator } from "@playwright/test";
import { BasePage } from "@core/BasePage";
export class BookingDialog extends BasePage {
    private readonly dlgLogin = this.page.getByRole('dialog', { name: 'Bạn chưa đăng nhập' });
    private readonly dlgBookingSuccess = this.page.getByRole('dialog', { name: 'Đặt vé thành công' });
    private readonly dlgNoSeatsSelected = this.page.getByRole('dialog', { name: 'Bạn chưa chọn ghế' });
    constructor(page: Page) {
        super(page);
    }
    getLoginDialog() {
        return this.dlgLogin;
    }
    getSuccessDialog() {
        return this.dlgBookingSuccess;
    }

    getNoSeatsSelectedDialog() {
        return this.dlgNoSeatsSelected;
    }

}