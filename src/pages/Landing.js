import React from "react";
import "../styles/Landing/Landing.css";
import { LandingLogo } from "../components/LandingLogo/LandingLogo";
import { LandingLinks } from "../components/LandingLinks/LandingLinks";

export const Landing = () => {
  window.scrollTo(0, 0);

  return (
    <div className="landingContainer">
      <LandingLogo />
      <LandingLinks />
    </div>
  );
};
