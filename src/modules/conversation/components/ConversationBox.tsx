import React from "react";
import ComposeMessage from "./ComposeMessage";
import Messages from "./Messages";
import RoomInformation from "./RoomInformation";

const ConversationBox = () => {
  return (
    <div className="Col">
      <RoomInformation />
      <Messages />
      <ComposeMessage />
    </div>
  );
};

export default ConversationBox;
