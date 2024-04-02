import React, { useState } from "react";
import ColoredBtn from "../Buttons/ColoredBtn";
import TransparentBtn from "../Buttons/TransparentBtn";
import { addNotice } from "../../Services/fireBaseController";

function NoticeInput() {
  const [noticeText, setNoticetext] = useState("");
  const handleAdd = () => {
    addNotice({ noticeText });
  };

  return (
    <div id="notice-input-area">
      <div className="top">
        <h1>Add New Notice</h1>
      </div>
      <div className="input-area">
        <textarea
          placeholder="Type your notice here"
          name="notice"
          id="notice-input"
          cols="100"
          rows="10"
          onChange={(e) => {
            setNoticetext(e.target.value);
          }}
          value={noticeText}
        ></textarea>
      </div>
      <div className="actions">
        <TransparentBtn
          onClick={() => {
            setNoticetext("");
          }}
          text={"Clear"}
          icon={"undo"}
        />
        <ColoredBtn onClick={handleAdd} text={"Save"} icon={"save"} />
      </div>
    </div>
  );
}

export default NoticeInput;
