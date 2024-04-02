import React, { useState } from "react";
import "./Notices.css";
import Notice from "./Notice";
import { ref, get } from "firebase/database";
import { db } from "../../firebaseConfig";

function Notices() {
  const [notices, setNotices] = useState([]);

  get(ref(db, "Notices/Notice"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const temp = Object.keys(data).map((id) => {
          return { ...data[id], noticeId: id };
        });
        setNotices(temp);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div id="notices">
      <div className="top">
        <h1>Notice Board</h1>
      </div>
      <div className="notice-cards">
        {notices.map((notice, key) => (
          <Notice
            key={key}
            noticeText={notice.noticeText}
            noticeId={notice.noticeId}
          />
        ))}
      </div>
    </div>
  );
}

export default Notices;
