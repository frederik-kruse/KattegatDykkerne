import React from "react";
import Data from "../../../Data/Data.json";
import "./MemberList.css";

const MemberList = () => {
  return (
    <div>
      <div className="Kontakt_CardsFlex">
        {Data.Memberlist.map((Memberlist) => (
          <div key={Memberlist.id}>
            <section className="Kontakt_card">
              <img
                src={"./images/" + Memberlist.profileIMG}
                alt="Profilebillde af bestyrelses medlem"
                className="Profilebillde"
              />
              <h1 className="Memberlist_stilling Color_sportyBlue">
                {Memberlist.stilling}
              </h1>
              <p className="Memberlist_name">{Memberlist.name}</p>
              <p>{Memberlist.location}</p>
              <p>{Memberlist.tlf}</p>
              <p className="Memberlist_email">
                <a href="mailto:formanden@kattegatdykkerne.dk">
                  {Memberlist.email}
                </a>
              </p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberList;
