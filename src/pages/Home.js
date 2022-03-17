import React from "react";
import "../styles/Home/HomeStyles.css";
import { Header } from "../components/Header/Header";
import { PhotoCollage } from "../components/PhotoCollage/PhotoCollage";
import { MeetMe } from "../components/MeetMe/MeetMe";
import { Investment } from "../components/Investment/Investment";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="intro">capturing memories for a lifetime</h1>
      <div className="headerAndImage">
        <Header title="home" />
      </div>
      <PhotoCollage />
      <MeetMe />
      <Investment />
    </div>
  );
};
