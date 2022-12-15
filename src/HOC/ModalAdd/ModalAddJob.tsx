import { Input } from "antd";
// import TextArea from "antd/lib/input/TextArea";
import { useFormik } from "formik";
import React, { useState, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postJob } from "../../redux/reducers/AdminManageJobReducer";
import { getStoreJson } from "../../util/settings";

const { TextArea } = Input;
export default function ModalAddJob() {
  let id_User = getStoreJson('id_User')
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      id:0,
      tenCongViec: "",
      danhGia: "",
      giaTien: "",
      nguoiTao: id_User,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: "",
      moTaNgan: "",
      saoCongViec: "",
    },
    validationSchema: Yup.object().shape({
      tenCongViec: Yup.string().required("không được bỏ trống !"),
    }),
    onSubmit: (values: any) => {
      console.log(values)
      const action: any = postJob(values);
      dispatch(action);
    },
  });
  return (
    <div className="form-control form-modal">
      <h3>Thêm công việc</h3>
      <form  onSubmit={frm.handleSubmit}>
        <div className="  form-table">
          <div className="form-group">
            <label htmlFor="">Tên Công Việc</label>
            <Input
              type="text"
              name="tenCongViec"
              id="tenCongViec"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
            {frm.errors.tenCongViec ? (
              <span className="txt">{frm.errors.tenCongViec}</span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="">Hình ảnh</label>
            <Input
              type="file"
              name="hinhAnh"
              id="hinhAnh"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Đánh giá</label>
            <Input
              type="number"
              name="danhGia"
              id="danhGia"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="">Người Tạo</label>
            <Input
              type="number"
              name="nguoiTao"
              id="nguoiTao"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="">Gía Tiền</label>
            <Input
              type="number"
              name="giaTien"
              id="giaTien"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mô tả</label>
            <TextArea
              name="moTa"
              id="moTa"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mô tả ngắn</label>
            <TextArea
              name="moTaNgan"
              id="moTaNgan"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mã chi tiết loại công việc</label>
            <Input
              type="number"
              name="maChiTietLoaiCongViec"
              id="maChiTietLoaiCongViec"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Sao công việc</label>
            <Input
              type="number"
              name="saoCongViec"
              id="saoCongViec"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <button className="update-user bg-success btn-modal" type="submit">
              Add Job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
