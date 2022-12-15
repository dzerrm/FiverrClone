import React, { useEffect } from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginApi } from '../../redux/reducers/AdminUserReducer';
import { AppDispatch } from '../../redux/configStore';


export default function LoginDemo() {
    const dispatch:AppDispatch = useDispatch();
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
      onSubmit: (values:any) => {
        const actionThunk = loginApi(values)
        dispatch(actionThunk);
      },
    },);
  //   useEffect(()=> {
  //     const actionApi = loginApi();
  //     dispatch(actionApi);
  // },[]))
  return (
    <div className='container'>
        <form className="container" w-25 onSubmit={frm.handleSubmit}>
        <h1>Login</h1>
        <hr />
        <div className="form-style">
          <div className="form-group">
            <p>Email</p>
            <input
              type="text"
              name="email"
              id="email"
              className="input-form"
              onChange={frm.handleChange}
            />
            {frm.errors.email ? (
              <p className="text-danger">{frm.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mt-3">
            <p>Password</p>
            <input
              type="password"
              name="password"
              id="password"
              className="input-form"
              onChange={frm.handleChange}
            />
            {frm.errors.password ? (
              <p className="text-danger">{frm.errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mt-2">
            <div className="row">
              <div className="col-4 text-end">
                <button className="button" type="submit">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}