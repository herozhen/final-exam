import { Page } from '@playwright/test';
import { BasePage } from '@core/BasePage';

export class BookingPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    seat = (seatNumber: number) => {
        return this.page.locator(`//button[.="${seatNumber}"]`);
    }
    bookBtn = this.page.locator('button:has-text("ĐẶT VÉ")');
    selectedSeats = this.page.locator('//span[contains(text(),"Ghế")]');


    async selectSeat(seatNumber: number) {
        await this.seat(seatNumber).waitFor({ state: 'visible' });
        await this.click(this.seat(seatNumber));
    }

    async clickBook() {
        await this.click(this.bookBtn);
    }

    async getSelectedSeats(): Promise<number[]> {
        await this.selectedSeats.first().waitFor({ timeout: 5000 });
        const texts = await this.selectedSeats.allTextContents();
        console.log('TEXTS:', texts);
        return texts.map(t => {
            const match = t.match(/\d+/); // lấy số
            console.log('Matched number:', match ? match[0] : 'No match');
            return match ? Number(match[0]) : 0;
        });
    }
    async isSeatAvailable(seatNumber: number): Promise<boolean> {
        try {
            await this.seat(seatNumber).waitFor({ state: 'visible' });
            const seatLocator = this.seat(seatNumber);
            const count = await seatLocator.count();
            console.log(`Checking availability for seat ${seatNumber}: Found ${count} elements`);
            return count > 0;
        } catch (error) {
            return false;
        }


    }
}