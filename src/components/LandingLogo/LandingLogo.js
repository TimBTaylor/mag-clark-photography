import React from "react";
import "../../styles/Landing/LandingLogo.css";
import Camera from "../../images/camera.svg";

export const LandingLogo = () => {
  return (
    <div className="landingLogoContainer">
      <img src={Camera} alt="camera" className="camera" />
      <div className="text">
        <h1 className="magClark">mag clark</h1>
        <h1 className="photography">photography</h1>
      </div>
    </div>
  );
};
