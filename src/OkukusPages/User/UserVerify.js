import React, { useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import { useAsync } from "../helpers";
import "./user.css";

function UserVerify() {
  const { verifyReadEmail } = useAuthentication();
  const [message, setMessage] = useState("");
  let { id } = useParams();
  let history = useHistory();

  let token = new URLSearchParams(useLocation().search).get("token");
  let email = new URLSearchParams(useLocation().search).get("email");

  var formData = new FormData();
  formData.set("url_data", token);
  formData.set("url_data", email);
  // formData.set("url_data", id);

  const resource = useAsync(verifyReadEmail, formData);

  if (resource.error === true) {
    setMessage(resource.message);
  } else if (resource.error === false) {
    setMessage(resource.message);
  } else return;

  return (
    <div className="user_wrapper">
      {resource.loading ? (
        <Spinner size="big" />
      ) : (
        <>
          <Message message={message} class_name="message" />

          {resource.error === true ? null : (
            <div className="button_wrapper ">
              <Button
                name="Go Shopping"
                action={() => {
                  history.push("/");
                }}
                class_name="primary"
              />
            </div>
          )}
        </>

        // <>
        //   {resource.error === true ? (
        //     <>
        //       <Message message={resource.message} class_name="message" />
        //     </>
        //   ) : resource.error === false ? (
        //     <>
        //       <Message message={resource.message} class_name="message" />

        //       <div className="button_wrapper ">
        //         <Button
        //           name="Go Shopping"
        //           action={() => {
        //             history.push("/");
        //           }}
        //           class_name="primary"
        //         />
        //       </div>
        //     </>
        //   ) : null}
        // </>
      )}
    </div>
  );
}

export default UserVerify;
