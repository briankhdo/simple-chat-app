import React from "react";
import { useDispatch } from "react-redux";
import avatar from "../../../assets/images/avatar.svg";
import { Room } from "../../../interfaces/room";
import { setCurrentRoom } from "../reducers/roomsSlice";

const RoomComponent = (props: { room: Room }) => {
  const { room } = props;
  const dispatch = useDispatch();

  function selectRoom() {
    dispatch(setCurrentRoom(room));
  }

  return (
    <div className="Room Row" onClick={selectRoom}>
      <div className="Col Avatar">
        <img src={avatar} alt="A" />
      </div>
      <div className="Col">
        <div className="Row">
          <div className="Col">
            <strong>{room.name}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomComponent;
