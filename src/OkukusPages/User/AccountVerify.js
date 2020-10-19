import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./user.css";

const AccountVerify = (props) => {
  const { verifyUserAccount } = useAuthentication();
  const [email, setEmail] = useState();

  let { id } = useParams();

  var formData = new FormData();
  formData.set("url_data", id);

  const resource = useAsync(verifyUserAccount, formData);
  console.log(resource);
  setEmail(resource.value.email)

  // if (resource.message === "link is valid") {
  //   dontShow(true);
  // }

  return (
    <div className=" user_wrapper">
      <div className="page_title">Account Verify</div>

      {resource.loading ? (
        <Spinner />
      ) : resource.message === "link is valid" ? (
        <NewPassword email={email} />
      ) : (
        <Message message={resource.message} classname="message" />
      )}
    </div>
  );
};

export default AccountVerify;

const NewPassword = ({ email }) => {
   const { updateUserPassword } = useAuthentication();

   const [newPassword, setNewPassword] = useState();
   const [confirmPassword, setConfirmPassword] = useState();

   const [message, setMessage] = useState();

   console.log(email);

   const reset = () => {
     setNewPassword("");
     setConfirmPassword("");
   };

   const updatePassword = async (event) => {
     setMessage();
     event.preventDefault();
     var formData = new FormData();

     formData.set("buyer_unique_id", email);
     formData.set("new_password", newPassword);
     formData.set("confirm_password", confirmPassword);

     const data = await updateUserPassword(formData);

     if (data.data.error === true) {
       setMessage(data.data.message);
     } else if (data.data.error === false) {
       reset();
     }
   };
   return (
     <div>
       <div className="page_title">Reset Password</div>

       <Input
         classname="input "
         placeholder="New Password"
         value={newPassword}
         type="password"
         action={(e) => setNewPassword(e.target.value)}
       />

       <Input
         classname="input "
         placeholder="Confirm Password"
         value={confirmPassword}
         type="password"
         action={(e) => setConfirmPassword(e.target.value)}
       />

       <div className="message_wrapper ">
         {message ? <Message message={message} classname="message" /> : null}
       </div>

       <div className="button_wrapper ">
         <Button name="Submit" action={updatePassword} classname="primary" />
       </div>
     </div>
   );
 };