import React from "react";

import "./style.scss";

import Rooms from "./components/Rooms";
import ConversationBox from "./components/ConversationBox";

const Conversation = (props: {}) => {
  return (
    <div className="Row">
      <div className="Col">
        <Rooms />
      </div>
      <div className="Col">
        <ConversationBox />
      </div>
    </div>
  );
};

export default Conversation;
