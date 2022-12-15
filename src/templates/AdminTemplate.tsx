import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { getStoreJson } from "../util/settings";
import { history } from "..";

type Props = {};

export default function AdminTemplate({}: Props) {
  const userLogin = getStoreJson('userLogin');
  function logOut(){
    localStorage.clear();
    history.push('/')
  }
  const renderUserLogin = () =>{
    if(userLogin == null){
      return<NavLink to={'/login'} className="login_header">Login</NavLink>
    }else{
      return<li>
        <div className="avata_user_login">
          <img src={userLogin?.avatar} alt="avatar" />
            <div className="sub_login">
              <li><NavLink to="/profile">Profile</NavLink></li>
              <li><a href="">Manage Request</a></li>
              <li><button className="btn btn_logout" onClick={logOut}>Logout</button></li>
          </div>
        </div>
      </li> 
    }}
  return (
    <div className="section">
      <div className="dashboard_menu">
        <div className="item-logo text-center"><NavLink to={'/'} ><img width={150} style={{margin:10}} src="./img/Fiverr_logo.png" alt="" /></NavLink></div>
        <div className="item-menu">
          <li>
            <NavLink to="">
              {/* <div className="icon">
                <UserOutlined />
              </div> */}
              <div className="title">Quản Lý Người Dùng</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="managenmentjob">
              {/* <div className="icon">
                <UserOutlined />
              </div> */}
              <div className="title">Quản Lý Công Việc</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="managenmentjobtype">
              {/* <div className="icon">
                <UserOutlined />
              </div> */}
              <div className="title">Quản Lý Loại Công Việc</div>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="managejobtypedetail">
              <div className="title">Quản Lý Chi Tiết Loại Công Việc</div>
            </NavLink>
          </li> */}
          <li>
            <NavLink to="manageService">
              <div className="icon">
                <UserOutlined />
              </div>
              <div className="title">Quản Lý Dịch Vụ</div>
            </NavLink>
          </li>
        </div>
        <div className="menu"></div>
      </div>
      <div className="header">
        <div className="header_top">
          <div className="user-manage d-flex">
            {renderUserLogin()}
          </div>
        </div>
        <div className="header-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
