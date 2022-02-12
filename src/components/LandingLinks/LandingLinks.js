import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Landing/LandingLinks.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const LandingLinks = () => {
  return (
    <div className="LandingLinksContainer">
      <div className="btnContainer">
        <div className="backgroundContainer"></div>
        <div className="buttons">
          <Link to="/pricing">
            <button className="btn">pricing</button>
          </Link>
          <Link to="/portfolio">
            <button className="btn">portfolio</button>
          </Link>
          <Link to="/about">
            <button className="btn">about</button>
          </Link>
          <Link to="/contact">
            <button className="btn">contact</button>
          </Link>
        </div>
        <div className="logoContainer">
          <a
            href="https://www.facebook.com/maggie.clark.75685"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="facebookLogo" />
          </a>
          <a
            href="https://www.instagram.com/magclarkphoto/?hl=en"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="instagramLogo" />
          </a>
        </div>
      </div>
    </div>
  );
};
