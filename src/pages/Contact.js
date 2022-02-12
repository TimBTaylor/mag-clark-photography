import React from "react";
import { ContactBody } from "../components/Contact/ContactBody";
import { Header } from "../components/Header/Header";

export const Contact = () => {
  window.scrollTo(0, 0);

  return (
    <div className="contactPageContainer">
      <Header title="contact" />
      <ContactBody />
    </div>
  );
};
