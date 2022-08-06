import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "./PageNotFound.css";


const PageNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Kattegat Dykkerne | 404</title>
      </Helmet>
      <section  className="NotFound_banner">
        <h1 className="NotFound_heading">Ups vi ramte vist lidt for dybt her! - Fejl 404</h1>

        <p className="NotFound_Link">
          Vil du tilbage til <NavLink className="NotFound_Forside" to="/">forsiden?</NavLink>
        </p>
      </section>
    </div>
  );
};

export default PageNotFound;
