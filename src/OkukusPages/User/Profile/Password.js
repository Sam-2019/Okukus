import React, { useState } from "react";
import { useAuthentication } from "../../Auth/Context";
import Primary from "../../Button/Primary";
import Secondary from "../../Button/Secondary";
import "./password.css";

const Password = () => {
  const { uniqueID, updateUserPassword } = useAuthentication();

  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [error, setError] = useState();

  const reset = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const updatePassword = async (event) => {
    setError();
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", uniqueID);
    formData.set("current_password", currentPassword);
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
  
      <div className="password  ">
        <div className="password_detail   ">
          <div className="profile-body ">
            <div className='account_email'>Email@emmail.com</div>
            <input
              className="edit_input "
              placeholder="Current Password"
              value={currentPassword}
              type="password"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />

            <input
              className="edit_input "
              placeholder="New Password"
              value={newPassword}
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <input
              className="edit_input "
              placeholder="Confirm Password"
              value={confirmPassword}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="message_wrapper ">
              {error ? <div className=" user_message "> {error}</div> : null}
            </div>

            <div className="button_wrapper ">
              <Primary name="Update" action={updatePassword} />
              <Secondary name="Reset" action={reset} />
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Password;
