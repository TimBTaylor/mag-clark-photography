import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header/HeaderStyles.css";
import { Navbar } from "../Navbar/Navbar";

export const Header = (props) => {
  const title = props.title;
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <div className="text">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <h1 className="magClark">mag clark</h1>
            <h1 className="photography">photography</h1>
          </Link>
        </div>
      </div>

      <Navbar page={title} />
    </div>
  );
};
