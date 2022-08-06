import React from "react";
import Data from "../../Data/Data.json";
import PDF from "../../assets/vedtaegter.pdf";
import { Helmet } from 'react-helmet';
import "./OmKlubben.css";

const OmKlubben = () => {
  return (
    <div>
      <Helmet>
        <title>Kattegat Dykkerne | Om Klubben</title>
      </Helmet>
      {Data.OmKlubben.map((OmKlubben) => (
        <div key={OmKlubben.id}>
          <section className="OmKlubben_Intro">
            <div className="OmKlubben_IMGFlex">
            <h1 className="OmKlubben_headingIMG">Om Klubben</h1>
            <div
              alt="Om Klubben, billed på Om klubben undersiden."
              className="OmKlubben_IntroIMG"
            /></div>
            <br />
            <article>
              <h1 className="OmKlubben_heading Color_sportyBlue">
                {OmKlubben.heading}
              </h1>
              <p className="OmKlubben_IntroText">{OmKlubben.Text_sportsDK}</p>
            </article>
          </section>
          <section className="ForbundVedtaagter_position">
            <div className="Forbund_box">
              <h2 className="Forbund_heading Color_sportyBlue">
                {OmKlubben.ForbundHeading}
              </h2>
              <p>{OmKlubben.ForbundText}</p>
            </div>
            <img
              src={"./images/Omklubben/" + OmKlubben.DSF_IMG}
              alt="Logo for Dansk Sportsdykker forbund"
              className="DSFLogo"
            />
            <div className="Vedtaagter_box">
              <h2 className="Vedtaagter_heading Color_sportyBlue">
                {OmKlubben.Vedtaagter_heading}
              </h2>
              <p>
                {OmKlubben.Vedtaagter_text}&nbsp;
                <ins
                  className="Indmeldelse_PDF"
                  onClick={() => window.open(PDF, "_blank")}
                >
                  Hent vedtægterne som PDF
                </ins>
              </p>
            </div>
          </section>

          <div className="OmKlubben_banner">{OmKlubben.Banner}</div>

          <article>
            <div className="Klubmateriele_textFlex">
              <div className="Klubmateriele_text">
                <h2 className="Klubmateriele_heading Color_sportyBlue">
                  {OmKlubben.Klubmateriele_heading}
                </h2>
                <p>{OmKlubben.Klubmateriele_text1}</p>
              </div>
              <div className="Klubmateriele_text">
                <p>{OmKlubben.Klubmateriele_text2}</p>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default OmKlubben;
