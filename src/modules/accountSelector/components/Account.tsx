import React from "react";
import { useNavigate } from "react-router-dom";

import avatar from "../../../assets/images/avatar.svg";
import { User } from "../../../interfaces/user";

function Account(props: { user: User }) {
  const { user } = props;
  let navigate = useNavigate();

  function selectAccount() {
    navigate(`/users/${user.id}/rooms`);
  }

  return (
    <div className="Account" onClick={selectAccount}>
      <div className="Row">
        <div className="Col Avatar" style={{ flexGrow: 0, width: 40 }}>
          <img src={avatar} alt="A" />
        </div>
        <div className="Col">
          <div className="Row">
            <div className="Col">
              <strong>{user.name}</strong>
            </div>
          </div>
          <div className="Row">
            <div className="Col">{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
