import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Primary from "../Button/Primary";
import "./user.css";

function Login() {
  const { uniqueID, updateUserPassword, } = useAuthentication();

  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [error, setError] = useState();

  const reset = () => {
    setNewPassword("");
    setConfirmPassword("");
  };

  const updatePassword = async (event) => {
    setError();
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", uniqueID);
    formData.set("new_password", newPassword);
    formData.set("confirm_password", confirmPassword);

    const data = await updateUserPassword(formData);

    if (data.data.error === true) {
      setError(data.data.message);
    } else if (data.data.error === false) {
      reset();
    }
  };

  return (
    <div className=" user_wrapper">
      <div className="user_form  ">
        <h2>Reset Password</h2>


        <input
          className="input "
          placeholder="New Password"
          value={newPassword}
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <input
          className="input "
          placeholder="Confirm Password"
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="message_wrapper ">
        {error ? <div className=" user_message "> {error}</div> : null}
      </div>

      <div className="button_wrapper ">
        <Primary name="Submit" action={updatePassword} />
      </div>
    </div>
  );
}

export default Login;
