import React, { useState,useEffect } from "react";
import {
  useParams
} from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import { useHistory } from "react-router-dom";
import { useAsync } from "../helpers";
import "./user.css";

const AccountVerify = (props) => {
  const { verifyUserAccount } = useAuthentication();
  const [newPassword, setNewPassword] = useState(false)

  let history = useHistory();
  let { id } = useParams();


  var formData = new FormData();
  formData.set("url_data", id);

  const resource = useAsync(verifyUserAccount, formData);
  console.log(resource);

  const push = () => {
    history.push("/newpassword");
  };

    useEffect(() => {
      if (resource.message === "link is valid") {
        history.push("/newpassword");
        console.log('hi')
      } 
    }, []);

  return (
    <div className=" user_wrapper">
 
        <div className='page_title'>Account Verify</div>


      {resource.loading ? (
        <Spinner />
      ) : resource.message ? (
        <Message message={resource.message} classname="message" />
      ) : null}
    </div>
  );
};

export default AccountVerify;
