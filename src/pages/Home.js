import React from "react";
import { Header } from "../components/Header/Header";
import "../styles/Home/HomeStyles.css";

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="headerAndImage">
        <Header title="home" />
      </div>
    </div>
  );
};
