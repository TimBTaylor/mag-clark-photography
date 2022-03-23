import React, { useState } from "react";
import haleyAndWesley from "../../images/investment/haleyAndWesley.jpg";
import { CouplesModal } from "./CouplesModal";

export const Couples = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className="couplesContainer">
      <div className="imgContainer">
        <div className="btnContainer">
          <button className="investmentBtn" onClick={showModal}>
            see more
          </button>
        </div>

        <img
          src={haleyAndWesley}
          className="investmentImg"
          alt="couples investment"
        />
      </div>
      <p className="investmentType">couples</p>
      <p className="investmentAmount">$200</p>
      <CouplesModal show={modal} handleClose={hideModal} />
    </div>
  );
};
