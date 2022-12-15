import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/configStore";
import * as Yup from "yup";
import { Input } from "antd";
import { creatUserApi } from "../../redux/reducers/AdminUserReducer";
type Props = {};

export default function FormUser({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      //Dữ liệu ban đầu mặc định của form
      email: "",
      name: "",
      password: "",
      phone: "",
      role: "",
      gender:true,
      birthday:'',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("email không được bỏ trống !")
        .email("email không đúng định dạng !"),
      password: Yup.string()
        .required("Bạn chưa nhập password")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+.]{6,20}$/,
          "Password từ 6-20 bao gồm 1 ký tự 1 chữ hoa và 1 chữ thường"
        ),
      name: Yup.string().required("name không được bỏ trống !"),
      phone: Yup.string()
      .required("Vui lòng không để trống")
      .matches(
        /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
        "Số điện thoại không đúng"
      ),
      birthday:Yup.string().required('birthday khong duoc bo trong !'),
      role: Yup.string().required('Role khong duoc bo trong !'),
    }),
    onSubmit: (values: any) => {
      console.log(values);
      const action = creatUserApi(values)
      dispatch(action)
    },
  });
  return (
    <div >
      <form className="form" onSubmit={frm.handleSubmit}>
        <div className="row form-table">
          <div className="col-6 form-table-inner">
            {/* <div className="form-group">
              <p>id</p>
              <Input placeholder="id" />
              <span className="txt"></span>
            </div> */}
            <div className="form-group">
              <p>Email</p>
              <Input placeholder="email" name="email" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
              {frm.errors.email ? (<span className="txt">{frm.errors.email}</span>) : ("")}
            </div>
            <div className="form-group">
              <p>Name</p>
              <Input placeholder="name" name="name" onChange={frm.handleChange}/>
              {frm.errors.name ? (<span className="txt">{frm.errors.name}</span>) : ("")}
            </div>
            <div className="form-group">
              <p>Password</p>
              <Input placeholder="password" name="password" onChange={frm.handleChange}/>
              {frm.errors.password ? (<span className="txt">{frm.errors.password}</span>) : ("")}
               
            </div>
          </div>
          <div className="col-6 form-table-inner">

            <div className="form-group">
              <p>Phone Number</p>
              <Input placeholder="phone" name="phone" onChange={frm.handleChange}/>
              {frm.errors.phone ? (<span className="txt">{frm.errors.phone}</span>) : ("")}

            </div>
            <div className="form-group">
              <p>Position</p>
              <select onChange={frm.handleChange} name="role">
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="form-group">
              <p>Birthday</p>
               <input type="date" className="birthday" onChange={frm.handleChange} name="birthday"/>
              {frm.errors.birthday ? (<span className="txt">{frm.errors.birthday}</span>) : ("")}
            </div>
            <div className="form-group">
              <div className="gender" id="gender" onChange={frm.handleChange}>
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
          </div>
        </div>
        <div className="row form-footer">
          <div className="col modal-footer">
            <button className="btn-creat bg-primary mx-2" type="submit">Creat</button>
            <button className="btn-creat bg-success mx-2" type="submit">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
}
