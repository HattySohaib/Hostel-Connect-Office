import React, { useState } from "react";
import Feedback from "./Feedback";
import "./Mess.css";

import { db } from "../../firebaseConfig.js";
import { ref, get } from "firebase/database";

function Mess() {
  const [feedbacks, setFeedbacks] = useState([]);

  get(ref(db, "Mess/Feedback"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const temp = Object.keys(data).map((id) => {
          return { ...data[id], feedbackId: id };
        });
        setFeedbacks(temp);
        console.log(feedbacks);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div id="mess">
      <div className="top">
        <h1>Mess Feedback</h1>
      </div>
      <div className="outpass-headers">
        <p className="header-key">Student</p>
        <p className="header-key">Title</p>
        <p className="header-key">Part</p>
        <p className="header-key">Day</p>
        <p className="header-key">Description</p>
        <p className="header-key">Rating</p>
      </div>
      <div className="feedback-cards">
        {feedbacks.map((f, key) => (
          <Feedback
            key={key}
            student={f.feedbackUsername}
            title={f.feedbackTitle}
            part={f.feedbackPart}
            day={f.feedbackDay}
            desc={f.feedbackDesc}
            rating={f.feedbackRatings}
          />
        ))}
      </div>
    </div>
  );
}

export default Mess;
