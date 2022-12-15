import { Button, Input, Select } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { RootState } from "../../redux/configStore";
import { updateIdService } from "../../redux/reducers/AdminManageService";

export default function ModalEditService() {
  const dispatch = useDispatch();

  const { getIdService } = useSelector(
    (state: RootState) => state.AdminManageService
  );
  console.log("data id service", getIdService);

  const frm = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: getIdService.id,
      maCongViec: getIdService.maCongViec,
      maNguoiThue: getIdService.maNguoiThue,
      ngayThue: getIdService.ngayThue,
      hoanThanh: getIdService.hoanThanh,
    },
    onSubmit: (data: any) => {
      console.log("update service", data);
        const action: any = updateIdService(data);
        dispatch(action);
    },
  });
  return (
    <div className="form-control form-modal">
      <form onSubmit={frm.handleSubmit}>
        <div className="form-table">
          <div className="form-group">
            <label>Mã Công Việc</label>
            <Input
              type="text"
              name="maCongViec"
              id="maCongViec"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
              value={frm.values.maCongViec}
            />
          </div>
          <div className="form-group">
            <label>Mã Người Thuê</label>
            <Input
              type="text"
              name="maNguoiThue"
              id="maNguoiThue"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
              value={frm.values.maNguoiThue}
            />
          </div>
          <div className="form-group">
            <label>Ngày thuê</label>
            <Input
              type="text"
              name="ngayThue"
              id="ngayThue"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
              value={frm.values.ngayThue}
            />
          </div>
          <div className="form-group">
            <label>Hoàn Thành</label>
            <br />
            <select
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
              value={frm.values.hoanThanh}
              name="hoanThanh"
              id="hoanThanh"
            >
              <option value="true">Hoàn Thành</option>
              <option value="false">Chưa Hoàn Thành</option>
            </select>
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
