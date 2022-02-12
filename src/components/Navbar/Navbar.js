import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../../styles/Navbar/Navbar.css";
import { Link } from "react-router-dom";
import Camera from "../../images/camera.svg";

export const Navbar = ({ page }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="navbarContainer">
      <AiOutlineMenu
        className={visible ? "toggle animate" : "toggle"}
        onClick={() => setVisible(!visible)}
      />
      <div className={visible ? "navContainer" : "navContainer hidden"}>
        <div className="headerContainer">
          <div className="logoContainer">
            <img src={Camera} alt="camera" className="camera" />
            <div className="text">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1 className="magClark">mag clark</h1>
                <h1 className="photography">photography</h1>
              </Link>
            </div>
          </div>
        </div>
        <button className="btn">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            Home
          </Link>
        </button>
        {page === "pricing" ? (
          ""
        ) : (
          <button className="btn">
            <Link
              to="/pricing"
              style={{ textDecoration: "none", color: "#000" }}
            >
              pricing
            </Link>
          </button>
        )}
        {page === "portfolio" ? (
          ""
        ) : (
          <button className="btn">
            <Link
              to="/portfolio"
              style={{ textDecoration: "none", color: "#000" }}
            >
              portfolio
            </Link>
          </button>
        )}
        {page === "about" ? (
          ""
        ) : (
          <button className="btn">
            <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
              about
            </Link>
          </button>
        )}
        {page === "contact" ? (
          ""
        ) : (
          <button className="btn">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#000" }}
            >
              contact
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};
