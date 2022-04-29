import React from "react";
import { useNavigate } from "react-router-dom";

import RoomComponent from "./RoomComponent";
import { useSelector } from "react-redux";
import { roomsSelector } from "../reducers/roomsSlice";

const AccountSelector = (props: {}) => {
  const rooms = useSelector((state) => roomsSelector(state));

  const navigate = useNavigate();

  function clearCurrentUser() {
    navigate(`/`);
  }

  return (
    <div className="Rooms Col" style={{ flexGrow: 1 }}>
      <div className="Row mb-1">
        <div className="Col">
          <button onClick={clearCurrentUser}>Back</button>
        </div>
        <div className="Col">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="Row" style={{ flexGrow: 1 }}>
        <div className="Col">
          {rooms.map((room) => (
            <RoomComponent room={room} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSelector;
