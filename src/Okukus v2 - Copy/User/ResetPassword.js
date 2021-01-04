import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Message from "../Message/Message";
import "./user.css";

function ResetPassword() {
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
      <div className="page_title">Account Reset</div>

      <Input
        type="email"
        placeholder="Email"
        class_name="input"
        action={(e) => setEmail(e.target.value)}
        content={email}
      />

      <div className="message_wrapper ">
        {message ? <Message message={message} class_name="message" /> : null}
      </div>

      <div className="button_wrapper ">
        <Button name="Submit" action={send} class_name="primary" />
      </div>
    </div>
  );
}

export default ResetPassword;
