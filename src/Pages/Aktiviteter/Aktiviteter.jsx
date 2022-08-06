import React from "react";
import Data from "../../Data/Data.json";
import { Helmet } from 'react-helmet';
import "./Aktiviteter.css";

const Aktiviteter = () => {
  return (
    <div>
      <Helmet>
        <title>Kattegat Dykkerne | Aktiviteter</title>
      </Helmet>
      {Data.Aktiviteter.map((Aktiviteter) => (
        <div key={Aktiviteter.id}>
          <div className="Aktiviteter_begin">
            <p className="Aktiviteter_tekst">{Aktiviteter.Aktiviteter_tekst}</p>
            <div className="Aktiviteter_IMGFlex">
              <h1 className="Aktiviteter_headingIMG">Aktiviteter</h1>
              <div
                alt="Klubben ude at sejle, med dykkerdragter på"
                className="Aktiviteter_IntroIMG"
              ></div>
            </div>
          </div>
          <div className="Aktiviteter_flex">
            <section className="Svommehal">
              <h2 className="Svommehal_heading Color_sportyBlue">
                {Aktiviteter.Svommehal_heading}
              </h2>
              <p>{Aktiviteter.Svommehal_text}</p>
            </section>
            <img className="Dykkertur_img"
              src={"./images/" + Aktiviteter.Svommehal_img}
              alt="Dykker tur i en svømmehal"
            />
            <section className="Provedyk">
              <h2 className="Provedyk_heading Color_sportyBlue">
                {Aktiviteter.Provedyk_heading}
              </h2>
              <p>{Aktiviteter.Provedyk_text}</p>
            </section>
          </div>
        <div className="Aktiviteter_bannerFlex">
          <h1 className="Aktiviteter_bannerText">Uddannelse</h1>
          <section className="Aktiviteter_banner"></section>
          </div>

          <div className="Aktiviteter_cards_position">
            <section className="Aktiviteter_card">
              <h2 className="Aktiviteter_cardHeading Color_sportyBlue">
                {Aktiviteter.BlivDykker_heading}
              </h2>
              <p className="Aktiviteter_cardText">{Aktiviteter.BlivDykker_text}</p>
              <img
                loading="lazy" src={"./images/" + Aktiviteter.Padi_logo}
                alt="Padi logo"
                className="PadiLogo"
              />
            </section>
            <section className="Aktiviteter_card">
              <h2 className="Aktiviteter_cardHeading Color_sportyBlue">
                {Aktiviteter.AndreUddannelser_heading}
              </h2>
              <p className="Aktiviteter_cardText">{Aktiviteter.AndreUddannelser_text}</p>
            </section>
            <section className="Aktiviteter_card">
              <h2 className="Aktiviteter_cardHeading Color_sportyBlue">
                {Aktiviteter.Holdstart_heading}
              </h2>
              <p className="Aktiviteter_cardText">{Aktiviteter.Holdstart_text}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aktiviteter;
