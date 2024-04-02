import React from "react";
import { truncate } from "../../Services/functions";
function Feedback({ student, title, part, day, desc, rating }) {
  return (
    <div className="feedback">
      <p className="outpass-value">{student}</p>
      <p className="outpass-value">{title}</p>
      <p className="outpass-value">{part}</p>
      <p className="outpass-value">{day}</p>
      <p className="outpass-value">{truncate(desc, 25)}</p>
      <p className="outpass-value">{rating}</p>
    </div>
  );
}

export default Feedback;
