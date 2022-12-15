import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  title?: string;
};

export default function HeaderHome(title: Props) {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-dark nav-home">
          <a className="navbar-brand d-flex" href="/home">
            <h4 className="logo">fiverr</h4>
            <span>
              <i className="fa fa-circle" aria-hidden="true"></i>
            </span>
          </a>
          
          {/* Search Button */}

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="" aria-current="page">
                  Become a Seller{" "}
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Sign in
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/login">
                  <button
                    className="btn btn-outline-light my-2 my-sm-0"
                    type="submit"
                  >
                    Join
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
