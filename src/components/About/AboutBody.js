import React from "react";
import "../../styles/About/About.css";
import Portrait from "../../images/portrait.png";

export const AboutBody = () => {
  return (
    <div className="aboutBodyContainer">
      <div className="aboutTextContainer">
        <img src={Portrait} alt="portait" className="portrait" />
        <h1 className="welcome">Welcome!</h1>
        <p className="text">
          my name is maggie. I am 22 years old. I graduated from GRCC in 2020
          with an associates degree unsure of my next steps. My lovely fiancé
          purchased me a camera and i started taking courses in 2021. I am so
          passionate about learning the art of photographty and thankful you are
          here!
        </p>
      </div>
    </div>
  );
};
