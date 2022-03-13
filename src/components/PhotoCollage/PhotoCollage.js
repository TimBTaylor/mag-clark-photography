import React from "react";
import "../../styles/PhotoCollage/PhotoCollage.css";
import erinAndDean from "../../images/photoCollage/erinAndDean.jpg";
import jordanAndNick from "../../images/photoCollage/jordanAndNick.jpg";
import amandaAndNate from "../../images/photoCollage/amandaAndNate.jpg";
import taylorAndJared from "../../images/photoCollage/taylorAndJared.jpg";
import samAndSutton from "../../images/photoCollage/samAndSutton.jpg";
import haleyAndWesley from "../../images/photoCollage/haleyAndWesley.jpg";
import ryanAndKatie from "../../images/photoCollage/ryanAndKatie.jpg";
import macyAndMckenna from "../../images/photoCollage/macyAndMckenna.jpg";

export const PhotoCollage = () => {
  return (
    <div className="photoCollageContainer">
      <div className="gallery-item">
        <img src={jordanAndNick} alt="jordanandnick" />
      </div>
      <div className="gallery-item">
        <img src={macyAndMckenna} alt="jordanandnick" />
      </div>
      <div className="gallery-item">
        <img src={haleyAndWesley} alt="jordanandnick" />
      </div>
      <div className="gallery-item">
        <img src={ryanAndKatie} alt="jordanandnick" />
      </div>
      <div className="gallery-item">
        <img src={amandaAndNate} alt="jordanandnick" />
      </div>
      <div className="gallery-item">
        <img src={erinAndDean} alt="jordanandnick" />
      </div>
      <div className="gallery-item">
        <img src={taylorAndJared} alt="jordanandnick" />
      </div>
      <div className="gallery-item">
        <img src={samAndSutton} alt="jordanandnick" />
      </div>
    </div>
  );
};
