import React from "react";
import haleyAndWesley from "../../images/investment/haleyAndWesley.jpg";

export const Couples = () => {
  return (
    <div className="couplesContainer">
      <div className="imgContainer">
        <div className="btnContainer">
          <button className="investmentBtn">see more</button>
        </div>

        <img
          src={haleyAndWesley}
          className="investmentImg"
          alt="couples investment"
        />
      </div>
      <p className="investmentType">couples</p>
      <p className="investmentAmount">$200</p>
    </div>
  );
};
