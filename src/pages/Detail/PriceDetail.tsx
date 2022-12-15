import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { getStoreJson } from "../../util/settings";

type Props = {};

export default function PriceDetail({}: Props) {
  const [index, setIndex] = useState(0);
  // const titleDetail = getStoreJson("arrayJobDetail");
  const {arrayJobDetail} = useSelector((state: RootState)=> state.ProducReducers);

  console.log(arrayJobDetail)

  return (
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
              <p>Basic</p>
              {/* <p>{arrayJobDetail?.tenChiTietLoai}</p> */}
            </div>
            <div className="article">
              <div className="time-info">30 Days Dellvery</div>
              <ul>
                <div>
                  <li>
                    <i className="fa fa-check active" aria-hidden="true" />
                    <p>Design</p>
                  </li>
                  <li>
                    <i className="fa fa-check active" aria-hidden="true" />
                    <p>Design</p>
                  </li>
                  <li>
                    <i className="fa fa-check active" aria-hidden="true" />
                    <p>Design</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    <p>Design</p>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="tabContant" hidden={index != 1}>
          2
        </div>
        <div className="tabContant" hidden={index != 2}>
          
        </div>
      </div>
      <div className="tab-footer">
        <div className="btn-cont">Continue ($1000)</div>
        <a href="#">Compare Package</a>
      </div>
    </div>
  );
}
