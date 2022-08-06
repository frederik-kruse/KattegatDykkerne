import { useState } from "react";
import { Prices } from "../../assets/Prices/Prices";
import "./IndmeldelseForm.css";

const IndmeldelseForm = () => {
  const getFormattedPrice = (price) => `${price.toFixed(0)}`;

  const [checkedState, setCheckedState] = useState(
    new Array(Prices.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + Prices[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-å]/gi, "");

    setMessage(result);
  };

  
  return (
    <div>
      <form
        method="POST"
        action="https://public.herotofu.com/v1/2fd6de50-b4af-11ec-8934-1956502edee6"
        encType="multipart/form-data"
      >
        <div className="IndmeldelseForm_box">
          <div className="IndmeldelseForm_CheckboxValuta">
            <label className="IndmeldelseForm_Medlemstype">
              <span>Medlemstype:</span>
              <select className="DropdownList" name="Medlemstype">
                <option value="Svømmehal-300kr">Bassis medlem</option>
                <option value="Svømmehal-300kr">Studie medlem</option>
                <option value="Svømmehal-300kr">UV-jæger</option>
                <option value="Svømmehal-300kr">Junior</option>
                <option value="Svømmehal-300kr">Børne/Unge</option>
              </select>
            </label>
            <ul>
              {Prices.map(({ name, price }, index) => {
                return (
                  <li className="Checkbox_Content" key={index}>
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value="yes"
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <div>
                      +{getFormattedPrice(price)},- kr årligt
                    </div>
                  </li>
                );
              })}
            </ul>
            <label className="TotalPrice" name="Omkostninger">
            Dit medlemskab:
              <div>{getFormattedPrice(total)} kr. pr. år.</div>
            </label>
          </div>
          {/* Medlemstype til persondata */}
          <div className="IndmeldelseForm_TextInfo">
            <div className="IndmeldelseForm_Personinfo">
              <label className="IndmeldelseForm_Textinput">
                <span>Fuldt navn:</span>
                <input
                  value={message}
                  onChange={handleChange}
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
                  type="text"
                  country="DK"
                  required="true"
                  minlength="8" maxlength="8"
                  
                />
              </label>
              <label className="IndmeldelseForm_Textinput">
                <span>Din fødselsdag:</span>
                <input name="fødselsdag" type="date" required="true" />
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
