import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Input from "../Input/Input";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import Message from "../Message/Message";
import "./user.css";

function Login() {
  const { updateUserPassword } = useAuthentication();

  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [message, setMessage] = useState("");
  const [error, setError] = useState();

  const email = localStorage.getItem("email");

  let history = useHistory();
  
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
    <div className=" user_wrapper">
      <div className="page_title">Reset Password</div>

      {error === true ? (
        <div>
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
        </div>
      ) : null}

      {message ? <Message message={message} class_name="message" /> : null}

      <div className="button_wrapper ">
        {error === true ? (
          <Button name="Submit" action={updatePassword} class_name="primary" />
        ) : (
          <Button
            name="Submit"
            action={() => {
              history.push("/login");
            }}
            class_name="primary"
          />
        )}
      </div>
    </div>
  );
}

export default Login;
