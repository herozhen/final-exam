import { BookingPage } from '@modules/booking/booking.page';
import { BookingData, } from '@modules/booking/booking.type';
import { APIRequestContext } from '@playwright/test';
import { BookingApi } from './booking.api';
import { BookingService } from './booking.service';

export class BookingFlow {

    constructor(private bookingPage: BookingPage, private request: APIRequestContext) { }
    async completeBooking() {
        await this.bookingPage.clickBook();
    }

    async selectSeatsFlow(data: BookingData) {
        const failedSeats: number[] = [];

        for (const seat of data.seats) {
            const isAvailable = await this.bookingPage.isSeatAvailable(seat);
            if (!isAvailable) {
                failedSeats.push(seat);
                continue;
            }
            await this.bookingPage.selectSeat(seat);
        }
        return {
            success: failedSeats.length === 0, failedSeats
        };
    }

    async selectSeatsAuto(data: BookingData) {
        const api = new BookingApi(this.request);
        // 1. gọi API
        const seats = await api.getSeats(data.movie.maLichChieu);
        // 2. lọc ghế chưa đặt
        const available = BookingService.filterAvailable(seats);
        // 3. lọc loại ghế
        const byType = BookingService.filterByType(
            available,
            data.seatRequest.type
        );
        // 4. chọn số lượng
        const selected = BookingService.pick(
            byType,
            data.seatRequest.quantity
        );
        // 5. click UI
        for (const s of selected) {
            const seatNumber = s.tenGhe.toString().padStart(2, '0');
            await this.bookingPage.selectSeat(seatNumber);
        }
        return {
            success: selected.length === data.seatRequest.quantity,
            seats: selected.map(s => Number(s.tenGhe))
        };
    }

}