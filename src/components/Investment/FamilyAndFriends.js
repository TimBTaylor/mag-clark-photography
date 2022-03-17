import React from "react";
import samAndSutton from "../../images/investment/samAndSutton.jpg";

export const FamilyAndFriends = () => {
  return (
    <div className="familyAndFriendsContainer">
      <div className="imgContainer">
        <div className="btnContainer">
          <button className="investmentBtn">see more</button>
        </div>
        <img
          src={samAndSutton}
          className="investmentImg"
          alt="family and friends investment"
        />
      </div>
      <p className="investmentType">family and friends</p>
      <p className="investmentAmount">$200</p>
    </div>
  );
};
