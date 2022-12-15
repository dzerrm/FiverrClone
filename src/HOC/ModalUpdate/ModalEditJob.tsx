import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { RootState } from "../../redux/configStore";
import { updateIdJob } from "../../redux/reducers/AdminManageJobReducer";

export default function ModalEditJob() {
  const dispatch = useDispatch();
  const { idJob } = useSelector(
    (state: RootState) => state.AdminManageJobReducer
  );
  console.log("id job", idJob);
  const frm = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: idJob.id,
      tenCongViec: idJob.tenCongViec,
      danhGia: idJob.danhGia,
      giaTien: idJob.giaTien,
      nguoiTao: idJob.nguoiTao,
      hinhAnh: idJob.hinhAnh,
      moTa: idJob.moTa,
      maChiTietLoaiCongViec: idJob.maChiTietLoaiCongViec,
      moTaNgan: idJob.moTaNgan,
      saoCongViec: idJob.saoCongViec,
    },
    validationSchema: Yup.object().shape({
      tenCongViec: Yup.string().required("không được bỏ trống !"),
    }),
    onSubmit: (data: any) => {
      console.log("VALUE ADD JOB", data);
      const action: any = updateIdJob(data);
      alert('truyền data thành công')
      dispatch(action);
    },
  });
  return (
    <div className="form-control form-modal">
      <h3>Edit</h3>
      <form onSubmit={frm.handleSubmit}>
        <div className="  form-table">
          <div className="form-group">
            <label htmlFor="">Tên Công Việc</label>
            <Input
              type="text"
              name="tenCongViec"
              id="tenCongViec"
              value={frm.values.tenCongViec}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Hình ảnh</label>
            <Input
              type="text"
              name="hinhAnh"
              id="hinhAnh"
              value={frm.values.hinhAnh}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Đánh giá</label>
            <Input
              type="text"
              name="danhGia"
              id="danhGia"
              value={frm.values.danhGia}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Gía Tiền</label>
            <Input
              type="text"
              name="giaTien"
              id="giaTien"
              value={frm.values.giaTien}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mô tả</label>
            <TextArea
              name="moTa"
              id="moTa"
              value={frm.values.moTa}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mô tả ngắn</label>
            <TextArea
              name="moTaNgan"
              id="moTaNgan"
              value={frm.values.moTaNgan}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mã chi tiết loại công việc</label>
            <Input
              type="text"
              name="maChiTietLoaiCongViec"
              id="maChiTietLoaiCongViec"
              value={frm.values.maChiTietLoaiCongViec}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Sao công việc</label>
            <Input
              type="text"
              name="saoCongViec"
              id="saoCongViec"
              value={frm.values.saoCongViec}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <button className="update-user bg-success btn-modal" type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
