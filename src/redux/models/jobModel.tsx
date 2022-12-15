//Menu
export interface JobMenu {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: DsNhomChiTietLoai[];
}
export interface JobCategories {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: DsNhomChiTietLoai[];
}
export interface DsNhomChiTietLoai {
  id: number;
  tenNhom: string;
  hinhAnh: string;
  maLoaiCongviec: number;
  dsChiTietLoai: DsChiTietLoai[];
}

export interface DsChiTietLoai {
  id: number;
  tenChiTiet: string;
}
//Chi tiết loại công việc

//Detail Product
export interface JobDetail {
  id: number;
  congViec: CongViec;
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
}

export interface CongViec {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}

//Product
export interface Job {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}


export interface CongViec {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}
export interface ModalJob {
  id: number;
  tenLoaiCongViec: string;
}
// thuê công việc
export interface ThueCongViecModal {
  id:          number;
  maCongViec:  number;
  maNguoiThue: number;
  ngayThue:    string;
  hoanThanh:   boolean;
}
//User
export interface UserModal {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: number;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
  bookingJob: string[];
}