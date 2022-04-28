import React from "react";
import { ClipLoader } from "react-spinners";

import { useApi } from "../../../utils/useApi";
import { API_HOST } from "../../../const";
import { Room } from "../../../interfaces/room";
import RoomComponent from "./RoomComponent";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../accountSelector/reducers/usersSlice";

const ROOM_API = `${API_HOST}/api/rooms`;

const AccountSelector = (props: {}) => {
  const [rooms, loading, loaded] = useApi<Room[]>(ROOM_API, false);
  const dispatch = useDispatch();

  function clearCurrentUser() {
    dispatch(setCurrentUser(null));
  }

  return (
    <div className="Rooms">
      <div className="Row">
        <div className="Col">
          <button onClick={clearCurrentUser}>Back</button>
        </div>
        <div className="Col">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="Row">
        <div className="Col">
          <ClipLoader loading={loading} size={20} />
          {loaded
            ? rooms.map((room) => <RoomComponent room={room} {...props} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default AccountSelector;
