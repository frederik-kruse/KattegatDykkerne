import React from "react";
import "./IndmeldelseForm.css";

const IndmeldelseForm = () => {
  function FullPrice(props) {
    return <h2>{props.total}</h2>;
  }

  function Items(props) {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Count</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {props.productItems.map((item) => (
          <tr>
            <th>{item.name}</th>
            <th>{item.count}</th>
            <th>{item.price}</th>
            <th>{item.price * item.count}</th>
          </tr>
        ))}
      </table>
    );
  }

  const productItems = [
    { name: "Bassis", count: 1, price: 390 },
    { name: "Studie", count: 1, price: 200 },
    { name: "UV-jæger", count: 1, price: 892 },
  ];

  return (
    <div>
      <Items productItems={productItems} />

      <form
        method="POST"
        action="https://public.herotofu.com/v1/2fd6de50-b4af-11ec-8934-1956502edee6"
        encType="multipart/form-data"
      >
        <div className="IndmeldelseForm_box">
          <div className="IndmeldelseForm_CheckboxValuta">
            <label className="IndmeldelseForm_Medlemstype">
              <span>Medlemstype:</span>
              <select name="Medlemstype">
                <option value="300">Bassis medlem</option>
                <option>Studie medlem</option>
                <option>UV-jæger</option>
                <option>Junior</option>
                <option>Børne/Unge</option>
              </select>
            </label>
            <label className="IndmeldelseForm_checkbox">
              <span>Svømmehal:</span>
              <input
                className="CheckBpx"
                name="Svømmehal"
                value="yes"
                type="checkbox"
              />
            </label>
            <label className="IndmeldelseForm_checkbox">
              <span>DSF-medlemskab:</span>
              <input
                className="CheckBpx"
                name="DSF-medlemskab"
                value="yes"
                type="checkbox"
              />
            </label>
            <label className="IndmeldelseForm_checkbox">
              <span>Luftpåfyldning:</span>
              <input
                className="CheckBpx"
                name="Luftpåfyldning"
                value="yes"
                type="checkbox"
              />
            </label>
            <label name="Omkostninger">
              Omkostninger:
              <FullPrice
                name="Luftpåfyldning"
                total={productItems.reduce((a, c) => a + c.price * c.count, 0)}
              />
            </label>
          </div>
          {/* Medlemstype til persondata */}
          <div className="IndmeldelseForm_TextInfo">
            <div className="IndmeldelseForm_Personinfo">
              <label className="IndmeldelseForm_Textinput">
                <span>Fuldt navn:</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Joe Bloggs"
                  required="true"
                />
              </label>
              <label className="IndmeldelseForm_Textinput">
                <span>Email:</span>
                <input
                  name="email"
                  type="email"
                  placeholder="torsken@example.com"
                  required="true"
                />
              </label>
              <label className="IndmeldelseForm_Textinput">
                <span>Tlf:</span>
                <input
                  name="phone"
                  type="number"
                  country="DK"
                  required="true"
                />
              </label>
              <label className="IndmeldelseForm_Textinput">
                <span>Din fødselsdag:</span>
                <input name="birthday" type="date" required="true" />
              </label>
            </div>
            <div className="IndmeldelseForm_location">
              <label className="IndmeldelseForm_Textinput">
                <span>Adresse:</span>
                <input name="adresse" type="text" required="true" />
              </label>

              <label className="IndmeldelseForm_Textinput">
                <span>Postnr:</span>
                <input name="postnr" type="number" required="true" />
              </label>
              <label className="IndmeldelseForm_Textinput">
                <span>Bynavn:</span>
                <input name="bynavn" type="text" required="true" />
              </label>
              <button className="IndmeldelseForm_button" type="submit">
                Send Indmeldelse
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default IndmeldelseForm;
