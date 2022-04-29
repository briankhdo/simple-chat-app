import React, { useEffect } from "react";

import "./style.scss";

import Rooms from "./components/Rooms";
import ConversationBox from "./components/ConversationBox";
import { useDispatch, useSelector } from "react-redux";
import { roomsSelector, setCurrentRoom } from "./reducers/roomsSlice";
import { useParams } from "react-router-dom";

const Conversation = (props: {}) => {
  const rooms = useSelector((state) => roomsSelector(state));
  const params = useParams();
  const currentRoom = rooms.find((room) => room.id === parseInt(params.roomId));
  const dispatch = useDispatch();
  dispatch(setCurrentRoom(currentRoom));

  return (
    <div className="Row Max-Height">
      <div className="Col mr-2" style={{ flexGrow: 1 }}>
        <Rooms />
      </div>
      <div className="Col" style={{ flexGrow: 4 }}>
        {currentRoom ? <ConversationBox /> : <span>Please select a room</span>}
      </div>
    </div>
  );
};

export default Conversation;
