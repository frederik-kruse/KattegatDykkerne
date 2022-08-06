import React, { useState } from "react";
import "./KontaktForm.css";

const KontaktForm = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-å]/gi, "");

    setMessage(result);
  };

  return (
    <div className="Kontakt_FormPosition">
      <div className="Kontakt_FormFlex">
        <h2 className="Kontakt_FormHeading Color_sportyBlue">
          Send os en mail
        </h2>
        <form
          method="POST"
          action="https://public.herotofu.com/v1/680fc210-b643-11ec-b4fe-2b9cbf782176"
        >
          <section className="Kontakt_FormColumns">
            <div className="Kontakt_FormInfo">
              <div className="Kontakt_FormInputFlex">
                <label for="full_name">Navn:</label>
                <input
                  value={message}
                  onChange={handleChange}
                  maxLength="20"
                  minLength="2"
                  name="name"
                  id="full_name"
                  type="text"
                  required="true"
                />
              </div>

              <div className="Kontakt_FormInputFlex">
                <label for="email_address">Email:</label>
                <input
                  name="email"
                  id="email_address"
                  type="email"
                  required="true"
                />
              </div>
              <div className="Kontakt_FormInputFlex">
                <label for="full_name">Emne:</label>
                <input maxLength="30"
                  minLength="3" name="Emne" id="full_name" type="text" required="true" />
              </div>
            </div>
            <div className="Kontakt_FormSendMessage">
              <div className="Kontakt_FormInputFlex">
                <label for="message">Besked:</label>
                <textarea
                  className="Kontakt_FormMessage"
                  name="message"
                  id="message"
                  required="true"
                  maxLength="300"
                  minLength="3"
                ></textarea>
              </div>
              <div>
                <button className="Kontakt_FormBtn" type="submit">
                  Send besked
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default KontaktForm;
