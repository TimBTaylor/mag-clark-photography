import React, { useState, useEffect } from "react";
import "../../styles/Investment/InvestmentStyles.css";
import taylorPortait from "../../images/investment/portraits/taylorPortrait.jpg";
import ryanPortait from "../../images/investment/portraits/ryanPortrait.jpg";
import nalaPortrait from "../../images/investment/portraits/nalaPortrait.jpg";
import erinPortrait from "../../images/investment/portraits/erinPortrait.jpg";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export const PortraitModal = (props) => {
  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (
        this.document
          .querySelector(".portrait-left-arrow")
          .contains(e.target) ||
        this.document.querySelector(".portrait-right-arrow").contains(e.target)
      ) {
      } else if (
        this.document.querySelector(".portraitConstant").contains(e.target)
      ) {
        props.handleClose();
      }
    });
  });
  const modalShowing = props.show
    ? "portraitConstant portraitModalContainer"
    : "portraitConstant hide";
  const [current, setCurrent] = useState(0);

  const sliderData = [taylorPortait, ryanPortait, nalaPortrait, erinPortrait];
  const length = sliderData.length;

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={modalShowing}>
      <div className="modalContent">
        <IoIosArrowDropleft
          className="portrait-left-arrow"
          onClick={prevSlide}
        />
        <IoIosArrowDropright
          className="portrait-right-arrow"
          onClick={nextSlide}
        />
        <section className="slider">
          {sliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide} alt="portfolio img" className="img" />
                )}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
