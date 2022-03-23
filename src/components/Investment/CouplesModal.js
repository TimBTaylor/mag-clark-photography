import React, { useState, useRef, useEffect } from "react";
import "../../styles/Investment/InvestmentStyles.css";
import amandaAndNate from "../../images/investment/couples/amandaAndNate.jpg";
import erinAndDean from "../../images/investment/couples/erinAndDean.jpg";
import taylorAndJared from "../../images/investment/couples/taylorAndJared.jpg";
import jordanAndNick from "../../images/investment/couples/jordanAndNick.jpg";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export const CouplesModal = (props) => {
  const leftArrow = useRef();
  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (
        this.document.querySelector(".left-arrow").contains(e.target) ||
        this.document.querySelector(".right-arrow").contains(e.target)
      ) {
      } else if (this.document.querySelector(".constant").contains(e.target)) {
        props.handleClose();
      }
    });
  });
  const modalShowing = props.show
    ? "constant couplesModalContainer"
    : "constant hide";
  const [current, setCurrent] = useState(0);

  const sliderData = [
    amandaAndNate,
    erinAndDean,
    taylorAndJared,
    jordanAndNick,
  ];
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
          className="left-arrow"
          onClick={prevSlide}
          innerref={leftArrow}
        />
        <IoIosArrowDropright className="right-arrow" onClick={nextSlide} />
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
