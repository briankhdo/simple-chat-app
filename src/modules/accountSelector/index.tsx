import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

import "./style.scss";
import Header from "./components/Header";
import Account from "./components/Account";

import { useApi } from "../../utils/useApi";
import { API_HOST } from "../../const";

const ACCOUNT_API = `${API_HOST}/api/users`;
interface User {
  id: number;
  name: string;
  email: string;
}

function AccountSelector(props: {
  setAccountId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [result, loading, loaded] = useApi<User[]>(ACCOUNT_API, false);
  return (
    <div className="AccountSelector">
      <Header />
      <ClipLoader loading={loading as boolean} size={20} />
      {loaded
        ? result.map((account) => <Account account={account} {...props} />)
        : null}
    </div>
  );
}

export default AccountSelector;
