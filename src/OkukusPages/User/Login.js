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
    <div className=" user_wrapper ">
      <div className="page_title">Sign In</div>

      <Input
        type="email"
        placeholder="Email"
        class_name="input"
        action={(e) => setEmail(e.target.value)}
        content={email}
      />

      <Input
        type="password"
        placeholder="Password"
        class_name="input"
        action={(e) => setPassword(e.target.value)}
        content={password}
      />

      {message ? (
        <Message class_name="message" message={message} />
      ) : (
        <div className="forgotten_password_wrapper ">
          <span
            className="forgotten_password  "
            onClick={() => {
              history.push("/reset");
            }}
          >
            Password forgotten?
          </span>
        </div>
      )}

      <div className="button_wrapper ">
        <Button class_name="primary" action={logIn} name="Sign in" />

        <Button
          class_name="secondary"
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
