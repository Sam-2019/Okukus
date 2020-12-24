import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Input from "../Input/Input";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import Message from "../Message/Message";
import "./user.css";

function NewPassword() {
  const { updateUserPassword } = useAuthentication();
  const [loading, setLoading] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const email = localStorage.getItem("email");

  let history = useHistory();

  const updatePassword = async (event) => {
    setMessage("");
    event.preventDefault();
    var formData = new FormData();

    let empty = newPassword && confirmPassword;

    if (empty !== "") {
      setLoading(true);
      formData.set("buyer_unique_id", email);
      formData.set("new_password", newPassword);
      formData.set("confirm_password", confirmPassword);

      const data = await updateUserPassword(formData);
      console.log(data);

      if (data.error === true) {
        setMessage(data.message);
        setError(data.error);
        setLoading(false);
      } else if (data.error === false) {
        setNewPassword("");
        setConfirmPassword("");
        localStorage.removeItem("email");
        setLoading(false);
      }
    } else if (empty === "") {
      setMessage("Please fill the form");
    } else return;
  };

  return (
    <div className=" user_wrapper">
      <div className="page_title">Reset Password</div>

      <form className="wrapper-test " onSubmit={updatePassword}>
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

        <div className="message_wrapper ">
          {message ? <Message message={message} class_name="message" /> : null}
        </div>

        <div className="button_wrapper ">
          {error ? (
            <Button
              name="Login"
              action={() => {
                history.push("/login");
              }}
              class_name="primary"
            />
          ) : (
            <Button
              name="Submit"
              // action={updatePassword}
              class_name="primary"
              loading={loading}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default NewPassword;
