import React from "react";
import "./Slider.scss";
import slider_img_1 from "../../assets/images/slider_img_1.avif";

export const Slider = () => {
  return (
    <div className="hero-slider">
      <div className="hero-slider-item">
        <img src={slider_img_1} alt="" />
      </div>
    </div>
  );
};
