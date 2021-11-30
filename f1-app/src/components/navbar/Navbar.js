import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/f1-logo.png";
import "../../index.css";

const Navbar = ({ activePage }) => {
  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className="nav-header">
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="nav-logo">
          <NavLink to="/">
            <img src={Logo} className="nav-img" alt="Logo"></img>
          </NavLink>
        </div>

        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink to="/" className="nav-link" title="Home">
              <p>Home</p>
            </NavLink>
          </li>

          <li className="nav-li">
            <NavLink to="/circuits" className="nav-link" title="About">
              <p>Circuits</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
