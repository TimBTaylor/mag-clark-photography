import React, { useState } from "react";
import "../../styles/Portfolio/Portfolio.css";
import { SliderData } from "./SliderData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const PortfolioBody = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="portfolioBodyContainer">
      <MdKeyboardArrowLeft className="left-arrow" onClick={prevSlide} />
      <MdKeyboardArrowRight className="right-arrow" onClick={nextSlide} />
      <section className="slider">
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="portfolio img" className="img" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};
