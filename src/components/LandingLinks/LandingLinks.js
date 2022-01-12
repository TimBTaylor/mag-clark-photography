import React from "react";
import "./LandingLinks.css";
import FacebookLogo from "../../images/facebookLogo.svg";
import InstagramLogo from "../../images/instagramLogo.svg";

export const LandingLinks = () => {
  return (
    <div className="LandingLinksContainer">
      <div className="btnContainer">
        <div className="backgroundContainer"></div>
        <button className="btn">pricing</button>
        <button className="btn">portfolio</button>
        <button className="btn">about</button>
        <button className="btn">contact</button>
      </div>
    </div>
  );
};
