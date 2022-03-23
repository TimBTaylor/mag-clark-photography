import React, { forwardRef } from "react";
import { Couples } from "./Couples";
import { Portraits } from "./Portraits";
import { FamilyAndFriends } from "./FamilyAndFriends";
import "../../styles/Investment/InvestmentStyles.css";

export const Investment = forwardRef((props, ref) => {
  return (
    <div className="investmentContainer" ref={ref}>
      <Couples />
      <Portraits />
      <FamilyAndFriends />
    </div>
  );
});
