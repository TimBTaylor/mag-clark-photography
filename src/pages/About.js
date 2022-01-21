import React from "react";
import { AboutHeader } from "../components/About/AboutHeader";
import { AboutBody } from "../components/About/AboutBody";

export const About = () => {
  return (
    <div className="aboutPageContainer">
      <AboutHeader />
      <AboutBody />
    </div>
  );
};
