import React from "react";
import { useSelector } from "react-redux";

import { currentRoomSelector } from "../reducers/roomsSlice";
import avatar from "../../../assets/images/avatar.svg";
import { useNavigate, useParams } from "react-router-dom";

const RoomInformation = () => {
  const currentRoom = useSelector((state) => currentRoomSelector(state));
  const navigate = useNavigate();
  const params = useParams();

  const closeConversation = () => {
    navigate(`/users/${params.userId}/rooms`);
  };

  return (
    <div className="Row Room-Information">
      <div className="Col" style={{ flexGrow: 0, width: 110 }}>
        {currentRoom.user_names.map(() => (
          <img src={avatar} alt="A" />
        ))}
      </div>
      <div className="Col" style={{ flexGrow: 1 }}>
        Conversation between {currentRoom.user_names.join(", ")}
      </div>
      <div className="Col" style={{ flexGrow: 0, width: 50 }}>
        <button onClick={closeConversation}>Close</button>
      </div>
    </div>
  );
};

export default RoomInformation;
