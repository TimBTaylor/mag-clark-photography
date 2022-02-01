import React from "react";
import { ContactBody } from "../components/Contact/ContactBody";
import { Header } from "../components/Header/Header";

export const Contact = () => {
  return (
    <div className="contactPageContainer">
      <Header title="contact" />
      <ContactBody />
    </div>
  );
};
