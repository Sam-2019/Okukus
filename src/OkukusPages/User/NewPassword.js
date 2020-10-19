import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Message from "../Message/Message";
import "./user.css";

function Login({email}) {
  const {  updateUserPassword } = useAuthentication();

  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [message, setMessage] = useState();

  console.log(email)

  const reset = () => {
    setNewPassword("");
    setConfirmPassword("");
  };

  const updatePassword = async (event) => {
    setMessage();
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", email);
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
    <div className="r">
      <div className="page_title">Reset Password</div>

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

      <div className="message_wrapper ">
        {message ? <Message message={message} classname="message" /> : null}
      </div>

      <div className="button_wrapper ">
        <Button name="Submit" action={updatePassword} classname="primary" />
      </div>
    </div>
  );
}

export default Login;
