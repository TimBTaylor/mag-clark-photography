import React from "react";
import { Couples } from "./Couples";
import { Portraits } from "./Portraits";
import { FamilyAndFriends } from "./FamilyAndFriends";
import "../../styles/Investment/InvestmentStyles.css";

export const Investment = () => {
  return (
    <div className="investmentContainer">
      <Couples />
      <Portraits />
      <FamilyAndFriends />
    </div>
  );
};
