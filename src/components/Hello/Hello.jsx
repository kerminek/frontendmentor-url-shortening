import React from "react";
import "./hello.css";
import deskImage from "../../images/illustration-working.svg";
import ShortLink from "../ShortLink/ShortLink";

const Hello = () => {
  return (
    <div className="helloContainer">
      <div className="helloLeft">
        <div className="helloText">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        </div>
        <div className="helloButton">Get Started</div>
      </div>
      <div className="helloRight">
        <img src={deskImage} alt="" />
      </div>
    </div>
  );
};

export default Hello;
