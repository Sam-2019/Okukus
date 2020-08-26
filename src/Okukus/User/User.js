import React, { useState } from "react";
import Login from './Login'
import SignUp from './Register'
import "./user.css";

const User = () => {
  const [state, setstate] = useState(true);

  const handler = () => {
    setstate(!state);
  };

  return (
    <div className="user">
      {state ? <Login handler={handler} /> : <SignUp handler={handler} />}
    </div>
  );
};

export default User;
