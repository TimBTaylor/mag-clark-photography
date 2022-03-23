import React from "react";
import "../../styles/ScrollToTop/ScrollToTop.css";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const scrollToTop = () => {
    document.querySelector(".homeContainer").scrollTo(0, 0);
  };

  const anotherStyle = {
    position: "sticky",
    top: "0",
    right: "0",
  };

  return (
    <div className="scrollToTop" onClick={scrollToTop}>
      <button className="btn" style={anotherStyle}>
        <FaArrowUp className="arrowUp" />
      </button>
    </div>
  );
};
