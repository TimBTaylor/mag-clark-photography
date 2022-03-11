import React from "react";
import { Header } from "../components/Header/Header";
import "../styles/Home/HomeStyles.css";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="intro">capturing memories for a lifetime</h1>
      <div className="headerAndImage">
        <Header title="home" />
      </div>
    </div>
  );
};
