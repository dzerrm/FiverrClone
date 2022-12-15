import { AudioOutlined } from "@ant-design/icons";
import { Dropdown, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/styles.scss";
import { RootState } from "../../redux/configStore";
import { history } from '../../index';

import {
  DsChiTietLoai,
  DsNhomChiTietLoai,
  getAllProduct,
  getIdChiTietLoaiCV,
  getJobCate,
  getJobMenu,
  JobMenu,
  searchJob,
} from "../../redux/reducers/ProducReducers";
import { ACCESS_TOKEN, getStoreJson, USER_LOGIN } from "../../util/settings";
import { getAllUser, signOutAction } from "../../redux/reducers/AdminUserReducer";
import { searchNameJob } from "../../redux/reducers/AdminManageJobReducer";
type Props = {};
const { Search } = Input;

const onSearch = (value: string) => console.log(value);
export default function MenuPages({}: Props) {
  const { arrayJobMenu } = useSelector((state: RootState) => state.ProducReducers);
  const userLogin = getStoreJson('userLogin')
 const [sparam, setSParam] = useState("")
  
  function logOut(){
    localStorage.clear();
    history.push('/')
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const action: any = getJobMenu();
    dispatch(action);
  }, []);
  const renderMenuPages = () => {
    return arrayJobMenu.map((menuPages: JobMenu, index: number) => {
      return (
        <li key={index}>
          <a
            onClick={() => {
              navigate(`/categories/${menuPages.id}`);
              const action:any = getJobCate(menuPages.id)
              dispatch(action)
            }}
          >
            {menuPages.tenLoaiCongViec}
          </a>
          <div className="sub-menu">
            <ul className="row">
              {menuPages.dsNhomChiTietLoai?.map(
                (itemSub: DsNhomChiTietLoai, indexSub:number) => {
                  return (
                    <li key={indexSub} className="col-4">
                      <a href="" className="tenNhom">
                        {itemSub.tenNhom}
                      </a>
                      {itemSub.dsChiTietLoai.map((itemSubS: DsChiTietLoai, indexSubs:number) => {
                        return (
                          <a  key={indexSubs}
                          onClick={()=>{
                            navigate(`/job/${itemSubS.id}`);
                            const action:any = getIdChiTietLoaiCV(itemSubS.id);
                            console.log(itemSub.id)
                            dispatch(action)
                          }}
                          >
                            {itemSubS.tenChiTiet}
                          </a>
                        );
                      })}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </li>
      );
    });
  };

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
              <hr />
              <li><a href="">Become a Seller</a></li>
              <li><a href="">Seting</a></li>
              <hr />
              <li><button className="btn btn_logout" onClick={logOut}>Logout</button></li>
          </div>
        </div>
      </li> 
    }
  }
    //search
    const onSearch = (value: string) => {
      setSParam(value)
      if(value){
        const action:any = searchJob(value)
        console.log('key search',value)
         navigate(`/joblist/${value}`) 
        dispatch(action)
      }else{
        const action:any = getAllProduct()
        dispatch(action)
      }
    };
  return (
    <>
      <div className="header-fiverr container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="/">
              <img src="./img/Fiverr_logo.png" alt="" />
            </a>
          </div>
          <div className="fiverr-header-search">

            <Search
              id="keywordRef"
              placeholder="What service are you looking for today?"
              className="ip-search"
              onSearch={onSearch}              
              enterButton
            />
          </div>
          <div className="fiverr-nav-right ">
            <ul>
              <li>
                <NavLink to="/profile">Fiverr Business</NavLink>
              </li>
              <li>
                <a href="/">Explore</a>
              </li>
              <li>
                <a href="/">English</a>
              </li>
              <li>
                <a href="/">US$ USD</a>
              </li>
              <li>
                <a href="/">Become a seller</a>
              </li>
                {renderUserLogin()}
            </ul>
          </div>
        </div>
      </div>
      <nav className=" menu-pages">
        <div className="menu-cate container">
          <ul>{renderMenuPages()}</ul>
        </div>
      </nav>
    </>
  );
}
