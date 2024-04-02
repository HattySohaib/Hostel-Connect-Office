import React, { useState } from "react";
import { truncate } from "../../Services/functions";

import { db } from "../../firebaseConfig.js";
import { ref, get } from "firebase/database";

function Outpass({ email, outTime, inTime, purpose, date }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  get(ref(db, "Users"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        Object.values(data).forEach((e) => {
          if (e.email === email) {
            setName(e.name);
            setContact(e.phone);
          }
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div className="outpass">
      <p className="outpass-value">{name}</p>
      <p className="outpass-value">{contact}</p>
      <p className="outpass-value">{date}</p>
      <p className="outpass-value">{outTime}</p>
      <p className="outpass-value">{inTime}</p>
      <p className="outpass-value">{truncate(purpose, 25)}</p>
    </div>
  );
}

export default Outpass;
