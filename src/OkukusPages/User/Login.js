import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Message from "../Message/Message";
import "./user.css";

function Login() {
  const { loginUser, isLoggedIn } = useAuthentication();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const clearLogin = () => {
    setEmail("");
    setPassword("");
  };

  let history = useHistory();

  const logIn = async (event) => {
    setMessage("");
    event.preventDefault();
    var formData = new FormData();

    let empty = email && password;
    if (empty !== "") {
      setLoading(true);
      formData.set("email", email);
      formData.set("password", password);

      const data = await loginUser(formData);

      if (data.error === true) {
        setMessage(data.message);
        setLoading(false);
      } else if (data.error === false && data.token) {
        localStorage.setItem("loginToken", data.token);
        await isLoggedIn();
        clearLogin();
        setLoading(false);
      } else return;
    } else if (empty === "") {
      setMessage("Please fill the form");
    } else return;
  };

  return (
    <div className=" user_wrapper ">
      <div className="page_title">Sign In</div>

      <form className="wrapper-test " onSubmit={logIn}>
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
                history.push("/account/reset");
              }}
            >
              Forgotten password?
            </span>
          </div>
        )}

        <div className="button_wrapper ">
          <Button
            class_name="primary"
            // action={logIn}
            loading={loading}
            name="Sign in"
          />

          <Button
            class_name="secondary"
            action={() => {
              history.push("/signup");
            }}
            name="Sign up"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
