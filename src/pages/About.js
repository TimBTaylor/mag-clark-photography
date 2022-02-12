import React from "react";
import { AboutBody } from "../components/About/AboutBody";
import { Header } from "../components/Header/Header";

export const About = () => {
  window.scrollTo(0, 0);

  return (
    <div className="aboutPageContainer">
      <Header title="about" />
      <AboutBody />
    </div>
  );
};
