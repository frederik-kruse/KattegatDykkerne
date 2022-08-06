import React from "react";
import Data from "../../Data/Data.json";
import { FaFacebookSquare } from "react-icons/fa";
import MemberList from "./MemberList/MemberList";
import KontaktForm from "../../Components/KontaktForm/KontaktForm";
import { Helmet } from "react-helmet";
import "./Kontakt.css";

const Kontakt = () => {
  return (
    <div>
      <Helmet>
        <title>Kattegat Dykkerne | Kontakt</title>
      </Helmet>
      {Data.Kontakt.map((Kontakt) => (
        <div key={Kontakt.id}>
          <div className="Kontakt_banner"></div>
          <KontaktForm />
          <div className="Kontakt_thematicBreakFlex">
            <hr className="Kontakt_thematicBreakSecond" />
            <hr className="Kontakt_thematicBreakFirst" />
          </div>
          <aside className="Kontakt_ExtraInfo">
            <div className="Kontakt_FacebookInfo">
              <a href="https://da-dk.facebook.com/groups/kattegatdykkerne/">
                <FaFacebookSquare className="Kontakt_FacebookLogo" />
              </a>
              <p>
                {Kontakt.Facebook_text}
                <a
                  className="Kontakt_link"
                  href="https://da-dk.facebook.com/groups/kattegatdykkerne/"
                >
                  &nbsp;her
                </a>
              </p>
            </div>
            <div className="Kontakt_LuftpaafyldningInfo">
              <h2 className="Luftpaafyldning_heading Color_sportyBlue">
                {Kontakt.Luftpaafyldning_heading}
              </h2>
              <p>{Kontakt.Luftpaafyldning_text}</p>
            </div>
          </aside>
          <div className="Kontakt_thematicBreakFlex">
            <hr className="Kontakt_thematicBreakFirst" />
            <hr className="Kontakt_thematicBreakSecond" />
          </div>
          <MemberList />
        </div>
      ))}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137.9741492799266!2d10.923884333943583!3d56.405954068621796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464dd5d7593fc4f1%3A0xd2443120ab36e0b2!2sSkakkes%20Holm%2020%2C%208500%20Gren%C3%A5!5e0!3m2!1sda!2sdk!4v1646983171124!5m2!1sda!2sdk"
        width="100%"
        height="500"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        tabIndex="0"
        title="Google Maps"
      />
    </div>
  );
};

export default Kontakt;
