import React, { useState } from "react";
import Addressedit from "./Edit/Address_Edit";
import { useAuthentication } from "../../Auth/Context";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Message from "../../Message/Message";
import "./account.css";

const OkukusAccount = () => {
  const {
    firstName,
    lastName,
    email,
    uniqueID,
    updateUserProfile,
    updateUserEmail,
    verifyCreateEmail,
    verfifcationStatus,
  } = useAuthentication();
  const [detailedit, setdetailedit] = useState(false);
  const [emailedit, setemailedit] = useState(false);
  const [addressedit, setaddressedit] = useState(false);

  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [e_mail, setEmail] = useState();

  const [message, setMessage] = useState();
  const [verifyMessage, setVerifyMessage] = useState();

  const submitDetail = () => {
    setdetailedit(false);
    setFirstName("");
    setLastName("");
  };

  const submitEmail = () => {
    setemailedit(false);
    setEmail("");
  };

  const submitAddress = () => {
    setaddressedit(false);
  };

  const cancelDetail = () => {
    setdetailedit(false);
    setFirstName("");
    setLastName("");
    setMessage("");
  };

  const cancelEmail = () => {
    setemailedit(false);
    setEmail("");
    setMessage("");
  };

  const cancelAddress = () => {
    setaddressedit(false);
  };

  const updateDetail = async (event) => {
    setMessage("");
    event.preventDefault();

    let empty = firstName && lastName;
    if (empty !== "") {
      setMessage("please complete the forms");
    } else {
      var formData = new FormData();

      formData.set("buyer_unique_id", uniqueID);
      formData.set("firstname", first_name);
      formData.set("lastname", last_name);

      const data = await updateUserProfile(formData);
      if (data.data.error === true) {
        setMessage(data.data.message);
      } else if (data.data.error === false) {
        submitDetail();
        setMessage("");
      }
    }
  };

  const updateEmail = async (event) => {
    event.preventDefault();

    setMessage("");
    let empty = e_mail;
    if (empty !== "") {
      setMessage("please complete the form");
    } else {
      var formData = new FormData();

      formData.set("buyer_unique_id", uniqueID);
      formData.set("email", e_mail);

      const data = await updateUserEmail(formData);
      if (data.data.error === true) {
        setMessage(data.data.message);
      } else if (data.data.error === false) {
        submitEmail();
      }
    }
  };

  const verifyAccount = async (event) => {
    event.preventDefault();

    setVerifyMessage("");

    var formData = new FormData();

    formData.set("buyer_email", email);

    const data = await verifyCreateEmail(formData);
    if (data.data.error === true) {
      setVerifyMessage(data.data.message);
    } else if (data.data.error === false) {
      setVerifyMessage(data.data.message);
    }
  };

  return (
    <div className="account  ">
      <div className="account_detail ">
        <div className="profile-header ">
          <div> Details</div>
        </div>

        <div className="profile-body ">
          <div className="item-change extra_margin   ">
            {detailedit ? (
              <div className="itemme ">
                <Input
                  type="text"
                  class_name="hi_hi"
                  placeholder="First Name"
                  content={first_name}
                  action={(e) => setFirstName(e.target.value)}
                />

                <Input
                  type="text"
                  class_name="hi_hi"
                  placeholder="Last Name"
                  content={last_name}
                  action={(e) => setLastName(e.target.value)}
                />

                {message ? (
                  <Message class_name="message " message={message} />
                ) : null}

                <div className="button_wrapper ">
                  <Button
                    name="Update"
                    action={updateDetail}
                    class_name="primary"
                  />
                  <Button
                    name="Cancel"
                    action={cancelDetail}
                    class_name="secondary"
                  />
                </div>
              </div>
            ) : (
              <div className="static">
                {firstName} {lastName}
              </div>
            )}

            {detailedit ? null : (
              <div class_name="baseline">
                <svg
                  onClick={() => {
                    setdetailedit(true);
                    setemailedit(false);
                    setaddressedit(false);
                  }}
                  viewBox="0 0 16 16"
                  className="bi bi-pencil-square"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="item-change ">
            {emailedit ? (
              <div className="itemme ">
                <Input
                  class_name="hi_hi"
                  placeholder="Email"
                  content={e_mail}
                  action={(e) => setEmail(e.target.value)}
                />

                {message ? (
                  <Message class_name="message " message={message} />
                ) : null}

                <div className="button_wrapper ">
                  <Button
                    name="Update"
                    action={updateEmail}
                    class_name="primary"
                  />
                  <Button
                    name="Cancel"
                    action={cancelEmail}
                    class_name="secondary"
                  />
                </div>
              </div>
            ) : (
              <div className="static">{email}</div>
            )}

            {emailedit ? null : (
              <div class_name="baseline">
                <svg
                  onClick={() => {
                    setemailedit(true);
                    setdetailedit(false);
                    setaddressedit(false);
                  }}
                  viewBox="0 0 16 16"
                  className="bi bi-pencil-square"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="">
            {verifyMessage ? (
              <Message class_name="message " message={verifyMessage} />
            ) : null}

            <div className="button_wrapper ">
              {verfifcationStatus ? (
                <Button name="   Account Verified" class_name="secondary" />
              ) : (
                <Button
                  name="      Verify Account"
                  action={verifyAccount}
                  class_name="primary"
                />
              )}
            </div>
          </div>
        </div>
      </div>

       <div className="address_book">
        <div className="profile-header">
          <div>Address Book</div>

          {addressedit ? null : (
            <div class_name="baseline ">
              <svg
                onClick={() => {
                  setaddressedit(true);
                  setemailedit(false);
                  setdetailedit(false);
                }}
                viewBox="0 0 16 16"
                className="bi bi-pencil-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="profile-body">
          <div>Your default shipping address:</div>
          {addressedit ? (
            <Addressedit update={submitAddress} cancel={cancelAddress} />
          ) : (
            <div className="px-2 profile-text">
              <div className="static user_name">
                {firstName} {lastName}
              </div>
              <div className="static user_email">{email}</div>
              <div className="static user_email">{email}</div>
              <div className="static user_contact">Tel: +233 254 23564 </div>
              <div className="static user_contact">Tel: +233 254 23564 </div>
            </div>
          )}
        </div>
      </div> 
    </div>
  );
};

export default OkukusAccount;
