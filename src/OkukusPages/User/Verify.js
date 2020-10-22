import React from "react";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./user.css";

const AccountVerify = (props) => {
  const { verifyUserAccount } = useAuthentication();

  let id = props.match.params.id;
  console.log(id);

  var formData = new FormData();
  formData.set("url_data", id);

  const resource = useAsync(verifyUserAccount, formData);
  console.log(resource);

  return (
    <div className=" user_wrapper">
      <div className="user_form  ">
        <h2>Account Verify</h2>
      </div>

      {resource.loading ? (
        <div className="spinner_wrapper">
          <Spinner />
        </div>
      ) : resource.message ? (
        <Message message={resource.message} class_name="message" />
      ) : null}
    </div>
  );
};

export default AccountVerify;
