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

  let content;

  if (resource.value) {
    content = (
      <div>
        Hello
      </div>
     ) 
  } else {
    content = (
      <div>
        Hi
      </div>
     ) 
  }

  return (
    <div className=" user_wrapper">
 
        <div className='page_title'>Account Verify</div>


      {resource.loading ? (
        <Spinner />
      ) : <div>{content}</div>}
    </div>
  );
};

export default AccountVerify;
