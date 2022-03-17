import React from "react";
import maggiePortrait from "../../images/maggiePortrait.webp";
import "../../styles/MeetMe/MeetMe.css";

export const MeetMe = () => {
  return (
    <div className="meetMeContainer">
      <div className="portraitContainer">
        <p className="meetMe">meet me</p>
        <img
          src={maggiePortrait}
          className="maggiePortrait"
          alt="maggie portrait"
        />
      </div>
      <div className="meetMeTextContainer">
        <p className="meetMeText">
          <span className="myName">Hello I'm maggie!</span> I am 22 years old. I
          graduated from GRCC in 2020 with an associates degree unsure of my
          next steps. My lovely fiancé purchased me a camera and i started
          taking courses in 2021.
        </p>
        <p className="passionate">
          I am so passionate about learning the art of photography and thankful
          you are here!
        </p>
      </div>
    </div>
  );
};
