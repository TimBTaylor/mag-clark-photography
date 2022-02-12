import React from "react";
import { PricingBody } from "../components/Pricing/PricingBody";
import { Header } from "../components/Header/Header";

export const Pricing = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Header title="pricing" />
      <PricingBody />
    </div>
  );
};
