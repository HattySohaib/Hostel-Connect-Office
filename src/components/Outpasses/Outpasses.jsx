import React, { useState } from "react";
import "./Outpasses.css";

import { db } from "../../firebaseConfig.js";
import { ref, get } from "firebase/database";
import Outpass from "./Outpass";

function Outpasses() {
  const [outpasses, setOutpasses] = useState([]);

  get(ref(db, "gatepasses"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const temp = Object.keys(data).map((id) => {
          return { ...data[id], complainId: id };
        });
        setOutpasses(temp);
        console.log(outpasses);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div id="outpass">
      <div className="top">
        <h1>Gate Pass History</h1>
      </div>
      <div className="outpass-headers">
        <p className="header-key">Student</p>
        <p className="header-key">Contact</p>
        <p className="header-key">Date</p>
        <p className="header-key">Out Time</p>
        <p className="header-key">In Time</p>
        <p className="header-key">Purpose</p>
      </div>
      <div className="outpass-cards">
        {outpasses.map((o, i) => (
          <Outpass
            key={i}
            email={o.email}
            inTime={o.inHour + " : " + o.inMinute}
            outTime={o.outHour + " : " + o.outMinute}
            purpose={o.purpose}
            date={o.outDay + "/" + o.outMonth + "/" + o.outYear}
          />
        ))}
      </div>
    </div>
  );
}

export default Outpasses;
