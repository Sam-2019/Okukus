import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Message from '../Message/Message'
import "./user.css";

function Login() {
  const { uniqueID, updateUserPassword } = useAuthentication();

  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [message, setMessage] = useState();

  const reset = () => {
    setNewPassword("");
    setConfirmPassword("");
  };

  const updatePassword = async (event) => {
    setMessage();
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", uniqueID);
    formData.set("new_password", newPassword);
    formData.set("confirm_password", confirmPassword);

    const data = await updateUserPassword(formData);

    if (data.data.error === true) {
      setMessage(data.data.message);
    } else if (data.data.error === false) {
      reset();
    }
  };

  return (
    <div className=" user_wrapper">
      <div className="user_form  ">
        <h2>Reset Password</h2>

        <Input
          classname="input "
          placeholder="New Password"
          value={newPassword}
          type="password"
          action={(e) => setNewPassword(e.target.value)}
        />

        <Input
          classname="input "
          placeholder="Confirm Password"
          value={confirmPassword}
          type="password"
          action={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="message_wrapper ">
        {message ? <Message message={message} classname="message" /> : null}
      </div>

      <div className="message_wrapper ">
        {message ? <div className=" user_message "> {message}</div> : null}
      </div>

      <div className="button_wrapper ">
        <Button name="Submit" action={updatePassword} classname="primary" />
      </div>
    </div>
  );
}

export default Login;