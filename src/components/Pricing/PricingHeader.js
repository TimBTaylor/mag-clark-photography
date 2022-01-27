import React from "react";
import "./Pricing.css";
import Camera from "../../images/camera.svg";
import { Link } from "react-router-dom";

export const PricingHeader = () => {
  return (
    <div className="pricingHeaderContainer">
      <div className="logoContainer">
        <img src={Camera} alt="camera" className="camera" />
        <div className="text">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <h1 className="magClark">mag clark</h1>
            <h1 className="photography">photography</h1>
          </Link>
        </div>
      </div>
      <h1 className="pricing">Pricing</h1>
    </div>
  );
};
