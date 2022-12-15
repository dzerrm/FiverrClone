import React, { useEffect } from "react";
import { ArrowRightOutlined, RightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState  } from "../../redux/configStore";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import { getStoreJson } from "../../util/settings";
// import Slider from 'react-slick'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import {
  DsChiTietLoai,
  DsNhomChiTietLoai,
  getIdChiTietLoaiCV,
  getJobCate
} from "../../redux/reducers/ProducReducers";

export default function DetailCategories() {
  const { arrJobCategories } = useSelector((state: RootState) => state.ProducReducers);
  console.log(arrJobCategories)
  const arrayJobMenu = getStoreJson("arrJobCategories");
  // console.log('id thuê',idThue)
  const dispatch: AppDispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  console.log('params',params)
  useEffect(() => {
    let { id } = params;
    console.log('catagories',id)
    const action: any = getJobCate(id);
    dispatch(action);
  }, [params.id]);

  const renderJobCategories = () => {
    return arrayJobMenu[0].dsNhomChiTietLoai?.map(
      (item: DsNhomChiTietLoai) => {
        return (
          <div className="item-job" key={item.id}>
            <div className="card-img">
              <img src={item.hinhAnh} alt="..." />
            </div>
            <div className="card-name">{item.tenNhom}</div>
            <div className="card-footer">
              <ul>
                {item.dsChiTietLoai?.map(
                  (itemds: DsChiTietLoai, indexds:number) => {
                    return (
                      <li >
                        <a key={indexds} onClick={()=>{
                            navigate(`/job/${itemds.id}`)
                            const action:any = getIdChiTietLoaiCV(itemds.id);
                            dispatch(action)
                          }}
                        >{itemds.tenChiTiet}</a>
                        <ArrowRightOutlined className="icon" />
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        );
      }
    );
  };
// slider

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };

  return (
    <div className="Header-Categories">
      <div className="container">
        <div className="banner-category bg-dark">
          <div className="banner-page">
            <img src="https://fiverr-res.cloudinary.com/image/upload/f_a…afd38cf-1626595415203/graphics-design-desktop.png" alt="" />
            <div className="banner-content">
              <h3 className="title">Graphics & Design</h3>
              <p className="subtitle">Designs to make you stand out.</p>
              <div className="button-banner">
                <button className="button">How Fiverr Works</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-section">
          <div className="control-wrapper">
            <div className="control-wrapper_left"><h3>Most popular in {arrJobCategories.tenLoaiCongViec}</h3></div>
            <div className="control-wrapper_right"></div>
          </div>
          <div className="slides-list">
            <div className="item-slider">
               <a href=""><img src="/img/item-cr1.webp" alt="" /></a>
               <span className="title">Video Editing</span>
               <span className="icon-right"><ArrowRightOutlined /></span>
            </div>
            <div className="item-slider">
               <a href=""><img src="/img/item-cr2.webp" alt="" /></a>
               <span className="title">Video Editing</span>
               <span className="icon-right"><ArrowRightOutlined /></span>
            </div>
            <div className="item-slider">
               <a href=""><img src="/img/item-cr4.webp" alt="" /></a>
               <span className="title">Video Editing</span>
               <span className="icon-right"><ArrowRightOutlined /></span>

            </div>
            <div className="item-slider">
               <a href=""><img src="/img/item-cr1.webp" alt="" /></a>
               <span className="title">Video Afs & Commerclals</span>
               <span className="icon-right"><ArrowRightOutlined /></span>

            </div>
          </div>
        </div>
        {/* show list job */}
        <div className="header-job">
          <h4 className="text-title">{arrJobCategories.tenLoaiCongViec}</h4>
          <div className="list-job row">
            {renderJobCategories()}
            {/*  */}
          </div>
        </div>
        <div className="services">
        <h3>Services Related To Graphics & Design</h3>

        <ul>
          <span>
            <a href="">Minimalist logo design</a>
          </span>

          <span>
            <a href="">Signature logo design</a>
          </span>

          <span>
            <a href="">Mascot logo design</a>
          </span>
          <span>
            <a href="">3d logo design</a>
          </span>

          <span>
            <a href="">Hand drawn logo design</a>
          </span>

          <span>
            <a href="">Vintage logo design</a>
          </span>

          <span>
            <a href="">Remove background</a>
          </span>

          <span>
            <a href="">Photo restoration</a>
          </span>

          <span>
            <a href="">Photo retouching</a>
          </span>

          <span>
            <a href="">Image resize</a>
          </span>

          <span>
            <a href="">Product label design</a>
          </span>

          <span>
            <a href="">Custom twitch overlay</a>
          </span>

          <span>
            <a href="">Custom twitch emotes</a>
          </span>

          <span>
            <a href="">Gaming logo</a>
          </span>
          <span>
            <a href="">Children book illustration</a>
          </span>

          <span>
            <a href="">Instagram design</a>
          </span>

          <span>
            <a href="">Movie poster design</a>
          </span>

          <span>
            <a href="">Box design</a>
          </span>

          <span>
            <a href="">Logo maker</a>
          </span>

          <span>
            <a href="">Logo ideas</a>
          </span>
        </ul>
      </div>
      </div>
    </div>
  );
}
