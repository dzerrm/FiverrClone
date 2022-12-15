import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllProduct } from "../../redux/reducers/ProducReducers";
import { JobDetail } from "../../redux/models/jobModel";
type Props = {};

export default function JobCard({}: Props) {
  const { ChiTietCV } = useSelector((state: RootState) => state.ProducReducers);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const actionApi = getAllProduct();
    dispatch(actionApi);
  }, []);
  //render
  const renderCongViec = () => {
    return ChiTietCV.map((item: JobDetail, index: number) => {
      return (
        
      <div className="col-4" key={index}>
      <div className="item">
        <NavLink className="top" to="/chi-tiet-cong-viec">
          {/* hinhAnh */}
          <img src={item.congViec.hinhAnh} alt="..." />
        </NavLink>
        <div className="center">
          <div className="accountHolder d-flex">
            <div className="avatar">
              {/* avatar */}
              <img src={item.avatar} alt="..." />
            </div>
            <div className="accountName">
              {/* tenNguoiTao */}
              <a href="#">{item.tenNguoiTao}</a>
              <p>Level 2 Seller</p>
            </div>
          </div>
          {/* tenCongViec */}
          <h3 className='job-name'>
            <a className="jobName" onClick={()=>{
                navigate(`/detail/${item.id}`)
                }}>
              {item.congViec.tenCongViec}
            </a>
          </h3>
          <div className="rating">
            <i className="fa fa-star" aria-hidden="true"></i>
            {/* saoCongViec */}
            <span>{item.congViec.saoCongViec}</span>
            {/* danhGia */}
            <p>({item.congViec.danhGia})</p>
          </div>
        </div>
        <div className="bottom d-flex">
          <i className="fa fa-heart" aria-hidden="true"></i>
          <div className="price d-flex">
            <p>STARTING AT</p>
            {/* giaTien */}
            <span>${item.congViec.giaTien}</span>
          </div>
        </div>
      </div>
    </div>

      );
    });
  };

  return (
    <div className="container">
      {/* <MenuPages /> */}

      <div className="suggested">
        <div className="container d-flex">
          <b>Suggested</b>
          <div className="tag">
            <a href="#">Website Design</a>
            <a href="#">WordPress</a>
            <a href="#">Logo Design</a>
            <a href="#">Video Editing</a>
          </div>
        </div>
      </div>
      {/* <DetailCategories/> */}
      <div className="banner-page-category">
        <div className="banner-page">
          <div className="banner-content">
            <h3 className="title">Result for "html"</h3>
            <div className="row">
              <div className="col">
                <div className="item">
                  <button className="button">
                    Category
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </button>
                  <button className="button">
                    Seller Details
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </button>
                  <button className="button">
                    Budget
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </button>
                  <button className="button">
                    Delivery Time
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="item d-flex">
                  <div className="toggle-icon">
                    <img src="./img/toggle.png" alt="..." />
                    <span>Pro Services</span>
                  </div>
                  <div className="toggle-icon">
                    <img src="./img/toggle.png" alt="..." />
                    <span>Local sellers</span>
                  </div>
                  <div className="toggle-icon">
                    <img src="./img/toggle.png" alt="..." />
                    <span>Online sellers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-left">
                <span>24,563 services available</span>
              </div>
              <div className="col col-right">
                <span>
                  Sort by <b>Relevance</b>
                </span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Render Search Result */}

        <div className="result">
          <div className="job-card-result " >
          <div className="row">
          {renderCongViec()}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
