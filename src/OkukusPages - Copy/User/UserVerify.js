import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import { useAsync } from "../helpers";
import "./user.css";

function UserVerify() {
  const { verifyReadEmail } = useAuthentication();
  let history = useHistory();
  let { id } = useParams();

  var formData = new FormData();
  formData.set("url_data", id);
  const resource = useAsync(verifyReadEmail, formData);

  return (
    <div className="user_wrapper">
      {resource.loading ? (
        <Spinner />
      ) : (
        <>
          <Message message={resource.message} class_name="message" />

          {resource.error === true ? null : (
            <div className="button_wrapper ">
              <Button
                name="    Go Shopping"
                action={() => {
                  history.push("/");
                }}
                class_name="primary"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default UserVerify;
