import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import AccountSelector from "./modules/accountSelector/index";
import { setUsers } from "./modules/accountSelector/reducers/usersSlice";
import Conversation from "./modules/conversation";
import { setRooms } from "./modules/conversation/reducers/roomsSlice";
import { useGetRooms, useGetUsers } from "./utils/apis";

function App() {
  const dispatch = useDispatch();

  const { result: users, loaded: usersLoaded } = useGetUsers();
  const { result: rooms, loaded: roomsLoaded } = useGetRooms();

  useEffect(() => {
    if (usersLoaded) dispatch(setUsers(users));
    if (roomsLoaded) dispatch(setRooms(rooms));
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountSelector />} />
        <Route path="/users/:userId/rooms" element={<Conversation />} />
        <Route path="/users/:userId/rooms/:roomId" element={<Conversation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
