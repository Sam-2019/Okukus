import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Message from "../Message/Message";
import "./user.css";

function SignUp() {
  const { registerUser, isLoggedIn } = useAuthentication();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password0, setPassword0] = useState("");
  const [password1, setPassword1] = useState("");

  const [message, setMessage] = useState("");

  let history = useHistory();

  const clearSignup = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword0("");
    setPassword1("");
  };

  const signup = async (event) => {
    setMessage();
    event.preventDefault();
    var formData = new FormData();

    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("email", email);
    formData.set("password0", password0);
    formData.set("password1", password1);

    const data = await registerUser(formData);

    if (data.error === true) {
      setMessage(data.message);
    } else {
      localStorage.setItem("loginToken", data.buyer.token);
      isLoggedIn();
      clearSignup();
    }
  };

  return (
    <div className="user_wrapper ">
      <div className="page_title">Sign Up</div>

      <Input
        type="text"
        placeholder="First Name"
        class_name="input"
        action={(e) => setFirstName(e.target.value)}
        content={firstname}
      />

      <Input
        type="text"
        placeholder="Last Name"
        class_name="input"
        action={(e) => setLastName(e.target.value)}
        content={lastname}
      />

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
        action={(e) => setPassword0(e.target.value)}
        content={password0}
      />

      <Input
        type="password"
        placeholder="Confirm Password"
        class_name="input"
        action={(e) => setPassword1(e.target.value)}
        content={password1}
      />

      {message ? <Message class_name="message" message={message} /> : null}

      <div className="button_wrapper ">
        <Button class_name="primary" action={signup} name="Sign up" />

        <Button
          class_name="secondary"
          action={() => {
            history.push("/login");
          }}
          name="Sign in"
        />
      </div>
    </div>
  );
}

export default SignUp;
