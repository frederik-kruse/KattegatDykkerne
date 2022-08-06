import { Component } from "react";
import Data from "../../../Data/Data.json";
import "./HjemText.css";

class HjemText extends Component {
  render() {
    return (
      <div>
        {Data.home.map((home) => (
          <div key={home.id} className="HjemText_main">
            <article className="HomeText_position">
              <p id="home" className="Home_paragraph">{home.text1}</p>
              <p className="Home_paragraph">{home.text2}</p>
            </article>
            <img
              src={"./images/" + home.Logo}
              alt="Logo for Kattegat Dykkerne"
              className="HjemText_logo"
            />
          </div>
        ))}

<div id="test">

</div>
      </div>
    );
  }
}

export default HjemText;
