import React from "react";
import { NavLink } from "react-router-dom";
import { ScrollButton } from "../Scroll/ScrollButton";
import Icon from "../../IMG/kattegat-dykkerne-icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Main_Footer">
      <div className="Footer_LogoCopy">
        <img
          src={Icon}
          alt="Logo for Kattegat dykkerne" className="Footer_logo"
        />
        <p className="Footer_copyright_bigscreen">Copyright © 2022 Kattegat Dykkerne</p>
      </div>
      <div className="Footer_kontakt">
        <h3>
          Hvis du skulle have nogle spørgsmål, kan du kontakte os via mail eller
          telefon
        </h3>
        <p>Telefon: 61 11 14 32 formanden@kattegatdykkerne.dk</p>

        <NavLink className="Footer_Btn_kontakt" to="/Kontakt">
          Kontakt
        </NavLink>
        <p>Kattegatdykkerne Grenaa Skakkesholm 20 DK-8500 Grenaa</p>
      </div>

      <div className="Footer_TopBtn">
        <ScrollButton />
        <p>Tilbage til toppen?</p>
      </div>

      <p className="Footer_copyright_smallscreen">Copyright © 2022 Kattegat Dykkerne</p>
    </footer>
  );
};

export default Footer;
