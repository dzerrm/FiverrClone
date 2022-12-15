import React, { useEffect } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProduct } from "../../redux/reducers/ProducReducers";
import { Job } from "../../redux/models/jobModel";
import JobCard from "../../components/JobCard/JobCard";
import JobCardSearch from "../../components/JobCard/JobCardSearch";
// import MenuPages from "../MenuPages/MenuPages";
type Props = {};

export default function JobsList({}: Props) {
  const { arrayJob } = useSelector((state: RootState) => state.ProducReducers);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const params :any = useParams();
  let {name} = params;
  useEffect(() => {
    const actionApi = getAllProduct();
    dispatch(actionApi);
  }, []);

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
            <h3 className="title">Result for "{name}"</h3>
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
          {/* <div className="row">{renderCongViec()}</div> */}
          <JobCardSearch/>
        </div>
      </div>
    </div>
  );
}
