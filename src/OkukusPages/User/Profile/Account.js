import React, { useState } from "react";
import EditDetail from "./Edit/Edit-Detail";
import EmailEdit from "./Edit/Email-Edit";
import Addressedit from "./Edit/Address_Edit";
import { useAuthentication } from "../../Auth/Context";
import Primary from "../../Button/Primary";
import Secondary from "../../Button/Secondary";
import "./account.css";

const OkukusAccount = () => {
  const {
    firstName,
    lastName,
    email,
    uniqueID,
    updateUserProfile,
    updateUserEmail,
    updateUserPassword,
  } = useAuthentication();
  const [detailedit, setdetailedit] = useState(false);
  const [emailedit, setemailedit] = useState(false);
  const [passwordedit, setpasswordedit] = useState(false);
  const [addressedit, setaddressedit] = useState(false);

  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [e_mail, setEmail] = useState();
  const [p_assword, setPassword] = useState();

  const [error, setError] = useState();

  const submitDetail = () => {
    setdetailedit(false);
  };

  const submitEmail = () => {
    setemailedit(false);
  };

  const submitPassword = () => {
    setpasswordedit(false);
  };

  const submitAddress = () => {
    setaddressedit(false);
  };

  const cancel = () => {
    setdetailedit(false);
  };

  const updateData = async (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", uniqueID);
    formData.set("firstname", first_name);
    formData.set("lastname", last_name);

    const data = await updateUserProfile(formData);
    if (data.data.error === true) {
      setError(data.data.message);
    } else if (data.data.error === false) {
      submitDetail();
    }
  };

  const updateEmail = async (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", uniqueID);
    formData.set("email", e_mail);

    const data = await updateUserEmail(formData);

    if (data.data.error === true) {
      setError(data.data.message);
    } else if (data.data.error === false) {
      submitEmail();
    }
  };

  const updatePassword = async (event) => {
    setError();
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", uniqueID);
    formData.set("password", p_assword);

    const data = await updateUserPassword(formData);

    if (data.data.error === true) {
      setError(data.data.message);
    } else if (data.data.error === false) {
      submitPassword();
    }
  };

  return (
    <div className="account">
      <div className="account_detail">
        <div className="profile-header">
          <div> Details</div>
        </div>

        <div className="profile-body">
          <div className="name-change">
            {detailedit ? (
              <div className=" ">
                <input
                  className="edit_input  edit_user_name "
                  placeholder="First Name"
                  value={first_name}
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  className="edit_input  edit_user_name "
                  placeholder="Last Name"
                  value={last_name}
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />

                <div className="message_wrapper ">
                  {error ? (
                    <div className=" user_message "> {error}</div>
                  ) : null}
                </div>

                <div className="button_wrapper ">
                  <Primary name="Save" action={updateData} />
                  <Secondary name="Cancel" action={cancel} />
                </div>
              </div>
            ) : (
              <div className="user_name">
                {firstName} {lastName}
              </div>
            )}

            {detailedit ? null : (
              <svg
                onClick={() => {
                  setdetailedit(true);
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
            )}
          </div>

          <div className="password-change">
            {passwordedit ? (
              <div className=" ">
                <input
                  className="edit_input  edit_user_name "
                  placeholder="password"
                  type="password"
                  value={p_assword}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="message_wrapper ">
                  {error ? (
                    <div className=" user_message "> {error}</div>
                  ) : null}
                </div>

                <div className="button_wrapper ">
                  <Primary name="Save" action={updatePassword} />
                  <Secondary name="Cancel" action={cancel} />
                </div>
              </div>
            ) : (
              <div className="user_password">Password</div>
            )}

            {passwordedit ? null : (
              <svg
                onClick={() => {
                  setpasswordedit(true);
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
            )}
          </div>

          <div className="email-change">
            {emailedit ? (
              <div className=" ">
                <input
                  className="edit_input  edit_user_name "
                  placeholder="Email"
                  type="email"
                  value={e_mail}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="message_wrapper ">
                  {error ? (
                    <div className=" user_message "> {error}</div>
                  ) : null}
                </div>

                <div className="button_wrapper ">
                  <Primary name="Save" action={updateEmail} />
                  <Secondary name="Cancel" action={cancel} />
                </div>
              </div>
            ) : (
              <div className="user_email">{email}</div>
            )}

            {emailedit ? null : (
              <svg
                onClick={() => {
                  setemailedit(true);
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
            )}
          </div>
        </div>
      </div>

      <div className="address_book">
        <div className="profile-header">
          <div>Address Book</div>

          {addressedit ? null : (
            <svg
              onClick={() => {
                setaddressedit(true);
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
          )}
        </div>

        <div className="profile-body">
          <div>Your default shipping address:</div>
          {addressedit ? (
            <Addressedit update={submitAddress} />
          ) : (
            <div className="px-2 profile-text">
              <div className="user_name">
                {firstName} {lastName}
              </div>
              <div className="user_email">{email}</div>
              <div className="user_email">{email}</div>
              <div className="user_contact">Tel: +233 254 23564 </div>
              <div className="user_contact">Tel: +233 254 23564 </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OkukusAccount;
