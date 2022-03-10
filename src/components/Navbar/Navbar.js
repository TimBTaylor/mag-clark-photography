import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../../styles/Navbar/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ page }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="navbarContainer">
      <div className={visible ? "logoAndToggle whiteout" : "logoAndToggle"}>
        <div className="text">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <h1 className={visible ? "magClark blackText" : "magClark"}>
              mag clark
            </h1>
            <h1 className={visible ? "photography blackText" : "photography"}>
              photography
            </h1>
          </Link>
        </div>
        <AiOutlineMenu
          className={visible ? "toggle animate" : "toggle"}
          onClick={() => setVisible(!visible)}
        />
      </div>

      {/* smaller than 768px */}
      <div className={visible ? "compactNavContainer" : "hidden"}>
        <button className={page === "home" ? "active" : ""}>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <span>home</span>
          </Link>
        </button>
        <button className={page === "meetme" ? "active" : ""}>
          <Link to="/meetme" style={{ textDecoration: "none", color: "#000" }}>
            <span>meet me</span>
          </Link>
        </button>
        <button className={page === "investment" ? "active" : ""}>
          <Link
            to="/investment"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <span>investment</span>
          </Link>
        </button>
        <button className={page === "portfolio" ? "active" : ""}>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <span>portfolio</span>
          </Link>
        </button>
        <button className={page === "contact" ? "active" : ""}>
          <Link to="/contacy" style={{ textDecoration: "none", color: "#000" }}>
            <span>contact</span>
          </Link>
        </button>
        <button className={page === "blog" ? "active" : ""}>
          <Link to="/blog" style={{ textDecoration: "none", color: "#000" }}>
            <span>blog</span>
          </Link>
        </button>
      </div>

      {/* larger than 768px  */}
      <div className="navContainer">
        <button className={page === "home" ? "active" : ""}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            home
          </Link>
        </button>
        <button className={page === "meetme" ? "active" : ""}>
          <Link to="/meetme" style={{ textDecoration: "none", color: "#fff" }}>
            meet me
          </Link>
        </button>
        <button className={page === "investment" ? "active" : ""}>
          <Link
            to="/investment"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            investment
          </Link>
        </button>
        <button className={page === "portfolio" ? "active" : ""}>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            portfolio
          </Link>
        </button>
        <button className={page === "contact" ? "active" : ""}>
          <Link to="/contacy" style={{ textDecoration: "none", color: "#fff" }}>
            contact
          </Link>
        </button>
        <button className={page === "blog" ? "active" : ""}>
          <Link to="/blog" style={{ textDecoration: "none", color: "#fff" }}>
            blog
          </Link>
        </button>
      </div>
    </div>
  );
};
