import React, { useState } from "react";
import { useHistory,useParams } from "react-router-dom";
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
      ) : resource.error === false ? (
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
  const [error, setError] = useState();

  let history = useHistory();

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


    if (data.data.error === true) {
      setMessage(data.data.message);
      setError(data.data.error);
    } else if (data.data.error === false) {
      reset();
      setMessage(data.data.message);
      setError(data.data.error);
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
};
