import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as IconFacebook } from "../../images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../../images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../../images/icon-instagram.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="logoContainer">
        <Logo className="logoSvg" />
      </div>
      <div className="listsWrapper">
        <ul className="listFeatures">
          <h4>Features</h4>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul className="listResources">
          <h4>Resources</h4>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul className="listCompany">
          <h4>Company</h4>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="mediaIcons">
        <IconFacebook className="icon facebook" />
        <IconTwitter className="icon twitter" />
        <IconPinterest className="icon pinterest" />
        <IconInstagram className="icon instagram" />
      </div>
    </div>
  );
};

export default Footer;
