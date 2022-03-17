import React from "react";
import erin from "../../images/investment/erin.jpg";

export const Portraits = () => {
  return (
    <div className="portraitsContainer">
      <div className="imgContainer">
        <div className="btnContainer">
          <button className="investmentBtn">see more</button>
        </div>
        <img src={erin} className="investmentImg" alt="portraits investment" />
      </div>
      <p className="investmentType">portraits</p>
      <p className="investmentAmount">$150</p>
    </div>
  );
};
