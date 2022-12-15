import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import * as Yup from "yup";
import { Input } from "antd";
import { updateIdJobType } from "../../redux/reducers/AdminManageJobTypeReducer";

export default function ModalEditJobType() {
  const { getIdJob } = useSelector(
    (state: RootState) => state.AdminManageJobTypeReducer
  );
  console.log("id cần sửa", getIdJob);
  const dispatch = useDispatch();
  const frm = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: getIdJob.id,
      tenLoaiCongViec: getIdJob.tenLoaiCongViec,
    },
    validationSchema: Yup.object().shape({
      tenLoaiCongViec: Yup.string().required("không được bỏ trống !"),
    }),
    onSubmit: (data: any) => {
      const action: any = updateIdJobType(data);
      dispatch(action);
    },
  });
  return (
    <div className="form-control form-modal">
      <form  onSubmit={frm.handleSubmit}>
        <h3>Edit Job Type</h3>
        <div className="form-table">
          <div className="form-group">
            <label>Tên Loại Công Việc</label>
            <Input
              type="text"
              value={frm.values.tenLoaiCongViec}
              name="tenLoaiCongViec"
              id="tenLoaiCongViec"
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
