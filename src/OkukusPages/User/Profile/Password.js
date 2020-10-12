import React, { useState } from "react";
import { useAuthentication } from "../../Auth/Context";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Message from "../../Message/Message";
import "./password.css";

const Password = () => {
  const { uniqueID, updateUserPassword, email } = useAuthentication();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  const reset = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setMessage('');
  };

  const updatePassword = async (event) => {

    setMessage();
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", uniqueID);
    formData.set("current_password", currentPassword);
    formData.set("new_password", newPassword);
    formData.set("confirm_password", confirmPassword);

    const data = await updateUserPassword(formData);

    if (data.data.error === true) {
      setMessage(data.data.message);
    } else if (data.data.error === false) {
      setMessage(data.data.message);
      reset();
    }
  };

  return (
    <div className="password  ">
      <div className=" password_detail ">
        <div className="account_email">{email}</div>
        <Input
          classname="edit_input "
          placeholder="Current Password"
          value={currentPassword}
          type="password"
          action={(e) => setCurrentPassword(e.target.value)}
        />

        <Input
          classname="edit_input "
          placeholder="New Password"
          value={newPassword}
          type="password"
          action={(e) => setNewPassword(e.target.value)}
        />

        <Input
          classname="edit_input "
          placeholder="Confirm Password"
          value={confirmPassword}
          type="password"
          action={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="message_wrapper ">
          {message ? <Message classname="message " message={message} /> : null}
        </div>
      </div>
      <div className="button_wrapper ">
        <Button name="Update" action={updatePassword} classname="primary" />
        <Button name="Reset" action={reset} classname="secondary" />
      </div>
    </div>
  );
};

export default Password;
