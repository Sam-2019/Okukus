import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Message from "../Message/Message";
import "./user.css";

function Login() {
  const { uniqueID, updateUserPassword } = useAuthentication();

  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [message, setMessage] = useState("");

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
      <div className="page_title">Reset Password</div>

      <Input
        class_name="input "
        placeholder="New Password"
        content={newPassword}
        type="password"
        action={(e) => setNewPassword(e.target.value)}
      />

      <Input
        class_name="input "
        placeholder="Confirm Password"
        content={confirmPassword}
        type="password"
        action={(e) => setConfirmPassword(e.target.value)}
      />

      {message ? <Message message={message} class_name="message" /> : null}

      <div className="button_wrapper ">
        <Button name="Submit" action={updatePassword} class_name="primary" />
      </div>
    </div>
  );
}

export default Login;
