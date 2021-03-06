import React from "react";
import "./KontaktForm.css";

const KontaktForm = () => {
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
                <input name="name" id="full_name" type="text" required="true" />
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
                <input name="Emne" id="full_name" type="text" required="true" />
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
