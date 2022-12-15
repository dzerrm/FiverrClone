import { Input } from "antd";
import React, { useState } from "react";
import * as Yup from "yup";
import { AppDispatch } from "../../redux/configStore";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { loginApi } from "../../redux/reducers/AdminUserReducer";


// 
export default function Login() {
  const dispatch: AppDispatch = useDispatch();
  //Vladition
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .required("Password không được bỏ trống")
        .min(6, "pass từ 6 - 20 ký tự!")
        .max(20, "pass từ 6 - 20 ký tự!"),
    }),
    onSubmit: (values: any) => {
      console.log(values);
      const actionThunk = loginApi(values);
      dispatch(actionThunk);
    },
  });
  //hiển thị password
  return (
    <div className="login_fiverr">
      <div className="container">
        <div className="row">
          <div className="col-6 login_bg">
            <img src="./img/login.jpg" alt="" />
          </div>
          <div className="col-6 login_form">
            <h2 className="text-center">Login Fiverr</h2>
            <form className="form" onSubmit={frm.handleSubmit}>
              <div className="form-group">
                <p>Email</p>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={frm.handleChange}
                />
                {frm.errors.email ? (
                  <span className="txt">{frm.errors.email}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <p>Password</p>
                <input
                  name="password"
                  id="password"
                  onChange={frm.handleChange}
                  type="password"
                />
                {frm.errors.email ? (
                  <span className="txt">{frm.errors.password}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group form_footer">
                <div className="col-6">
                  <NavLink to="/register">Forget Resgister ?</NavLink>
                </div>
                <div className="col-6">
                  <button type="submit" className="btn-Login">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
