import { expect, Page } from '@playwright/test';
import { BookingPage } from '@modules/booking/booking.page';
import { BookingData } from '@modules/booking/booking.type';
import { BookingDialog } from '@shared/dialogs/booking.dialog';

export class BookingValidator {
    private result: any;

    //constructor(private bookingDialog: BookingDialog) { }
    constructor(
        private bookingPage: BookingPage,
        private bookingDialog: BookingDialog
    ) { }

    setResult(result: any) {
        this.result = result;
    }

    async verifySelectedSeats(expectedSeats: number[]) {
        const texts = await this.bookingPage.getSelectedSeats();
        const combined = texts.join(' ');
        for (const seat of expectedSeats) {
            expect(combined).toContain(seat.toString());
        }
    }

    async validateData(data: BookingData) {
        switch (data.expectedType) {
            case 'CHOOSE_SEATS_SUCCESS':
                await expect(this.result.success).toBeTruthy();
                await this.verifySelectedSeats(data.seats);
                break;
            case 'SEAT_ALREADY_BOOKED':
                expect(this.result.success).toBeFalsy();
                expect(this.result.failedSeats.length).toBeGreaterThan(0);
                break;
            case 'CHOOSE_SEATS_RANDOM_SUCCESS':
                await expect(this.result.success).toBeTruthy();
                await this.verifySelectedSeats(this.result.seats);
                break;
        }
    }
    async validateCase(data: BookingData) {
        switch (data.bookingCase) {
            case 'NOT_lOGGED_IN':
                await expect(this.bookingDialog.getLoginDialog()).toBeVisible();
                break;
            case 'LOGGED_SUCCESS':
                await expect(this.bookingDialog.getSuccessDialog()).toBeVisible();
                break;
            case 'NO_SEATS_SEALECTED':
                await expect(this.bookingDialog.getNoSeatsSelectedDialog()).toBeVisible();
                break;
        }
    }
}