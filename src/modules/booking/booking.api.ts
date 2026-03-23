import { APIRequestContext } from '@playwright/test';
import { BookingResponse } from '@modules/booking/booking.api.type';

export class BookingApi {
    constructor(private request: APIRequestContext) { }

    async getSeats(maLichChieu: number) {
        const res = await this.request.get(
            `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
        );
        console.log('STATUS:', res.status());
        const body: BookingResponse = await res.json();
        console.log('BODY:', body.danhSachGhe);
        return body.danhSachGhe;
    }
}