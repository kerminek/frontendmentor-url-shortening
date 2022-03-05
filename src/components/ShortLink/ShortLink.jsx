import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleApi } from "../../redux/apiCalls";
import "./shortLink.css";

const ShortLink = ({ setClickedButton }) => {
  const [link, setLink] = useState("");
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const sendRequest = async () => {
    const res = await handleApi(dispatch, link);
    setIsError(res);
    setLink("");
    setClickedButton(null);
  };

  return (
    <div className="shortLinkContainer">
      <div className="inputContainer">
        <input
          id={isError ? "inputError" : undefined}
          type="text"
          placeholder="Shorten a link here..."
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />
        <p className="errorMessage" style={isError ? { display: "unset" } : undefined}>
          Please add a link
        </p>
      </div>
      <button
        onClick={() => {
          sendRequest();
        }}
      >
        Shorten It!
      </button>
    </div>
  );
};

export default ShortLink;
