import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Message from "../Message/Message";
import "./user.css";

function Login() {
  const { loginUser, isLoggedIn } = useAuthentication();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const clearLogin = () => {
    setEmail("");
    setPassword("");
  };

  let history = useHistory();

  const logIn = async (event) => {
    setMessage();
    event.preventDefault();
    var formData = new FormData();

    formData.set("email", email);
    formData.set("password", password);

    const data = await loginUser(formData);

    if (data.error === true) {
      setMessage(data.message);
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

        <Input
          type="email"
          placeholder="Email"
          classname="input"
          action={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          type="password"
          placeholder="Password"
          classname="input"
          action={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      {message ? (
        <div className="message_wrapper ">
          <Message classname="message" message={message} />
        </div>
      ) : (
        <div className="forgotten_password_wrapper">
          <span
            className="forgotten_password "
            onClick={() => {
              history.push("/reset");
            }}
          >
            Password forgotten?
          </span>
        </div>
      )}

      <div className="button_wrapper ">
        <Button classname="primary" action={logIn} name="Sign in" />

        <Button
          classname="secondary"
          action={() => {
            history.push("/signup");
          }}
          name="Sign up"
        />
      </div>
    </div>
  );
}

export default Login;
