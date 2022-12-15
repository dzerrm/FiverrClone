import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllProduct } from "../../redux/reducers/ProducReducers";
import { Job, JobDetail } from "../../redux/models/jobModel";
type Props = {}

export default function JobCardSearch({}: Props) {
    const { arraySearchJob } = useSelector((state: RootState) => state.ProducReducers);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      const actionApi = getAllProduct();
      dispatch(actionApi);
    }, []);
    //render
    const renderCongViecSearch = () => {
        return arraySearchJob.map((item: JobDetail, index: number) => {
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
    <div className="job-card-result " >
      <div className="row">
      {renderCongViecSearch()}
      </div>
      </div>
  )
}