import React, { createRef, useRef } from "react";
import ShortLink from "../ShortLink/ShortLink";
import "./advanced.css";
import iconBrand from "../../images/icon-brand-recognition.svg";
import iconDetailed from "../../images/icon-detailed-records.svg";
import iconCustom from "../../images/icon-fully-customizable.svg";
import { useState } from "react";
import { useSelector } from "react-redux";

const Advanced = () => {
  const shortedLinks = useSelector((state) => state.links.links);
  const [clickedButton, setClickedButton] = useState();

  const elementsRef = useRef(shortedLinks.map(() => createRef()));

  const handleCopy = (link, key) => {
    navigator.clipboard.writeText(link.shortendLink);
    const currentButton = elementsRef.current[key];
    setClickedButton(currentButton);
  };

  return (
    <div className="advancedContainer">
      <ShortLink setClickedButton={setClickedButton} />
      {shortedLinks.map((link, key) => (
        <div className="shortedLinkContainer" key={key}>
          <p>{link.originalLink}</p>
          <div className="shorted_RightSide">
            <p>{link.shortendLink}</p>
            <button
              onClick={() => {
                handleCopy(link, key);
              }}
              ref={elementsRef.current[key]}
              style={clickedButton === elementsRef.current[key] ? { backgroundColor: "hsl(257, 27%, 26%)" } : undefined}
            >
              {clickedButton === elementsRef.current[key] ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      ))}
      <div className="advancedText">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="advancedWrapper">
        <div className="advancedBox">
          <div className="boxLogo">
            <img src={iconBrand} alt="" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil
            confidence in your content.
          </p>
        </div>
        <div className="advancedBox">
          <div className="boxLogo">
            <img src={iconDetailed} alt="" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps
            inform better decisions.
          </p>
        </div>
        <div className="advancedBox">
          <div className="boxLogo">
            <img src={iconCustom} alt="" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable links, supercharging audience
            engagement.
          </p>
        </div>
        <div className="advancedBar" />
      </div>
    </div>
  );
};

export default Advanced;
