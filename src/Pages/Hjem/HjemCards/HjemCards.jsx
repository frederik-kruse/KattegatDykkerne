import React from "react";
import Data from "../../../Data/Data.json";
import "./HjemCards.css";

const HjemCards = () => {
  return (
    <div className="HjemCards_flex">
      {Data.homeCards.map((homeCards) => (
        <div key={homeCards.id}>
          <section className="Cards_box">
            <img
              src={"./images/" + homeCards.IMG}
              alt="Nogle af de muligheder vi kan give"
              className="Home_cardsIMG"
            />
            <br />
            <h2 className="homeCards_heading Color_sportyBlue">
              {homeCards.heading}
            </h2>
            <p className="homeCards_text">{homeCards.Text}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default HjemCards;
