import React, { useState } from "react";
import Detailedit from "./Edit/Detail_Edit";
import Addressedit from "./Edit/Address_Edit";
import { useAuthentication } from "../../Auth/Context";
import "./account.css";

const OkukusAccount = () => {
  const { firstName, lastName, email } = useAuthentication();
  const [detailedit, setdetailedit] = useState(false);
  const [addressedit, setaddressedit] = useState(false);

  const submit = () => {
    console.log("hi");
  };

  return (
    <div className="account">
      <div className="account_detail">
        <div className="profile-header">
          <div> Details</div>

          {detailedit ? (
            <button
            className='profile_button'
              onClick={() => {
                setdetailedit(false);
                submit();
              }}
            >
              Done
            </button>
          ) : (
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

        {detailedit ? (
          <Detailedit update={submit} />
        ) : (
          <div className="profile-body">
            <div className="user_name">
              {firstName} {lastName}
            </div>

            <div className="user_email">{email}</div>
          </div>
        )}
      </div>

      <div className="address_book">
        <div className="profile-header">
          <div>Address Book</div>

          {addressedit ? (
            <button className='profile_button'
              onClick={() => {
                setaddressedit(false);
                submit();
              }}
            >
              Done
            </button>
          ) : (
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
            <Addressedit update={submit} />
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
