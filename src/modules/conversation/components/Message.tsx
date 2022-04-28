import React from "react";
import avatar from "../../../assets/images/avatar.svg";

const Message = () => {
  return (
    <div className="Row">
      <div className="Col">
        <img src={avatar} alt="A" />
      </div>
      <div className="Col">Hello</div>
    </div>
  );
};

export default Message;
