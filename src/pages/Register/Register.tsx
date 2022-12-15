import React from "react";
// import { Input } from "antd";
import * as Yup from "yup";
import { AppDispatch } from "../../redux/configStore";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { creatUserApi } from "../../redux/reducers/AdminUserReducer";
import { singUpApi } from "../../redux/reducers/ReducerUser";
import { NavLink } from "react-router-dom";

export default function Register() {
  const dispatch: AppDispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      phone: "",
      gender: true,
      birthday: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is not vacant!")
        .email("Email invalidate !"),
      password: Yup.string()
        .required("You have not entered the password")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+.]{6,20}$/,
          "Passwords should include 6-20 characters, 1 symbol, 1 uppercase and 1 lowercase"
        ),
      name: Yup.string().required("Name cannot be left blank !"),
      phone: Yup.string()
        .required("Please do not leave it blank")
        .matches(
          /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
          "Incorrect phone number"
        ),
      birthday: Yup.string().required("Birthday cannot be left blank !"),
    }),
    onSubmit: (values: any) => {
      console.log(values);
      const action = singUpApi(values);
      dispatch(action);
    },
  });

  return (
    <div className="register_fiverr">
      <div className="container">
        <div className="row">
          <div className="col-6 register_bg">
            <img src="./img/register.jpg" alt="" />
          </div>
          <div className="col-6 register_form">
            <h2 className="text-center">Register Fiverr</h2>
            <form className="form" onSubmit={frm.handleSubmit}>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    placeholder="email"
                    name="email"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  {frm.errors.email ? (
                    <span className="txt">{frm.errors.email}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <p>Name</p>
                  <input
                    placeholder="name"
                    name="name"
                    onChange={frm.handleChange}
                  />
                  {frm.errors.name ? (
                    <span className="txt">{frm.errors.name}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <p>Password</p>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={frm.handleChange}
                  />
                  {frm.errors.password ? (
                    <span className="txt">{frm.errors.password}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <p>Phone Number</p>
                  <input
                    placeholder="phone"
                    name="phone"
                    onChange={frm.handleChange}
                  />
                  {frm.errors.phone ? (
                    <span className="txt">{frm.errors.phone}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <p>Birthday</p>
                  <input
                    type="date"
                    className="birthday"
                    onChange={frm.handleChange}
                    name="birthday"
                  />
                  {frm.errors.birthday ? (
                    <span className="txt">{frm.errors.birthday}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-gender">
                  <div
                    className="gender"
                    id="gender"
                    onChange={frm.handleChange}
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
                <div className="form_footer">
                <div className="col-6">
                  <NavLink to="/login">Login</NavLink>
                </div>
                <div className="col-6">
                  <button type="submit" className="btn-register">
                    Register
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
