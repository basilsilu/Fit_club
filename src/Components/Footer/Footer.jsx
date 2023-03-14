import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <hr />
      <div className="footer">
        <div className="social_links">
        <img src={github} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <div className="logo_footer">
        <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur_f_1"></div>
      <div className="blur blur_f_2"></div>
    </div>
  );
};

export default Footer;
