import React from "react";
import logo from "../../public/assets/pixer-logo.svg";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar container">
      <img src={logo} alt="" />
      <div className="navbar__end">
        <ul className="Navbar__list">
          <li className="Navbar__item">
            <a className="Navbar__link" href="#">
              Bosh sahifa
            </a>
          </li>
          <li className="Navbar__item">
            <a className="Navbar__link" href="/xizmatlar">
              Xizmatlar
            </a>
          </li>
          <li className="Navbar__item">
            <a className="Navbar__link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="Navbar__item">
            <a className="Navbar__link" href="/jamoa">
              Jamoa
            </a>
          </li>
          <li className="Navbar__item">
            <a className="Navbar__link" href="/Blog">
              Blog
            </a>
          </li>
          <li className="Navbar__item">
            <a className="Navbar__link" href="/kontaktlar">
              Kontaktlar
            </a>
          </li>
        </ul>
        <button className="Navbar__btn"> +998 90 921 37 11</button>
      </div>
    </div>
  );
}

export default Navbar;
