import React, { useRef, useState, forwardRef } from "react";
import "../../styles/Contact/Contact.css";
import emailjs from "@emailjs/browser";
import Checkmark from "../../images/accept.png";
import Camera from "../../images/camera.svg";

export const Contact = forwardRef((props, ref) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setIsLoading(true);
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
          setIsLoading(false);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactContainer" ref={ref}>
      <h1 className="contactMe">contact me</h1>
      {isSubmitted ? (
        <div className="submissionContainer">
          <img className="checkmark" src={Checkmark} alt="checkmark" />
          <h1 className="submitted">Submitted Successfully</h1>
          <button
            className="submittedButton"
            onClick={() => setIsSubmitted(false)}
          >
            OK
          </button>
        </div>
      ) : (
        ""
      )}
      {isLoading ? (
        <div className="logoContainer">
          <img src={Camera} alt="camera" className="camera" />
          <div className="text">
            <h1 className="magClark">mag clark</h1>
            <h1 className="photography">photography</h1>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={
          isSubmitted || isLoading
            ? "contactTextContainer adjustOpacity"
            : "contactTextContainer"
        }
      >
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
});
