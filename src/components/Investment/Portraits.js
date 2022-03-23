import React, { useState } from "react";
import erin from "../../images/investment/erin.jpg";
import { PortraitModal } from "./PortraitModal";

export const Portraits = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };
  return (
    <div className="portraitsContainer">
      <div className="imgContainer">
        <div className="btnContainer">
          <button className="investmentBtn" onClick={showModal}>
            see more
          </button>
        </div>
        <img src={erin} className="investmentImg" alt="portraits investment" />
      </div>
      <p className="investmentType">portraits</p>
      <p className="investmentAmount">$150</p>
      <PortraitModal show={modal} handleClose={hideModal} />
    </div>
  );
};
