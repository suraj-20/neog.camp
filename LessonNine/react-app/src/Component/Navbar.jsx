import React from "react";
import logo from "../Assets/asset 1.png";
import '../Style/Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="container main-nav flex">
        <a className="company-logo">
          <img src={logo} alt="company logo" />
        </a>

        <div className="nav-links">
          <ul className="flex">
            <li>
              <a href="/" className="hover-link">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="hover-link">
                Customer
              </a>
            </li>
            <li>
              <a href="/" className="hover-link">
                Prising
              </a>
            </li>
            <li>
              <a href="/" className="hover-link">
                Resouces
              </a>
            </li>
            <li>
              <a href="/" className="hover-link secondary-btn">
                Sign in
              </a>
            </li>
            <li>
              <a href="/" className="hover-link primary-btn">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
