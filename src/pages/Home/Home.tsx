import React, { useState } from "react";
import {
  StarOutlined,
  StarFilled,
  StarTwoTone,
  StepForwardOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import WorkingIndustries from "../WorkingIndustries/WorkingIndustries";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { searchUserApi } from "../../redux/reducers/AdminUserReducer";
import { setStore } from "../../util/settings";
import { searchJob } from "../../redux/reducers/ProducReducers";

// type Props = {
//   title?: string;
// };

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // input
  const [key, setKey] = useState("");

  const handleChange = (e: any) => {
    setKey(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (key) {
      const action:any = searchJob(key);
      dispatch(action);
       navigate(`/joblist/${key}`);
    }
    if (!key) {
      return;
    }
  };


  return (
    <div className="header-home">
      {/* CAROUSEL */}
      <section className="slider">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div
              id="product-carousel"
              className="carousel-inner"
              style={{
                backgroundImage: "url(./img/carousel/hero-gabrielle.webp)",
                position: "absolute",
                top: "0",
                left: "0",
                height: "680px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* SEARCH */}
              <div className="search">
                <div className="row d-flex">
                  <div className="col-left">
                    <div className="item">
                      <div className="title">
                        <p className="d-flex m-0">
                          <h1>Find the perfect</h1>
                          <i>freelance</i>
                        </p>
                        <h1>services for your business</h1>
                      </div>
                      <div className="search-form">
                        <form className="form"
                         onSubmit={(e) => {
                          handleSubmit(e);
                        }}
                        >
                          <span className="icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </span>
                          <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder='Try "building mobile app"'
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            />
                            <button>Search</button>
                        </form>
                      </div>
                      <div className="popular d-flex mt-4">
                        <span>Popular:</span>
                        <a href="#">Website Design</a>
                        <a href="#">WordPress</a>
                        <NavLink to="/joblist">Logo Design</NavLink>
                        <a href="#">Video Editing</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-right" >
                    <div className="item d-flex">
                      <div className="item-left"></div>
                      <div className="item-right">
                        <div className="rate">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p>
                          Gabrielle, <b>Video Editor</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners">
        <div className="container">
          <ul className="d-flex">
            <li>Trusted by:</li>
            <li>
              <img src="./img/facebook.png" alt="..." />
            </li>
            <li>
              <img src="./img/google.png" alt="..." />
            </li>
            <li>
              <img src="./img/netflix.png" alt="..." />
            </li>
            <li>
              <img src="./img/P&G.png" alt="..." />
            </li>
            <li>
              <img src="./img/paypal.png" alt="..." />
            </li>
          </ul>
        </div>
      </section>
      <div className="clear"></div>

      {/* WORKING INDUSTRIES */}
      <div className="working-home" style={{height: 'auto'}}>
      <WorkingIndustries />
      </div>
    </div>
  );
}
