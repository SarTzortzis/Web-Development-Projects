import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/dataverseLogo.png";
import "./footer.css";

const Footer = ({ activePage }) => {
  return (
    <>
      <footer className="footer-common">
        <section className="footer-container">
          <section className="footer-section footer-about">
            <h2>About us</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <ul className="footer-socials">
              <li>
                <p>
                  <i className="fab fa-facebook-f"></i>
                </p>
              </li>
              <li>
                <p>
                  <i className="fab fa-twitter"></i>
                </p>
              </li>
              <li>
                <p>
                  <i className="fab fa-instagram"></i>
                </p>
              </li>
              <li>
                <p>
                  <i className="fab fa-youtube"></i>
                </p>
              </li>
            </ul>
          </section>
          <section className="footer-section footer-links">
            <h2>Useful Links</h2>
            <ul>
              <li>
                <p>About</p>
              </li>
              <li>
                <p>FAQs</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Help</p>
              </li>
              <li>
                <p>Terms & Conditions</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
          </section>
          <section className="footer-section footer-contact">
            <h2>Contact Info</h2>
            <ul className="footer-contact-info">
              <li>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p> 76, Patission Street , 104 34 Athens</p>
              </li>
              <li>
                <span>
                  <i className="fas fa-phone-alt"></i>
                  <p> +30 123 456 789 </p>
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <p> tottally@notUsed.com</p>
              </li>
            </ul>
          </section>
        </section>
      </footer>
      <div className="footer-copyright">
        <p>
          Copyright © 2021 <span className="span-copyright"> Dataverse</span>.
          All rights Reserved
        </p>
      </div>
    </>
  );
};
export default Footer;
