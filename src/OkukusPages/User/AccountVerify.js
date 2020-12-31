import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./user.css";

const AccountVerify = () => {
  const { verifyUserAccount } = useAuthentication();
  const [message, setMessage] = useState("");

  let history = useHistory();

  let token = new URLSearchParams(useLocation().search).get("token");
  let email = new URLSearchParams(useLocation().search).get("email");

  var formData = new FormData();
  formData.set("url_data", token);
  formData.set("url_data", email);

  const resource = useAsync(verifyUserAccount, formData);

  if (resource.error === true) {
    setMessage(resource.message);
  } else if (resource.error === false) {
    let response = "link is valid";
    if (resource.message === response && resource.value.email ) {
      localStorage.setItem("email", resource.value.email);
      history.push("/account/reset/pwd");
    } else return;
  } else return;

  // if (resource.message === "link is valid") {
  //   localStorage.setItem("email", resource.value.email);
  //   history.push("/account/reset/pwd");
  // } else if (resource.message === "") {
  //   return;
  // }

  return (
    <div className=" user_wrapper">
      {/* <div className="page_title">
        {resource.message === "link is valid" ? (
          <> Reset Password</>
        ) : (
          <>Account Verify</>
        )}
      </div> */}

      <div className="page_title">Account Verify</div>

      <div className="wrapper-test">
        {resource.loading ? (
          <Spinner size="big" />
        ) : (
          <Message message={message} class_name="message" />
        )}
      </div>
    </div>
  );
};

export default AccountVerify;

// const NewPassword = ({ email }) => {

//   const { userPasswordReset } = useAuthentication();

//   const [newPassword, setNewPassword] = useState();
//   const [confirmPassword, setConfirmPassword] = useState();

//   const [message, setMessage] = useState();

//   const reset = () => {
//     setNewPassword("");
//     setConfirmPassword("");
//   };

//   const updatePassword = async (event) => {
//     setMessage();
//     event.preventDefault();
//     var formData = new FormData();

//     formData.set("buyer_email", email);
//     formData.set("new_password", newPassword);
//     formData.set("confirm_password", confirmPassword);

//     const data = await userPasswordReset(formData);
//     console.log(data);

//     if (data.data.error === true) {
//       setMessage(data.data.message);
//     } else if (data.data.error === false) {
//       reset();
//       setMessage(data.data.message);

//     }
//   };
//   return (
//     <div>
//       <Input
//         class_name="input "
//         placeholder="New Password"
//         content={newPassword}
//         type="password"
//         action={(e) => setNewPassword(e.target.value)}
//       />

//       <Input
//         class_name="input "
//         placeholder="Confirm Password"
//         content={confirmPassword}
//         type="password"
//         action={(e) => setConfirmPassword(e.target.value)}
//       />

//       {message ? <Message message={message} class_name="message" /> : null}

//       <div className="button_wrapper ">
//         <Button name="Submit" action={updatePassword} class_name="primary" />
//       </div>
//     </div>
//   );
// };
