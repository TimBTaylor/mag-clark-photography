import React from "react";
import "../../styles/Pricing/Pricing.css";

export const PricingBodySquare = (props) => {
  const type = props.type;
  const price = props.price;
  const time = props.time;
  const timeType = props.timeType;
  const images = props.images;
  return (
    <div className="pricingBodySquareContainer">
      <div className="pricingBackgroundContainer"></div>
      <div className="pricingInfoContainer">
        <div className="pricingInfo">
          <h1 className="type">{type}</h1>
          <h1 className="time">
            {time} {timeType}
          </h1>
          <h1 className="images">{images} images</h1>
        </div>
        <div className="priceContainer">
          <h1 className="price">{price}</h1>
        </div>
      </div>
    </div>
  );
};
