import React, { useState } from "react";
import samAndSutton from "../../images/investment/samAndSutton.jpg";
import { FamilyAndFriendsModal } from "./FamilyAndFriendsModal";

export const FamilyAndFriends = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };
  return (
    <div className="familyAndFriendsContainer">
      <div className="imgContainer">
        <div className="btnContainer">
          <button className="investmentBtn" onClick={showModal}>
            see more
          </button>
        </div>
        <img
          src={samAndSutton}
          className="investmentImg"
          alt="family and friends investment"
        />
      </div>
      <p className="investmentType">family and friends</p>
      <p className="investmentAmount">$200</p>
      <FamilyAndFriendsModal show={modal} handleClose={hideModal} />
    </div>
  );
};
