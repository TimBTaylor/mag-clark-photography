import React from "react";
import "../../styles/Pricing/Pricing.css";
import { PricingBodySquare } from "./PricingBodySquare";

export const PricingBody = () => {
  const couplesAndFamily = [
    {
      type: "Couples",
      price: "$50",
      time: "45",
      timeType: "minutes",
      images: "25-40",
    },
    {
      type: "Family",
      price: "$75",
      time: "1.5",
      timeType: "hours",
      images: "35-60",
    },
  ];

  const seniorAndMaternity = [
    {
      type: "Senior",
      price: "$75",
      time: "45",
      timeType: "minutes",
      images: "25-40",
    },
    {
      type: "Maternity",
      price: "$75",
      time: "45",
      timeType: "hours",
      images: "25-40",
    },
  ];
  return (
    <div className="pricingBodyContainer">
      <div className="couplesAndFamilyContainer">
        {couplesAndFamily.map((type) => {
          return (
            <PricingBodySquare
              type={type.type}
              price={type.price}
              time={type.time}
              timeType={type.timeType}
              images={type.images}
              key={type.type}
            />
          );
        })}
      </div>
      <div className="seniorAndMaternityContainer">
        {seniorAndMaternity.map((type) => {
          return (
            <PricingBodySquare
              type={type.type}
              price={type.price}
              time={type.time}
              timeType={type.timeType}
              images={type.images}
              key={type.type}
            />
          );
        })}
      </div>
    </div>
  );
};
