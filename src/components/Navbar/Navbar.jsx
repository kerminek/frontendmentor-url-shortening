import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <div className="navbarContainer">
      <img src={logo} alt="" />
      <div className="hamburgerMenu" onClick={() => setIsMenuClicked((prev) => !prev)}>
        <div className="hamburgerSlice" />
        <div className="hamburgerSlice" />
        <div className="hamburgerSlice" />
      </div>
      <div className="menu" style={isMenuClicked ? { display: "flex" } : undefined}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className="buttonsWrapper">
          <div className="loginButton">Login</div>
          <div className="signUpButton">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
