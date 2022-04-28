import React from "react";
import { useDispatch } from "react-redux";
import avatar from "../../../assets/images/avatar.svg";
import { User } from "../../../interfaces/user";
import { setCurrentUser } from "../reducers/usersSlice";

function Account(props: { user: User }) {
  const { user } = props;
  const dispatch = useDispatch();

  function selectAccount() {
    dispatch(setCurrentUser(user));
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
