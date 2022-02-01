import React from "react";
import Camera from "../../images/camera.svg";
import { Link } from "react-router-dom";
import "../../styles/Header/HeaderStyles.css";

export const Header = (props) => {
  const title = props.title;
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={Camera} alt="camera" className="camera" />
        <div className="text">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <h1 className="magClark">mag clark</h1>
            <h1 className="photography">photography</h1>
          </Link>
        </div>
      </div>
      <h1 className="title">{title}</h1>
    </div>
  );
};
