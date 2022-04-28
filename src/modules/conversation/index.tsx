import React from "react";

import "./style.scss";

import { useApi } from "../../utils/useApi";
import { API_HOST } from "../../const";
import { User } from "../../interfaces/user";
import Rooms from "./components/Rooms";
import ConversationBox from "./components/ConversationBox";

const ROOM_API = `${API_HOST}/api/rooms`;

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
