import React, { useState, useEffect } from "react";
import "../../styles/Investment/InvestmentStyles.css";
import macyFriends from "../../images/investment/familyAndFriends/macyFriends.jpg";
import samFamily from "../../images/investment/familyAndFriends/samFamily.jpg";
import ryanFamily from "../../images/investment/familyAndFriends/ryanFamily.jpg";
import erinFamily from "../../images/investment/familyAndFriends/erinFamily.jpg";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export const FamilyAndFriendsModal = (props) => {
  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (
        this.document.querySelector(".ff-left-arrow").contains(e.target) ||
        this.document.querySelector(".ff-right-arrow").contains(e.target)
      ) {
      } else if (
        this.document
          .querySelector(".familyAndFriendsConstant")
          .contains(e.target)
      ) {
        props.handleClose();
      }
    });
  });
  const modalShowing = props.show
    ? "familyAndFriendsConstant familyAndFriendsModalContainer"
    : "familyAndFriendsConstant hide";
  const [current, setCurrent] = useState(0);

  const sliderData = [macyFriends, samFamily, ryanFamily, erinFamily];
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
        <IoIosArrowDropleft className="ff-left-arrow" onClick={prevSlide} />
        <IoIosArrowDropright className="ff-right-arrow" onClick={nextSlide} />
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
