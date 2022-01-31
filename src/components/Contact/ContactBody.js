import React from "react";
import "../../styles/Contact/ContactStyles.css";
import Instagram from "../../images/instagram-contact.svg";
import Facebook from "../../images/facebook-contact.svg";
import Email from "../../images/email-contact.svg";

export const ContactBody = () => {
  return (
    <div className="contactBodyContainer">
      <div className="instagramContainer">
        <a
          href="https://www.instagram.com/magclarkphoto/"
          className="contactLink"
        >
          <img
            src={Instagram}
            alt="instagram logo"
            className="instagramContact"
          />
          <br />
          <h1 className="instagramHandle">@magclarkphoto</h1>
        </a>
      </div>
      <div className="facebookContainer">
        <a
          href="https://www.facebook.com/maggie.clark.75685"
          className="contactLink"
        >
          <img src={Facebook} alt="facebook logo" className="facebookContact" />
          <br />
          <h1 className="facebookHandle">Maggie Clark</h1>
        </a>
      </div>
      <div className="emailContainer">
        <a
          href="mailto:magclarkphotography@outlook.com"
          className="contactLink"
        >
          <img src={Email} alt="email logo" className="emailContact" />
          <br />
          <h1 className="emailHandle">Email me</h1>
        </a>
      </div>
    </div>
  );
};
