import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {menuOpened === false && mobile === true ? (
        <div
        style={{backgroundColor:'var(--appColor)',padding:"0.5rem",borderRadius:"5px",}}
           >
          <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}onClick={()=> setMenuOpened(true)}/>
        </div>
      ) : (
        <ul className="header_menu">
          <li>Home</li>
          <li>Programs</li>
          <li>Why Us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
