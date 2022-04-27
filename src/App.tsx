import "./App.css";
import React, { useState } from "react";

import AccountSelector from "./modules/accountSelector/index";

function App() {
  const [accountId, setAccountId] = useState<number>(0);

  function switchAccount() {
    setAccountId(0);
  }

  return (
    <>
      {accountId === 0 ? (
        <AccountSelector setAccountId={setAccountId} />
      ) : (
        <button onClick={switchAccount}>Switch Account</button>
      )}
    </>
  );
}

export default App;
