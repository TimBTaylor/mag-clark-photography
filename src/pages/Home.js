import React from "react";
import "../styles/Home/HomeStyles.css";
import { Header } from "../components/Header/Header";
import { PhotoCollage } from "../components/PhotoCollage/PhotoCollage";
import { MeetMe } from "../components/MeetMe/MeetMe";
import { Investment } from "../components/Investment/Investment";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log("clickled");
  };

  return (
    <div className="homeContainer">
      <h1 className="intro">capturing memories for a lifetime</h1>
      <div className="headerAndImage">
        <Header />
      </div>
      <button className="scrollToTop" onClick={scrollToTop}>
        <BsFillArrowUpCircleFill className="arrowUp" />
      </button>
      <PhotoCollage />
      <MeetMe />
      <Investment />
    </div>
  );
};
