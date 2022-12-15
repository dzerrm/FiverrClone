import { GoogleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getCongViecApi } from "../../redux/reducers/ProducReducers";
import {
  editUserApi,
  getUserApi,
  updateUserApi,
} from "../../redux/reducers/AdminUserReducer";
import { updateAvatar3 } from "../../redux/reducers/ReducerUser";
import { useFormik } from "formik";

export default function InfoProfile() {
  const dispatch: AppDispatch = useDispatch();
  const { userLogin } = useSelector((state: RootState) => state.UserReducer);
  let idUser = userLogin.id;
  console.log(idUser);
  const { congViecDaThue } = useSelector(
    (state: RootState) => state.ProducReducers
  );

  useEffect(() => {
    dispatch(getUserApi());
  }, []);
  useEffect(() => {
    dispatch(getCongViecApi());
  }, []);
  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    const action = updateAvatar3(file);
    dispatch(action);
  };
  //edit name user
  const { editUser } = useSelector((state: RootState) => state.UserReducer);
  //  const dispatch = useDispatch();
  const frm = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: editUser.id,
      name: editUser.name,
      password: editUser.password,
      phone: editUser.phone,
      role: editUser.role,
      gender: editUser.gender,
      birthday: editUser.birthday,
    },
    onSubmit: (data: any) => {
      const action: any = updateUserApi(data);
      console.log('data',data)
      dispatch(action);
    },
  });

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="info-column col col-lg-4">
      <div>
        <div className="sellerCard-component">
          <div className="user-profile-info">
            <div className="user-profile-image">
              <div className="user-img">
                <img src={userLogin.avatar} alt="" />
                <div className="icon-camera">
                  <input
                    className="ip-upAvatar"
                    type="file"
                    onChange={handlePreviewAvatar}
                  />
                  <i className="fas fa-camera"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="user-profile-name">
            <p>{userLogin?.name}</p>

            <Button
              type="primary"
              style={{ background: "none", border: "none", color: "#62646a" }}
              onClick={() => {
                setIsModalOpen(true);
                const action: any = editUserApi(idUser);
                console.log(action);
                dispatch(action);
              }}
            >
              <i className="fa fa-paint-brush" aria-hidden="true"></i>
            </Button>
            <Modal
              title="Edit Name User"
              width={350}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <form action="" onSubmit={frm.handleSubmit}>
                <Input
                  type="text"
                  value={frm.values.name}
                  name="name"
                  id="name"
                  onChange={frm.handleChange}
                />
                <button type="submit">Update</button>
              </form>
            </Modal>
            {/* <input
                  className="label_inp"
                  type="file"
                  onChange={(e) => {
                    const file = _.head(e.target.files);
                    dispatch(updateAvatar(file))
                      .then((res) => {
                        // toast.success("Updated Avatar Successfully !");
                      })
                      .catch((err) => {
                        // toast.success("Error");
                      });
                  }}
                /> */}
          </div>
          <div className="button-wrapper">
            <a href="#">Preview Fiverr Profile</a>
          </div>
          <hr />
          <div className="user-desc">
            <ul>
              <li>
                <span className="d-flex">
                  <i className="fa fa-map-marker mx-1" aria-hidden="true"></i>
                  <p>Form</p>
                </span>
                <p>Vietnam</p>
              </li>
              <li>
                <span className="d-flex">
                  <i className="fa fa-user mx-1" aria-hidden="true"></i>
                  <p>Member since</p>
                </span>
                <p>Oct 2022</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="user-segmentation">
        <div className="profile-desc inner-row">
          <p>Description</p>
          <a href="#">Edit Description</a>
        </div>
        <hr />
        <div className="inner-row">
          <p>Languages</p>
          <a href="#">Add New</a>
        </div>
        <div className="profile-langguages">
          <p className="title">English - Basic</p>
        </div>
        <hr />
        <div className="profile-accounts">
          <p>Linked Accounts</p>
          <ul>
            <li>
              <PlusOutlined />
              <a href="#" className="btn-connect">
                Facebook
              </a>
            </li>
            <li>
              <GoogleOutlined />
              <a href="#" className="btn-connect cl-gg">
                Google
              </a>
            </li>
            <li>
              <PlusOutlined />
              <a href="#" className="btn-connect">
                Dirbble
              </a>
            </li>
            <li>
              <PlusOutlined />
              <a href="#" className="btn-connect">
                Stack Overflow
              </a>
            </li>
            <li>
              <PlusOutlined />
              <a href="#" className="btn-connect">
                Github
              </a>
            </li>
            <li>
              <PlusOutlined />
              <a href="#" className="btn-connect">
                Vimeo
              </a>
            </li>
            <li>
              <PlusOutlined />
              <a className="btn-connect">Twitter</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="profile-skill inner-row">
          <p>Skills</p>
          <a href="#">Add New</a>
        </div>
        <p className="title">Add your skill.</p>
        <hr />
        <div className="profile-education inner-row">
          <p>Education</p>
          <a href="#">Add New</a>
        </div>
        <p className="title">Add your Education</p>
        <hr />
        <div className="profile-certlflcation inner-row">
          <p>Certlflcation</p>
          <a href="#">Add New</a>
        </div>
        <p className="title">Add your Certification</p>
        <hr />
      </div>
    </div>
  );
}
