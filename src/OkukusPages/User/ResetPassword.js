import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Message from "../Message/Message";
import "./user.css";

function Login() {
  const { resetUserAccount } = useAuthentication();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const reset = () => {
    setEmail("");
  };

  const send = async (event) => {
    setMessage();
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_email", email);

    const data = await resetUserAccount(formData);

    if (data.data.error === true) {
      setMessage(data.data.message);
    } else if (data.data.error === false) {
      setMessage(data.data.message);
      reset();
    }
  };

  return (
    <div className=" user_wrapper">
      <div className="user_form  ">
        <h2>Account Reset</h2>

        <Input
          type="email"
          placeholder="Email"
          classname="input"
          action={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="message_wrapper ">
        {message ? <Message message={message} classname="message" /> : null}
      </div>

      <div className="message_wrapper ">
        {message ? <div className=" message "> {message}</div> : null}
      </div>

      <div className="button_wrapper ">
        <Button name="Submit" action={send} classname="primary" />
      </div>
    </div>
  );
}

export default Login;
