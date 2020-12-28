import React, { useState } from "react";
import { useAuthentication } from "../../Auth/Context";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Message from "../../Message/Message";
import "./password.css";

const Password = () => {
  const { uniqueID, updateUserPassword, email } = useAuthentication();

  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  const reset = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const updatePassword = async (event) => {
    setMessage();
    event.preventDefault();
    var formData = new FormData();

    let empty = currentPassword && newPassword && confirmPassword;
    if (empty !== "") {
      setLoading(true);
      formData.set("buyer_unique_id", uniqueID);
      formData.set("current_password", currentPassword);
      formData.set("new_password", newPassword);
      formData.set("confirm_password", confirmPassword);

      const data = await updateUserPassword(formData);


      if (data.error === true) {
        reset();
        setMessage(data.message);
        setLoading(false);
      } else if (data.error === false) {
        reset();
        setMessage(data.message);
        setLoading(false);
      } else return;
    } else if (empty === "") {
      setMessage("Please fill the form");
    } else return;
  };

  return (
    <div className="password item ">
      <div className="account_email">{email}</div>
      <Input
        class_name="edit_input "
        placeholder="Current Password"
        content={currentPassword}
        type="password"
        action={(e) => setCurrentPassword(e.target.value)}
      />

      <Input
        class_name="edit_input "
        placeholder="New Password"
        content={newPassword}
        type="password"
        action={(e) => setNewPassword(e.target.value)}
      />

      <Input
        class_name="edit_input "
        placeholder="Confirm Password"
        content={confirmPassword}
        type="password"
        action={(e) => setConfirmPassword(e.target.value)}
      />

      {message ? <Message message={message} class_name="message" /> : null}

      <div className="button_wrapper ">
        <Button
          name="Update"
          action={updatePassword}
          class_name="primary"
          loading={loading}
        />
        <Button name="Reset" action={reset} class_name="secondary" />
      </div>
    </div>
  );
};

export default Password;
