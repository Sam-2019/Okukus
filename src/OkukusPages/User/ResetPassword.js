import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Message from "../Message/Message";
import "./user.css";

function ResetPassword() {
  const { resetUserAccount } = useAuthentication();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const reset = () => {
    setEmail("");
  };

  const send = async (event) => {
    setMessage("");
    event.preventDefault();
    var formData = new FormData();

    if (email !== "") {
      setLoading(true);
      formData.set("buyer_email", email);

      const data = await resetUserAccount(formData);
      console.log(data);

      if (data.error === true) {
        setMessage(data.message);
        setLoading(false);
      } else if (data.error === false) {
        setMessage(data.message);
        setLoading(false);
        reset();
      } else return;
    } else if (email === "") {
      setMessage("Please enter your email");
    } else return;
  };

  return (
    <div className=" user_wrapper">
      <div className="page_title">Account Reset</div>

      <div className="wrapper-test">
        <Input
          type="email"
          placeholder="Email"
          class_name="input"
          action={(e) => setEmail(e.target.value)}
          content={email}
        />

        {message ? <Message message={message} class_name="message" /> : null}

        <div className="button_wrapper ">
          <Button
            name="Submit"
            action={send}
            class_name="primary"
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
