import React from "react";
import { AboutBody } from "../components/About/AboutBody";
import { Header } from "../components/Header/Header";

export const About = () => {
  return (
    <div className="aboutPageContainer">
      <Header title="about" />
      <AboutBody />
    </div>
  );
};
