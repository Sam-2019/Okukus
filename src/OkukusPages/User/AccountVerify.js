import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import { useHistory } from "react-router-dom";
import { useAsync } from "../helpers";
import NewPassword from "./NewPassword";
import "./user.css";

const AccountVerify = (props) => {
  const { verifyUserAccount, updateUserPassword } = useAuthentication();
  const [showPage, noPage] = useState(true);
  const [email, setEmail] = useState();

  let history = useHistory();
  let { id } = useParams();

  var formData = new FormData();
  formData.set("url_data", id);

  const resource = useAsync(verifyUserAccount, formData);
  console.log(resource);

  const push = () => {
    history.push("/newpassword");
  };

  if (resource.message === "link is valid") {
    setEmail(resource.value.email);

  }

  console.log(email);

  return (
    <div className=" user_wrapper">
      <div className="page_title">Account Verify</div>

      {resource.loading ? (
        <Spinner />
      ) : resource.message ? (
        <Message message={resource.message} classname="message" />
      ) : null}

      <div>{showPage ? <NewPassword /> : null}</div>
    </div>
  );
};

export default AccountVerify;
