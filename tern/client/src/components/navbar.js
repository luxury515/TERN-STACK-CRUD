import React from "react";

// 부트스트랩을 import 하여 어플리케이션의 디자인을 개선합니다.
import "bootstrap/dist/css/bootstrap.css";

// react router에서 NavLink를 import 합니다.
import { NavLink } from "react-router-dom";

// Navbar를 보여줍니다.
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img
            alt="Tigris logo"
            style={{ width: 25 + "%" }}
            src="/tigris-logo-green.png"
          ></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create Record
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
