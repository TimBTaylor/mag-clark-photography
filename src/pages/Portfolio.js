import React from "react";
import { Header } from "../components/Header/Header";
import { PortfolioBody } from "../components/Portfolio/PortfolioBody";
import { SliderData } from "../components/Portfolio/SliderData";

export const Portfolio = () => {
  return (
    <div className="portfolioPageContainer">
      <Header title="portfolio" />
      <PortfolioBody slides={SliderData} />
    </div>
  );
};
