import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../../styles/Navbar/Navbar.css";
import { Link } from "react-router-dom";
// import Camera from "../../images/camera.svg";

export const Navbar = ({ page }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="logoAndToggle">
        <div className="text">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <h1 className="magClark">mag clark</h1>
            <h1 className="photography">photography</h1>
          </Link>
        </div>
        <AiOutlineMenu
          className={visible ? "toggle animate" : "toggle"}
          onClick={() => setVisible(!visible)}
        />
      </div>
      <div
        className={
          visible ? "compactNavContainer" : "compactNavContainer hidden"
        }
      >
        <button className={page === "home" ? "active" : ""}>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            home
          </Link>
        </button>
        <button className={page === "meetme" ? "active" : ""}>
          <Link to="/meetme" style={{ textDecoration: "none", color: "#000" }}>
            meet me
          </Link>
        </button>
        <button className={page === "investment" ? "active" : ""}>
          <Link
            to="/investment"
            style={{ textDecoration: "none", color: "#000" }}
          >
            investment
          </Link>
        </button>
        <button className={page === "portfolio" ? "active" : ""}>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
          >
            portfolio
          </Link>
        </button>
        <button className={page === "contact" ? "active" : ""}>
          <Link to="/contacy" style={{ textDecoration: "none", color: "#000" }}>
            contact
          </Link>
        </button>
        <button className={page === "blog" ? "active" : ""}>
          <Link to="/blog" style={{ textDecoration: "none", color: "#000" }}>
            blog
          </Link>
        </button>
      </div>
      <div className="navContainer">
        <button className={page === "home" ? "active" : ""}>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            home
          </Link>
        </button>
        <button className={page === "meetme" ? "active" : ""}>
          <Link to="/meetme" style={{ textDecoration: "none", color: "#000" }}>
            meet me
          </Link>
        </button>
        <button className={page === "investment" ? "active" : ""}>
          <Link
            to="/investment"
            style={{ textDecoration: "none", color: "#000" }}
          >
            investment
          </Link>
        </button>
        <button className={page === "portfolio" ? "active" : ""}>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
          >
            portfolio
          </Link>
        </button>
        <button className={page === "contact" ? "active" : ""}>
          <Link to="/contacy" style={{ textDecoration: "none", color: "#000" }}>
            contact
          </Link>
        </button>
        <button className={page === "blog" ? "active" : ""}>
          <Link to="/blog" style={{ textDecoration: "none", color: "#000" }}>
            blog
          </Link>
        </button>
      </div>
    </div>
  );
};
