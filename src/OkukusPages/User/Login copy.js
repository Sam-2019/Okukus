import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Primary from "../Button/Primary";
import Secondary from "../Button/Secondary";
import "./user.css";

function Login() {
  const { loginUser, isLoggedIn } = useAuthentication();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const clearLogin = () => {
    setEmail("");
    setPassword("");
  };

  let history = useHistory();

  const logIn = async (event) => {
    setError();
    event.preventDefault();
    var formData = new FormData();

    formData.set("email", email);
    formData.set("password", password);

    const data = await loginUser(formData);

    if (data.error === true) {
      setError(data.message);
    } else {
      localStorage.setItem("loginToken", data.token);
      isLoggedIn();
      clearLogin();
    }
  };

  return (
    <div className=" user_wrapper">
      <div className="user_form  ">
        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="true"
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="true"
        />
      </div>

      <div className="message_wrapper ">
        {error ? (
          <div className=" user_message "> {error}</div>
        ) : (
          <div
            className="text-button"
            onClick={() => {
              history.push("/reset");
            }}
          >
            Password forgotten?
          </div>
        )}
      </div>

      <div className="button_wrapper ">
        <Primary name="Sign in" action={logIn} />

        <Secondary
          name="Sign up"
          action={() => {
            history.push("/signup");
          }}
        />
      </div>
    </div>
  );
}

export default Login;
