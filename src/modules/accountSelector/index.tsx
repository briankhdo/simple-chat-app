import React from "react";

import "./style.scss";
import Header from "./components/Header";
import Account from "./components/Account";

import { usersSelector } from "./reducers/usersSlice";
import { useSelector } from "react-redux";

function AccountSelector(props: {}) {
  const users = useSelector((state) => usersSelector(state));
  return (
    <div className="AccountSelector">
      <Header />
      {users.map((user) => (
        <Account key={`user-${user.id}`} user={user} {...props} />
      ))}
    </div>
  );
}

export default AccountSelector;
