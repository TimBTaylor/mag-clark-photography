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
        "template_bqbxafx",
        form.current,
        "user_GfWAy2GoDTLAxar1hX7Yu"
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
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <input
            type="text"
            name="user_name"
            className="input"
            placeholder="name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="input"
            placeholder="email"
            required
          />
          <input
            type="text"
            name="user_instagram"
            className="input"
            placeholder="instagram"
          />
          <input
            type="text"
            name="find_me"
            className="input"
            placeholder="How did you find me?"
          />
          <input
            type="text"
            name="interested_in"
            className="input"
            placeholder="What session are you interested in?"
            required
          />
          <textarea
            name="message"
            className="messageTextBox"
            placeholder="Enter a message"
          />
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
};
