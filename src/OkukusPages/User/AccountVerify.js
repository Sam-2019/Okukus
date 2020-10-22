import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./user.css";

const AccountVerify = () => {
  const { verifyUserAccount } = useAuthentication();
  let { id } = useParams();

  var formData = new FormData();
  formData.set("url_data", id);

  const resource = useAsync(verifyUserAccount, formData);
  console.log(resource.value);

  // if (resource.message === "link is valid") {
  //   dontShow(true);
  // }

  return (
    <div className=" user_wrapper">
      <div className="page_title">
        {resource.message === "link is valid" ? (
          <> Reset Password</>
        ) : (
          <>Account Verify</>
        )}
      </div>

      {resource.loading ? (
        <Spinner />
      ) : resource.message === "link is valid" ? (
        <NewPassword email={resource.value.email} />
      ) : (
        <Message message={resource.message} class_name="message" />
      )}
    </div>
  );
};

export default AccountVerify;

const NewPassword = ({ email }) => {
  const { userPasswordReset } = useAuthentication();

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

    formData.set("buyer_email", email);
    formData.set("new_password", newPassword);
    formData.set("confirm_password", confirmPassword);

    const data = await userPasswordReset(formData);
    console.log(data);

    if (data.data.error === true) {
      setMessage(data.data.message);
    } else if (data.data.error === false) {
      reset();
    }
  };
  return (
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

      {message ? <Message message={message} class_name="message" /> : null}

      <div className="button_wrapper ">
        <Button name="Submit" action={updatePassword} class_name="primary" />
      </div>
    </div>
  );
};
