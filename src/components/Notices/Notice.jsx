import React from "react";
import ColoredBtn from "../Buttons/ColoredBtn";

import { truncate } from "../../Services/functions";
import { removeNotice } from "../../Services/fireBaseController";

function Notice({ noticeText, noticeId }) {
  const handleRemove = () => {
    removeNotice(noticeId);
  };

  return (
    <div className="notice">
      <p className="notice-text">{truncate(noticeText, 100)}</p>
      <div className="actions">
        <ColoredBtn onClick={handleRemove} text={"Remove"} icon={"delete"} />
      </div>
    </div>
  );
}

export default Notice;
