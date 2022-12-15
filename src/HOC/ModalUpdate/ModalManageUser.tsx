import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateUserApi } from "../../redux/reducers/AdminUserReducer";

export default function ModalManageUser() {
  const { editUser } = useSelector((state: RootState) => state.UserReducer);
  const dispatch = useDispatch();

  const frm = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: editUser.id,
      email: editUser.email,
      name: editUser.name,
      password: editUser.password,
      phone: editUser.phone,
      role: editUser.role,
      gender: editUser.gender,
      birthday: editUser.birthday,
    },
    onSubmit: (data: any) => {
      console.log("data", data.id);
      const action: any = updateUserApi(data);
      dispatch(action);
    },
  });
  return (
    <div className="form-control form-modal">
      <form onSubmit={frm.handleSubmit}>
        <div className="form-table">
          <div className="form-group">
            <label>Id</label>
            <Input
              type="text"
              value={frm.values.id}
              name="name"
              id="name"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <Input
              type="text"
              value={frm.values.name}
              name="name"
              id="name"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Input
              type="text"
              value={frm.values.email}
              name="email"
              id="email"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Input
              value={frm.values.password}
              name="password"
              type="password"
              id="password"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <Input
              value={frm.values.phone}
              type="text"
              name="phone"
              id="phone"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label>date</label>
            <Input
              value={frm.values.birthday}
              type="date"
              name="birthday"
              id="birthday"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <select
              name="role"
              value={frm.values.role}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <div className="form-group">
            <div
              className="gender"
              id="gender"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            >
              <label htmlFor="">gender</label>
              <input
                className="mx-4"
                name="gender"
                id="gender"
                value="true"
                type="radio"
              />
              <input
                className="mx-2"
                name="gender"
                id="gender"
                value="false"
                type="radio"
              />
            </div>
          </div>
          <div className="form-group">
            <button className="update-user bg-success" type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
