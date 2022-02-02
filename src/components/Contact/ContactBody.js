import React, { useRef } from "react";
import "../../styles/Contact/ContactStyles.css";
import Instagram from "../../images/instagram-contact.svg";
import Facebook from "../../images/facebook-contact.svg";
import Email from "../../images/email-contact.svg";
import Portrait from "../../images/portrait.png";
import emailjs from "@emailjs/browser";

export const ContactBody = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_67jhdew",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contactContainer">
      <div className="contactTextContainer">
        <img src={Portrait} alt="portait" className="portrait" />
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
