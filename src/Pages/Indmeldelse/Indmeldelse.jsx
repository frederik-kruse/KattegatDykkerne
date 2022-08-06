import React from "react";
import Data from "../../Data/Data.json";
import PDF from "../../assets/vedtaegter.pdf";
import { Helmet } from "react-helmet";
import IndmeldelseForm from "../../Components/IndmeldelseForm/IndmeldelseForm";
import "./Indmeldelse.css";

const Indmeldelse = () => {
  return (
    <div>
      <Helmet>
        <title>Kattegat Dykkerne | Indmeldelse</title>
      </Helmet>
      {Data.Indmeldelse.map((Indmeldelse) => (
        <div key={Indmeldelse.id}>
          <section className="Indmeldelse_banner">
            <h1>{Indmeldelse.Indmeldelse_heading}</h1>
            <p>{Indmeldelse.Indmeldelse_text}</p>
          </section>

          <IndmeldelseForm />

          <section className="Indmeldelse_SecondBanner"></section>
          {/* Efter banner er der mere info omkring Svømmehallen, luftpåfyldning, etc...*/}

          <div className="Indmeldelse_information">
            <section className="Indmeldelse_TextRow">
              <h2 className="Kontingent_heading Color_sportyBlue informationSpacing">
                {Indmeldelse.Kontingent_heading}
              </h2>
              <p>{Indmeldelse.Kontingent_text}</p>
              <h2 className="Svømmehallen_heading Color_sportyBlue informationSpacing">
                {Indmeldelse.Svømmehallen_heading}
              </h2>
              <p>{Indmeldelse.Svømmehallen_text}</p>
              <h2 className="DSF_heading Color_sportyBlue informationSpacing">
                {Indmeldelse.DSF_heading}
              </h2>
              <p>{Indmeldelse.DSF_text}</p>
              <h2 className="Luftpåfyldning_heading Color_sportyBlue informationSpacing">
                {Indmeldelse.Luftpafyldning_heading}
              </h2>
              <p>{Indmeldelse.Luftpafyldning_text}</p>
            </section>
            <section className="Indmeldelse_TextRow">
              <h2 className="Gummibaad_heading Color_sportyBlue informationSpacing">
                {Indmeldelse.Gummibaad_heading}
              </h2>
              <p>{Indmeldelse.Gummibaad_text}</p>
              <h2 className="Trykprøvning_heading Color_sportyBlue informationSpacing">
                {Indmeldelse.Trykprøvning_heading}
              </h2>
              <p>{Indmeldelse.Trykprøvning_text}</p>
              <h2 className="Ture_heading Color_sportyBlue informationSpacing">
                {Indmeldelse.Ture_heading}
              </h2>
              <p className="Indmeldelse_TureText">
                {Indmeldelse.Ture_text}&nbsp;
                <ins
                  className="Indmeldelse_PDF"
                  onClick={() => window.open(PDF, "_blank")}
                >
                  Hent vedtægterne som PDF
                </ins>
              </p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Indmeldelse;
