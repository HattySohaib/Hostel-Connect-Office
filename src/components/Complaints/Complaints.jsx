import React, { useState } from "react";
import "./Complaints.css";
import Complaint from "./Complaint";

import { db } from "../../firebaseConfig.js";
import { ref, get } from "firebase/database";

function Complaints() {
  const [complaints, setComplaints] = useState([]);

  get(ref(db, "Maintenance/Complaints"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const temp = Object.keys(data).map((id) => {
          return { ...data[id], complainId: id };
        });
        setComplaints(temp);
        console.log(complaints);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div id="complaints">
      <div className="top">
        <h1>Complaints</h1>
      </div>
      <div className="headers">
        <p className="header-key">Category</p>
        <p className="header-key">Status</p>
        <p className="header-key">Complainant</p>
        <p className="header-key">Description</p>
        <p className="header-key">Actions</p>
      </div>

      <div className="complaint-cards">
        {complaints.map((complaint, key) => (
          <Complaint
            key={key}
            category={complaint.complainType}
            student={complaint.complainUsername}
            status={complaint.status}
            description={complaint.complainDetails}
            complaintId={complaint.complainId}
          />
        ))}
      </div>
    </div>
  );
}

export default Complaints;
