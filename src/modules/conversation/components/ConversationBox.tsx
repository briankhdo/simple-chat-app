import React from "react";
import Messages from "./Messages";
import RoomInformation from "./RoomInformation";

const ConversationBox = () => {
  return (
    <div className="Col">
      <RoomInformation />
      <Messages />
    </div>
  );
};

export default ConversationBox;
