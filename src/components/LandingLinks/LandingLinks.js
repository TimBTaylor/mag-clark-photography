import React from "react";
import FacebookLogo from "../../images/facebookLogo.svg";
import InstagramLogo from "../../images/instagramLogo.svg";
import { Link } from "react-router-dom";
import "../../styles/Landing/LandingLinks.css";

export const LandingLinks = () => {
  return (
    <div className="LandingLinksContainer">
      <div className="btnContainer">
        <div className="backgroundContainer"></div>
        <div className="buttons">
          <Link to="/pricing">
            <button className="btn">pricing</button>
          </Link>
          <button className="btn">portfolio</button>
          <Link to="/about">
            <button className="btn">about</button>
          </Link>
          <Link to="/contact">
            <button className="btn">contact</button>
          </Link>
        </div>
        <div className="facebookLogoContainer">
          <a
            href="https://www.facebook.com/maggie.clark.75685"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={FacebookLogo}
              className="facebookLogo"
              alt="facebook logo"
            />
          </a>
        </div>
        <div className="instagramLogoContainer">
          <a
            href="https://www.instagram.com/magclarkphoto/?hl=en"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={InstagramLogo}
              className="instagramLogo"
              alt="instagram logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
