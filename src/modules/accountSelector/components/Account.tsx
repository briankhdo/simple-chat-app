import React, { useState } from "react";
import avatar from "../../../assets/images/avatar.svg";

interface User {
  id: number;
  name: string;
  email: string;
}

function Account(props: {
  account: User;
  setAccountId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { account, setAccountId } = props;

  function selectAccount() {
    setAccountId(account.id);
  }

  return (
    <div className="Account" onClick={selectAccount}>
      <div className="Row">
        <div className="Col Avatar">
          <img src={avatar} alt="A" />
        </div>
        <div className="Col">
          <div className="Row">
            <div className="Col">
              <strong>{account.name}</strong>
            </div>
          </div>
          <div className="Row">
            <div className="Col">{account.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
