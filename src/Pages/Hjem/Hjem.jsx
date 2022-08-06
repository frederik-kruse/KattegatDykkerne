import React from "react";
import HjemText from "./HjemText/HjemText";
import HjemCards from "./HjemCards/HjemCards";
import Splash from "../../Components/Splash/Splash";
import Slider from "../../Components/Slider/Slider";
import { Helmet } from "react-helmet";
import "./Hjem.css";

const Home = () => {

  return (
    <div className="Hjem_Main">
      <Splash />

      <Helmet>
        <title>Kattegat Dykkerne | Hjem</title>
      </Helmet>
      <Slider />

      <HjemText />

      <HjemCards />

    </div>
  );
};

export default Home;
