import React, { useEffect, useState } from "react";
import { DislikeOutlined, LikeOutlined, StarFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getAllProductDetail,
  getThueCongViecApi,
  JobDetail,
} from "../../redux/reducers/ProducReducers";
import { getStoreJson } from "../../util/settings";
import {
  getListComment,
  ListComment,
} from "../../redux/reducers/CommentReducer";
import PriceDetail from "./PriceDetail";
import { Collapse, Image, Progress, Rate } from "antd";
type Props = {};
const { Panel } = Collapse;
export default function Detail({}: Props) {
  const params = useParams();
  const [index, setIndex] = useState(0);
  const { arrayListComment } = useSelector(
    (state: RootState) => state.CommentReducer
  );
  const { arrayJobDetail } = useSelector(
    (state: RootState) => state.ProducReducers
  );
  console.log("id detalil", arrayJobDetail);

  const { userLogin } = useSelector((state: RootState) => state.UserReducer);

  const titleDetail = getStoreJson("arrayJobDetail");

  // let id = titleDetail.id;
  let { id } = params;
  console.log("id thuê", id);
  console.log(titleDetail);
  const ListCommentReveiw = getStoreJson("arrayListComment");
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    let { id } = params;
    const action: any = getAllProductDetail(id);
    const actionCM: any = getListComment(id);
    dispatch(actionCM);
    dispatch(action);
  }, [params.id]);
  // const onChange = (key: string | string[]) => {
  //   console.log(key);
  // };
  const handleCheckOut = () => {
    const data = {
      id: 0,
      maCongViec: id,
      maNguoiThue: userLogin.id,
      ngayThue: "string",
      hoanThanh: false,
    };
    // const action =
    dispatch(getThueCongViecApi(data));
  };
  const renderCommentReview = () => {
    return ListCommentReveiw?.map((item: ListComment, index: number) => {
      return (
        <div className="review-item" key={index}>
          <div className="user-review d-flex">
            <img src={item.avatar} alt="" />
            <div className="user-info">
              <p>
                <strong>{item.tenNguoiBinhLuan}</strong>
              </p>
              <p>
                <img
                  src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                  width={0}
                  alt=""
                />
                <p>United States</p>
              </p>
            </div>
          </div>
          <div className="review-detail">
            <p>{item.noiDung}</p>
            <p className="time-review">{item.ngayBinhLuan}</p>
            <p className="flex">
              <div>
                <LikeOutlined className="mx-3" />
                <DislikeOutlined />
              </div>
            </p>
          </div>
        </div>
      );
    });
  };

  const renderProductDetail = () => {
    return titleDetail?.map((item: JobDetail) => {
      return (
        <div>
          <div className="row">
            <div className="main col-8">
              <div className="over-view">
                <nav>
                  <li>
                    {item.tenLoaiCongViec}{" "}
                    <i className="fas fa-chevron-right"></i>
                  </li>
                  <li>
                    {item.tenNhomChiTietLoai}{" "}
                    <i className="fas fa-chevron-right"></i>
                  </li>
                  <li>{item.congViec.tenCongViec}</li>
                </nav>

                <h3 className="title">{item.congViec.tenCongViec}</h3>
                <div className="seller-overview d-flex">
                  <div className="avatar-author d-flex">
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className="name-author item">{item.tenNguoiTao}</div>
                  <div className="rated item">Level 2 seller</div>
                  <div className="star item">
                  <Rate allowHalf defaultValue={item.congViec.saoCongViec} />

                  </div>
                  <div className="ratings-count item">
                    ( {item.congViec.danhGia} )
                  </div>
                </div>
              </div>
              <hr />
              <div className="slider">
                <div className="slideshow">
                  <Image width={600} src={item.congViec.hinhAnh} alt="" />
                </div>
                <div className="slide-thumbnails"></div>
              </div>
              <hr />
            </div>
            <div className="sidebar col-4">
              {/* <PriceDetail/> */}
              <div className="tabs">
                <div className="tabsList">
                  <div
                    className={`tabHead ${index === 0 ? "active" : null}`}
                    onClick={() => {
                      setIndex(0);
                    }}
                  >
                    Basic
                  </div>
                  <div
                    className={`tabHead ${index === 1 ? "active" : null}`}
                    onClick={() => {
                      setIndex(1);
                    }}
                  >
                    Standard
                  </div>
                  <div
                    className={`tabHead ${index === 2 ? "active" : null}`}
                    onClick={() => {
                      setIndex(2);
                    }}
                  >
                    Premlum
                  </div>
                </div>
                <div className="tab-header">
                  <div className="tabContant" hidden={index != 0}>
                    <div className="package-content">
                      <div className="header-default d-flex">
                        <p>Standard</p>
                        <p>US${item.congViec.giaTien}</p>
                      </div>
                      <div className="article">
                        <div className="time-info my-2">30 Days Dellvery</div>
                        <p className="ml-2 describe-title">
                          {item.congViec.moTaNgan}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tabContant" hidden={index != 1}>
                    <div className="package-content">
                      <div className="header-default d-flex">
                        <p>Standard</p>
                        <p>US${item.congViec.giaTien}</p>
                      </div>
                      <div className="article">
                        <div className="time-info my-2">30 Days Dellvery</div>
                        <p className="ml-2 describe-title">
                          {item.congViec.moTaNgan}
                        </p>
                        <ul>
                          <div>
                            <li>
                              <i
                                className="fa fa-check active"
                                aria-hidden="true"
                              />
                              <p>3D modeling</p>
                            </li>
                            <li>
                              <i
                                className="fa fa-check active"
                                aria-hidden="true"
                              />
                              <p>Include environment</p>
                            </li>
                            <li>
                              <i
                                className="fa fa-check active"
                                aria-hidden="true"
                              />
                              <p>Include furniture and people</p>
                            </li>
                            <li>
                              <i className="fa fa-check" aria-hidden="true" />
                              <p>Texturing & lighting</p>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tabContant" hidden={index != 2}>
                    <div className="package-content">
                      <div className="header-default d-flex">
                        <p>Standard</p>
                        <p>US${item.congViec.giaTien}</p>
                      </div>
                      <div className="article">
                        <div className="time-info my-2">30 Days Dellvery</div>
                        <p className="ml-2 describe-title">
                          {item.congViec.moTaNgan}
                        </p>
                        <ul>
                          <div>
                            <li>
                              <i
                                className="fa fa-check active"
                                aria-hidden="true"
                              />
                              <p>3D modeling</p>
                            </li>
                            <li>
                              <i
                                className="fa fa-check active"
                                aria-hidden="true"
                              />
                              <p>Include environment</p>
                            </li>
                            <li>
                              <i
                                className="fa fa-check active"
                                aria-hidden="true"
                              />
                              <p>Include furniture and people</p>
                            </li>
                            <li>
                              <i className="fa fa-check" aria-hidden="true" />
                              <p>Texturing & lighting</p>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-footer">
                  <div className="btn-cont" onClick={handleCheckOut}>
                    Continue (${item.congViec.giaTien})
                  </div>
                  <a href="#">Compare Package</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-review">
              <div className="over-review">
                <div className="header">
                  <h3 className="title">About gigs</h3>
                  <p>{item.congViec.moTa}</p>
                </div>
              </div>
              <h5>About The Seller</h5>
              <div className="section-title my-3">
                <div className="profile-card">
                  <div className="profile-info">
                    <div className="user-profile-img">
                      <img
                        src={item.avatar}
                        alt=""
                      />
                    </div>
                    <div className="user-profile-label">
                      <p>{item.tenNguoiTao}</p>
                      <p>Senior Flutter Developer</p>
                      <ul>
                      <Rate allowHalf defaultValue={3} />
                      </ul>
                      <button className="btn-cl-me">Contact Me</button>
                    </div>
                  </div>
                  <div className="stats-desc"></div>
                </div>
              </div>
              <div className="section-callapse">
                <h3>FAQ</h3>
                <Collapse accordion>
                  <Panel header="Do you design Logo?" key="1">
                    <p>
                      Yes, we design logo. there is a special package for logo
                    </p>
                  </Panel>
                  <Panel
                    header="After you completed my design works.if i want any help or i want any modification in future .can you help me?"
                    key="2"
                  >
                    <p>
                      100% sure.i will definitely help you. also for
                      modification, i will charge only a little amount.
                    </p>
                  </Panel>
                  <Panel
                    header="Can you design business card according to my given size?"
                    key="3"
                  >
                    <p>
                      Sure.i can design the business card according to your
                      given size
                    </p>
                  </Panel>
                  <Panel
                    header="If I want to change business information's for more people in the future can I do it if I am not able to use source files?"
                    key="4"
                  >
                    <p>
                      If you want to change names or any other informations in
                      the future that can be done for the price of basic gig
                      ($5).
                    </p>
                  </Panel>
                  <Panel
                    header="Can you insert informations on other languages or only on English?"
                    key="5"
                  >
                    <p>
                      Informations can be on any language, that's not a problem.
                    </p>
                  </Panel>
                </Collapse>
              </div>
              <div className="review-package">
                <header className="review-header">
                  <div className="detail">
                    <h4>961 Reviews</h4>
                  </div>
                  <div className="filter-section">
                    <div className="breakdown-wraper">
                      <div className="col-12-xs col-6 col-6-sm breakdown-wraper-inner">
                        <table className="stars-counters">
                          <tbody className="tbody">
                            <tr>
                              <td className="stars-filter">5 start</td>
                              <td className="progress-bar">
                                <Progress
                                  percent={92}
                                  strokeColor={{
                                    "0%": "#ffb33e",
                                    "100%": "#ffb33e",
                                  }}
                                />
                              </td>
                              <td className="start-num">(918)</td>
                            </tr>
                            <tr>
                              <td className="stars-filter">4 start</td>
                              <td className="progress-bar">
                                <Progress
                                  percent={30}
                                  strokeColor={{
                                    "0%": "#ffb33e",
                                    "100%": "#ffb33e",
                                  }}
                                />
                              </td>
                              <td className="start-num">(31)</td>
                            </tr>
                            <tr>
                              <td className="stars-filter">3 start</td>
                              <td className="progress-bar">
                                <Progress
                                  percent={16}
                                  strokeColor={{
                                    "0%": "#ffb33e",
                                    "100%": "#ffb33e",
                                  }}
                                />
                              </td>
                              <td className="start-num">(16)</td>
                            </tr>
                            <tr>
                              <td className="stars-filter">2 start</td>
                              <td className="progress-bar">
                                <Progress
                                  percent={4}
                                  strokeColor={{
                                    "0%": "#ffb33e",
                                    "100%": "#ffb33e",
                                  }}
                                />
                              </td>
                              <td className="start-num">(4)</td>
                            </tr>
                            <tr>
                              <td className="stars-filter">1 start</td>
                              <td className="progress-bar">
                                <Progress
                                  percent={2}
                                  strokeColor={{
                                    "0%": "#ffb33e",
                                    "100%": "#ffb33e",
                                  }}
                                />
                              </td>
                              <td className="start-num">(2)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-12-xs col-6 col-6-sm breakdown-wraper-inner">
                        <div className="ranking">
                          <h6>Rating Breakdown</h6>
                          <tr>
                            <td>Seller communication level</td>
                            <td>
                              5<i className="fa fa-star"></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Seller communication level</td>
                            <td>
                              4.9<i className="fa fa-star"></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Seller communication level</td>
                            <td>
                              4.9<i className="fa fa-star"></i>
                            </td>
                          </tr>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="gig-page-author">
        {/* render title */}
        {renderProductDetail()}

        {/* Comment */}
        <div className="row">
          <div className="col-8 col-comment">
            <div className="section-comment">
              <div className="reviews-wrap">
                <div className="review-list">
                  {renderCommentReview()}

                  <div className="user-comment-review ">
                    <div className="user-comment d-flex">
                      <div className="user-info">
                        <img
                          src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/b4a123cf1457d8402a6e16da5eb1f78a-1657868645692/8bcaba6c-3c85-45a3-8f52-341b08e851b5.JPG"
                          alt=""
                        />
                      </div>
                      <textarea name="" id=""></textarea>
                    </div>
                    <button className="btn-comment">Add Comment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
