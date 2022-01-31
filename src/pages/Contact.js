import React from "react";
import { ContactHeader } from "../components/Contact/ContactHeader";
import { ContactBody } from "../components/Contact/ContactBody";

export const Contact = () => {
  return (
    <div className="contactPageContainer">
      <ContactHeader />
      <ContactBody />
    </div>
  );
};
