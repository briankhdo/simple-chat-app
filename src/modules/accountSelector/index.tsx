import React from "react";
import { ClipLoader } from "react-spinners";

import "./style.scss";
import Header from "./components/Header";
import Account from "./components/Account";

import { useGetUsers } from "../../utils/apis";

function AccountSelector(props: {}) {
  const { result: users, loading, loaded } = useGetUsers();
  return (
    <div className="AccountSelector">
      <Header />
      <ClipLoader loading={loading} size={20} />
      {loaded ? users.map((user) => <Account user={user} {...props} />) : null}
    </div>
  );
}

export default AccountSelector;
