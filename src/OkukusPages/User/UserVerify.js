import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./user.css";

function UserVerify() {
  const { updateUserPassword } = useAuthentication();

  let { id } = useParams();

  var formData = new FormData();
  formData.set("url_data", id);
  const resource = useAsync(updateUserPassword, formData);
  console.log(resource);

  return (
    <div className="user_wrapper">
      {resource.loading ? (
        <Spinner />
      ) : (
        <div className="message_wrapper ">
          <Message message={resource.message} classname="message" />
        </div>
      )}
    </div>
  );
}

export default UserVerify;
