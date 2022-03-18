import React from "react";
import maggiePortrait from "../../images/maggiePortrait.webp";
import "../../styles/MeetMe/MeetMe.css";

export const MeetMe = () => {
  return (
    <div className="meetMeContainer">
      <div className="meetMeTextContainer">
        <p className="meetMe">meet me</p>
        <p className="meetMeText">
          <span className="myName">Hello, I'm maggie!</span> I am 22 years old.
          I graduated from GRCC in 2020 with an associates degree unsure of my
          next steps. My lovely fiancé purchased me a camera and i started
          taking courses in 2021. I am so passionate about learning the art of
          photography and thankful you are here!
        </p>
      </div>
      <div className="meetImgContainer">
        <img src={maggiePortrait} className="maggiePortrait" alt="portrait" />
      </div>
    </div>
  );
};
