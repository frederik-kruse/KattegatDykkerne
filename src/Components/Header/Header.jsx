import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import Logo from "../../IMG/kattegat-dykkerne-icon.png";
import { BsFacebook } from "react-icons/bs";

const Header = () => {
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= -1) {
      body.classList.remove("scroll-up");
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains("scroll-down")
    ) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });

  const [show, setShow] = useState(false);

  return (
    <div>
      <header>
        <NavLink className="Header_logoName" to="/">
          <img
            width={50}
            height={50}
            src={Logo}
            alt="Logo for Kattegat dykkerne"
          />
          <h1>Kattegat Dykkerne</h1>
        </NavLink>
        <nav>
          <div>
            <ul className="Flex-Header">
              <li className="Big_Header">
                <NavLink className="header__a" to="/">
                  Hjem
                </NavLink>
              </li>
              <li className="Big_Header">
                <NavLink className="header__a" to="/OmKlubben">
                  Om klubben
                </NavLink>
              </li>
              <li className="Big_Header">
                <NavLink className="header__a" to="/Indmeldelse">
                  Indmeldelse
                </NavLink>
              </li>
              <li className="Big_Header">
                <NavLink className="header__a" to="/Aktiviteter">
                  Aktiviteter
                </NavLink>
              </li>
              <li className="Big_Header">
                <NavLink className="header__a" to="/Kontakt">
                  Kontakt
                </NavLink>
              </li>
              <li>
                <a href="https://da-dk.facebook.com/groups/kattegatdykkerne/">
                  <BsFacebook className="Header_FaceLG_PC" />
                </a>
              </li>
            </ul>
          </div>
          {/* Header kun for ipad */}
          <div>
            <ul className="Flex-Header">
              <li className="Small_Header">
                <NavLink className="header__a" to="/">
                  Hjem
                </NavLink>
              </li>
              <li className="Small_Header">
                <NavLink className="header__a" to="/OmKlubben">
                  Om klubben
                </NavLink>
              </li>
              <li className="Small_Header">
                <NavLink className="header__a" to="/Indmeldelse">
                  Indmeldelse
                </NavLink>
              </li>
              <li className="Small_Header">
                <NavLink className="header__a" to="/Aktiviteter">
                  Aktiviteter
                </NavLink>
              </li>
              <li className="Small_Header">
                <NavLink className="header__a" to="/Kontakt">
                  Kontakt
                </NavLink>
              </li>
              <li>
                <a href="https://da-dk.facebook.com/groups/kattegatdykkerne/">
                  <BsFacebook className="Header_FaceLG_Small" />
                </a>
              </li>
            </ul>
          </div>
          {/* Header kun for ipad -----------end */}

          {/* Header kun for Mobil */}
          <div className="dropdown">
            <button onClick={() => setShow(!show)} className="dropbtn">
              <Hamburger color="#ffffff" />
            </button>
            <div className="dropdown-content">
              <div>
                {show ? (
                  <div className="column">
                    <NavLink onClick={() => setShow(!show)} to="/">
                      Hjem
                    </NavLink>
                    <div className="Header_thematicBreakFlex">
                      <hr className="Header_thematicBreakSecond" />
                      <hr className="Header_thematicBreakFirst" />
                    </div>
                    <NavLink onClick={() => setShow(!show)} to="/OmKlubben">
                      Om klubben
                    </NavLink>
                    <div className="Header_thematicBreakFlex">
                      <hr className="Header_thematicBreakSecond" />
                      <hr className="Header_thematicBreakFirst" />
                    </div>
                    <NavLink onClick={() => setShow(!show)} to="/Indmeldelse">
                      Indmeldelse
                    </NavLink>
                    <div className="Header_thematicBreakFlex">
                      <hr className="Header_thematicBreakSecond" />
                      <hr className="Header_thematicBreakFirst" />
                    </div>
                    <NavLink onClick={() => setShow(!show)} to="/Aktiviteter">
                      Aktiviteter
                    </NavLink>
                    <div className="Header_thematicBreakFlex">
                      <hr className="Header_thematicBreakSecond" />
                      <hr className="Header_thematicBreakFirst" />
                    </div>
                    <NavLink onClick={() => setShow(!show)} to="/Kontakt">
                      Kontakt
                    </NavLink>
                    <div className="Header_thematicBreakFlex">
                      <hr className="Header_thematicBreakSecond" />
                      <hr className="Header_thematicBreakFirst" />
                    </div>
                    <a href="https://da-dk.facebook.com/groups/kattegatdykkerne/">
                      <BsFacebook className="Header_FaceLG" />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* Header kun for Mobil -------------end */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
