import React from "react";
import TransparentBtn from "../Buttons/TransparentBtn";
import ColoredBtn from "../Buttons/ColoredBtn";
import { truncate } from "../../Services/functions";
import { markActive, markSolved } from "../../Services/fireBaseController";

function Complaint({ category, status, student, description, complaintId }) {
  const handleSolve = () => {
    markSolved(complaintId);
  };
  const handleActive = () => {
    markActive(complaintId);
  };
  return (
    <div className="complaint">
      <p className="complaint-value">{category}</p>
      <p className={`complaint-value status ${status ? "green" : "red"}`}>
        {status ? "Solved" : "Active"}
      </p>
      <p className="complaint-value">{student}</p>
      <p className="complaint-value">{truncate(description, 20)}</p>
      <div className="actions">
        <ColoredBtn onClick={handleSolve} text={"Solved"} icon={"done"} />
        <TransparentBtn onClick={handleActive} text={"Active"} icon={"reply"} />
      </div>
    </div>
  );
}

export default Complaint;
