// Thông tin phim
export interface ThongTinPhim {
    maLichChieu: number;
    tenCumRap: string;
    tenRap: string;
    diaChi: string;
    tenPhim: string;
    hinhAnh: string;
    ngayChieu: string; // format: DD/MM/YYYY
    gioChieu: string;  // format: HH:mm
}

// Thông tin ghế
export interface Ghe {
    maGhe: number;
    tenGhe: string;
    maRap: number;
    loaiGhe: 'Thuong' | 'Vip'; 
    stt: string;
    giaVe: number;
    daDat: boolean;
    taiKhoanNguoiDat: string | null;
}

// Response booking API
export interface BookingResponse {
    thongTinPhim: ThongTinPhim;
    danhSachGhe: Ghe[];
}