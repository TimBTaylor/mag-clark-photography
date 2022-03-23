import React, { useRef } from "react";
import "../styles/Home/HomeStyles.css";
import { Header } from "../components/Header/Header";
import { PhotoCollage } from "../components/PhotoCollage/PhotoCollage";
import { MeetMe } from "../components/MeetMe/MeetMe";
import { Investment } from "../components/Investment/Investment";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Contact } from "../components/Contact/Contact";

export const Home = () => {
  const meetMeRef = useRef();
  const photoCollageRef = useRef();
  const investmentRef = useRef();
  const contactRef = useRef();

  const handleMeetMeRef = () => {
    meetMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handlePhotoCollageRef = () => {
    photoCollageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleInvestmentRef = () => {
    investmentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactRef = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homeContainer">
      <h1 className="intro">capturing memories for a lifetime</h1>
      <div className="headerAndImage">
        <Header
          handleMeetMeRef={handleMeetMeRef}
          handlePhotoCollageRef={handlePhotoCollageRef}
          handleInvestmentRef={handleInvestmentRef}
          handleContactRef={handleContactRef}
        />
      </div>
      <ScrollToTop />
      <MeetMe ref={meetMeRef} />
      <PhotoCollage ref={photoCollageRef} />
      <Investment ref={investmentRef} />
      <Contact ref={contactRef} />
    </div>
  );
};
