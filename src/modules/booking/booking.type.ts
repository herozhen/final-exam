export type BookingExpectedType =
    'CHOOSE_SEATS_SUCCESS' | 'SEAT_ALREADY_BOOKED' | 'CHOOSE_SEATS_RANDOM_SUCCESS';
    
export type BookingCase =
    'NOT_lOGGED_IN' | 'LOGGED_SUCCESS'|'NO_SEATS_SEALECTED';
export type SeatType = 'NORMAL' | 'VIP';

export interface BookingData {
    caseId: string;
    description: string;
    username?: string;
    password?: string;
    remember?: boolean;
    movie: {
        movie: string;
        cinema: string;
        date: string;
        maLichChieu: number
    };
    seats?: number[];
    seatRequest?: {
        type: SeatType;
        quantity: number;
    };
    bookingCase: BookingCase;
    expectedType: BookingExpectedType;
}