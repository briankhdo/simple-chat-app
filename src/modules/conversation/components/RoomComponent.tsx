import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import avatar from "../../../assets/images/avatar.svg";
import { Room } from "../../../interfaces/room";
import { usersSelector } from "../../accountSelector/reducers/usersSlice";
import { roomsSelector } from "../reducers/roomsSlice";

const RoomComponent = (props: { room: Room }) => {
  const { room } = props;
  const navigate = useNavigate();
  const params = useParams();

  const rooms = useSelector((state) => roomsSelector(state));
  const currentRoom = rooms.find((room) => room.id === parseInt(params.roomId));
  const users = useSelector((state) => usersSelector(state));
  const currentUser = users.find((user) => user.id === parseInt(params.userId));

  function selectRoom() {
    navigate(`/users/${currentUser.id}/rooms/${room.id}`);
  }

  return (
    <div
      className={`Room Row ${currentRoom?.id === room.id ? "Selected" : ""}`}
      onClick={selectRoom}
    >
      <div className="Col Avatar" style={{ flexGrow: 0, width: 40 }}>
        <img src={avatar} alt="A" />
      </div>
      <div className="Col">
        <div className="Row">
          <div className="Col">
            <strong>{room.name}</strong>
            <small>{room.last_message}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomComponent;
