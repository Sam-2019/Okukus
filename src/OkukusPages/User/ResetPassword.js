import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Primary from "../Button/Primary";
import "./user.css";

function Login() {
  const { loginUser } = useAuthentication();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const clearLogin = () => {
    setEmail("");
  };

  const send = async (event) => {
    setError();
    event.preventDefault();
    var formData = new FormData();

    formData.set("email", email);

    const data = await loginUser(formData);

    if (data.error === true) {
      setError(data.message);
    } else {
      clearLogin();
    }
  };

  return (
    <div className=" user_wrapper">
      <div className="user_form  ">
        <h2>Account Reset</h2>

        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="true"
        />
      </div>

      <div className="message_wrapper ">
        {error ? <div className=" user_message "> {error}</div> : null}
      </div>

      <div className="button_wrapper ">
        <Primary name="Submit" action={send} />
      </div>
    </div>
  );
}

export default Login;
