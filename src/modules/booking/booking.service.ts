export class BookingService {
    // ghế chưa đặt
    static filterAvailable(seats: any[]) {
        return seats.filter(s => !s.daDat);
    }

    // lọc theo loại
    static filterByType(seats: any[], type: 'NORMAL' | 'VIP') {
        return seats.filter(s =>
            type === 'NORMAL'
                ? s.loaiGhe === 'Thuong'
                : s.loaiGhe === 'Vip'
        );
    }

    // chọn số lượng
    static pick(seats: any[], quantity: number) {
        return seats.slice(0, quantity);
    }
}