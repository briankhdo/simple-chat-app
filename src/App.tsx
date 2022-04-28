import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

import AccountSelector from "./modules/accountSelector/index";
import { currentUserSelector } from "./modules/accountSelector/reducers/usersSlice";
import Conversation from "./modules/conversation";

function App() {
  const currentUser = useSelector((state) => currentUserSelector(state));
  return <>{!currentUser ? <AccountSelector /> : <Conversation />}</>;
}

export default App;
