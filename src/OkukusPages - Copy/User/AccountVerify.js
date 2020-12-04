import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./user.css";

const AccountVerify = () => {
  const { verifyUserAccount } = useAuthentication();
  let { id } = useParams();

  let history = useHistory();

  var formData = new FormData();
  formData.set("url_data", id);

  const resource = useAsync(verifyUserAccount, formData);

  if (resource.message === "link is valid") {
    localStorage.setItem("email", resource.value.email);
    history.push("/new_password");
  }

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
      ) : (
        <Message message={resource.message} class_name="message" />
      )}
    </div>
  );
};

export default AccountVerify;
