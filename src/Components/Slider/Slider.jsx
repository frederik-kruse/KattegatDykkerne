import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";

import Banner1 from "../../IMG/HjemSlider/Banner1.jpg";
import Banner2 from "../../IMG/HjemSlider/Banner2.jpg";
import Banner3 from "../../IMG/HjemSlider/Banner3.jpg";

import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="Slider_text">
        <h1 className="Slider_heading">Kattegat Dykkerne, Grenaa</h1>
        <p className="Slider_VelkommenText">
          Hvis du tror at Kattegat Dykkerne kunne være en klub for dig, <br />
          er du velkommen til at se forbi klubben en tirsdag til klubaften
          <br /> eller tilmelde dig online via linket her under.
        </p>

        <NavLink to="/Indmeldelse">
          <button className="Slider_btn">Indmeldelse</button>
        </NavLink>
      </div>
      <Carousel
        className="Slider"
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        <div>
          <img src={Banner1} alt="" />
        </div>
        <div>
          <img src={Banner2} alt="" />
        </div>
        <div>
          <img src={Banner3} alt="" />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
