import React from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import avatar from "../../../assets/images/avatar.svg";
import { Message } from "../../../interfaces/message";

const MessageComponent = (props: { data: any; index: number; style: any }) => {
  const { index, data, style } = props;
  const { messages, isItemLoaded, loading } = data;

  const params = useParams();
  const userId = parseInt(params.userId);
  const message = (messages as Message[])[index];

  return isItemLoaded(index) ? (
    <div
      className={`Row Message ${message.user.id === userId ? "Current" : ""}`}
      style={style}
    >
      <div
        className="Col"
        style={{ flexGrow: 0, width: "40px", padding: "0px 5px" }}
      >
        <img src={avatar} alt="A" />
      </div>
      <div className="Col" style={{ flexGrow: 0 }}>
        <strong>{message.user.name}</strong>
        <p>{message.message}</p>
      </div>
    </div>
  ) : (
    <div className="Row" style={style}>
      <ClipLoader loading={loading} size={20} />
    </div>
  );
};

export default MessageComponent;
