import React from "react";
import { ClipLoader } from "react-spinners";

import "./style.scss";
import Header from "./components/Header";
import Account from "./components/Account";

import { useApi } from "../../utils/useApi";
import { API_HOST } from "../../const";
import { User } from "../../interfaces/user";

const ACCOUNT_API = `${API_HOST}/api/users`;

function AccountSelector(props: {}) {
  const [result, loading, loaded] = useApi<User[]>(ACCOUNT_API, false);

  return (
    <div className="AccountSelector">
      <Header />
      <ClipLoader loading={loading} size={20} />
      {loaded ? result.map((user) => <Account user={user} {...props} />) : null}
    </div>
  );
}

export default AccountSelector;
