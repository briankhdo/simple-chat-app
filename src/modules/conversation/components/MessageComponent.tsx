import React from "react";
import { useParams } from "react-router-dom";
import avatar from "../../../assets/images/avatar.svg";
import { Message } from "../../../interfaces/message";

const MessageComponent = (props: { message: Message }) => {
  const { message } = props;
  const params = useParams();
  const userId = parseInt(params.userId);

  return (
    <div
      className={`Row Message ${message.user.id === userId ? "Current" : ""}`}
    >
      <div
        className="Col"
        style={{ flexGrow: 0, width: "40px", padding: "0px 5px;" }}
      >
        <img src={avatar} alt="A" />
      </div>
      <div className="Col" style={{ flexGrow: 0 }}>
        <strong>{message.user.name}</strong>
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default MessageComponent;
